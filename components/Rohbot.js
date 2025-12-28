'use client';
import { useState, useEffect, useRef } from 'react';

export default function Rohbot() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  
  // Interruption Control
  const audioQueue = useRef([]);
  const isPlaying = useRef(false);
  const currentAudio = useRef(null);

  useEffect(() => {
    setMounted(true);
    setMessages([{ role: 'bot', content: "Hi! I'm Rohan's twin. Ask me something brief." }]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  if (!mounted) return null;

  // --- INTERRUPT & STOP AUDIO ---
  const stopBotSpeaking = () => {
    if (currentAudio.current) {
        currentAudio.current.pause();
        currentAudio.current = null;
    }
    audioQueue.current = [];
    isPlaying.current = false;
  };

  // --- QUEUED TTS (Plays sentences in order) ---
  const playNextInQueue = () => {
    if (audioQueue.current.length === 0) {
      isPlaying.current = false;
      return;
    }
    isPlaying.current = true;
    const audioUrl = audioQueue.current.shift();
    const audio = new Audio(audioUrl);
    currentAudio.current = audio;
    audio.play();
    audio.onended = () => playNextInQueue();
  };

  const speakSentence = async (text) => {
    try {
      const res = await fetch('https://rohbot.vercel.app/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      if (!res.ok) return;
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      audioQueue.current.push(url);
      if (!isPlaying.current) playNextInQueue();
    } catch (e) { console.error(e); }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;
    
    // 1. INTERRUPT: Stop existing voice immediately
    stopBotSpeaking();

    const userText = input;
    setMessages(prev => [...prev, { role: 'user', content: userText }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://rohbot.vercel.app/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            userInput: userText, 
            history: messages.slice(1).map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.content }] })) 
        })
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      setMessages(prev => [...prev, { role: 'bot', content: "" }]);
      
      let fullText = ""; 
      let currentSentence = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        
        fullText += chunk;
        currentSentence += chunk;

        // 2. LATENCY FIX: If we find punctuation, speak that sentence immediately
        if (/[.!?]/.test(chunk)) {
            speakSentence(currentSentence.trim());
            currentSentence = ""; // Reset for next sentence
        }

        setMessages(prev => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1].content = fullText;
          return newMsgs;
        });
      }
      
      // Speak any remaining text that didn't end in punctuation
      if (currentSentence.trim()) speakSentence(currentSentence.trim());

    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', content: "Snag in the connection." }]);
    } finally {
      setLoading(false);
    }
  };

  const s = {
    btn: { position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000, width: '65px', height: '65px', borderRadius: '50%', backgroundColor: '#0070f3', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
    win: { position: 'fixed', bottom: '110px', right: '30px', zIndex: 1000, width: '350px', height: '500px', backgroundColor: '#0d1117', border: '1px solid #333', borderRadius: '20px', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.8)', fontFamily: 'sans-serif' },
    msg: (role) => ({ alignSelf: role === 'user' ? 'flex-end' : 'flex-start', backgroundColor: role === 'user' ? '#0070f3' : '#1a1a1a', color: '#fff', padding: '12px 16px', borderRadius: '15px', fontSize: '14px', maxWidth: '85%', lineHeight: '1.4' })
  };

  return (
    <>
      <button style={s.btn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <span style={{color:'#fff', fontSize:'24px'}}>✕</span> : <span style={{fontSize:'30px'}}>🤖</span>}
      </button>
      {isOpen && (
        <div style={s.win}>
          <div style={{padding:'15px', background:'#111', borderBottom:'1px solid #222', fontWeight:'bold', display:'flex', justifyContent:'space-between'}}>
            <span>ROHbot</span>
            <button onClick={stopBotSpeaking} style={{fontSize:'10px', color:'#555', background:'none', border:'1px solid #333', borderRadius:'4px', cursor:'pointer'}}>SHUT UP</button>
          </div>
          <div ref={scrollRef} style={{flex:1, overflowY:'auto', padding:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
            {messages.map((m, i) => ( <div key={i} style={s.msg(m.role)}>{m.content}</div> ))}
          </div>
          <div style={{padding:'15px', borderTop:'1px solid #222', display:'flex', gap:'10px'}}>
            <input style={{flex:1, background:'#000', border:'1px solid #333', color:'#fff', padding:'10px', borderRadius:'8px', outline:'none'}} value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSendMessage()} placeholder="Interrupt me..." />
            <button onClick={handleSendMessage} style={{background:'#0070f3', border:'none', color:'#fff', padding:'10px 15px', borderRadius:'8px', cursor:'pointer'}}>↑</button>
          </div>
        </div>
      )}
    </>
  );
}
