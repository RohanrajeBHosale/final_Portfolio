'use client';
import { useState, useEffect, useRef } from 'react';

export default function Rohbot() {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef(null);
    const audioRef = useRef(null);

    useEffect(() => {
        setMounted(true);
        setMessages([{ role: 'bot', content: "Hello. I am ROHbot, Rohan's digital twin. I have access to his full background and projects. How can I help you today?" }]);
    }, []);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages]);

    if (!mounted) return null;

    const speakText = async (text) => {
        try {
            const res = await fetch('https://rohbot.vercel.app/api/tts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text })
            });
            if (!res.ok) return;
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            if (audioRef.current) audioRef.current.pause();
            audioRef.current = new Audio(url);
            audioRef.current.play();
        } catch (e) { console.error("ElevenLabs Error:", e); }
    };

    const handleSendMessage = async () => {
        if (!input.trim() || loading) return;
        const userText = input;
        setMessages(prev => [...prev, { role: 'user', content: userText }]);
        setInput('');
        setLoading(true);

        try {
            const res = await fetch('https://rohbot.vercel.app/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userInput: userText, history: messages.slice(1).map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.content }] })) })
            });

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            setMessages(prev => [...prev, { role: 'bot', content: "" }]);

            let fullText = "";
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value, { stream: true });
                fullText += chunk;
                setMessages(prev => {
                    const newMsgs = [...prev];
                    newMsgs[newMsgs.length - 1].content = fullText;
                    return newMsgs;
                });
            }
            speakText(fullText);
        } catch (e) {
            setMessages(prev => [...prev, { role: 'bot', content: "My connection timed out. Please try again." }]);
        } finally {
            setLoading(false);
        }
    };

    const s = {
        btn: { position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000, width: '65px', height: '65px', borderRadius: '50%', backgroundColor: '#000', border: '2px solid #3b82f6', cursor: 'pointer', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' },
        win: { position: 'fixed', bottom: '110px', right: '30px', zIndex: 1000, width: '380px', height: '550px', backgroundColor: '#0a0a0a', border: '1px solid #222', borderRadius: '24px', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.9)', fontFamily: 'sans-serif' },
        header: { padding: '20px', background: '#111', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
        chat: { flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' },
        msg: (role) => ({ alignSelf: role === 'user' ? 'flex-end' : 'flex-start', backgroundColor: role === 'user' ? '#2563eb' : '#1a1a1a', color: '#fff', padding: '12px 16px', borderRadius: '18px', fontSize: '14px', maxWidth: '85%', border: role === 'user' ? 'none' : '1px solid #333' }),
        inputArea: { padding: '20px', borderTop: '1px solid #222', display: 'flex', gap: '10px', backgroundColor: '#0a0a0a' }
    };

    return (
        <>
            <button style={s.btn} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <span style={{color:'#fff', fontSize:'24px'}}>✕</span> :
                    <img src="/avatar-rohan.png" style={{width:'100%', height:'100%', objectFit:'cover'}}
                         onError={(e) => e.target.src = "https://api.dicebear.com/7.x/bottts/svg?seed=Rohan"} />
                }
            </button>
            {isOpen && (
                <div style={s.win}>
                    <div style={s.header}>
                        <div>
                            <div style={{fontWeight:'800', color:'#fff', fontSize:'16px'}}>ROHbot</div>
                            <div style={{fontSize:'10px', color:'#22c55e', fontWeight:'bold'}}>● DIGITAL TWIN ACTIVE</div>
                        </div>
                    </div>
                    <div ref={scrollRef} style={s.chat}>
                        {messages.map((m, i) => ( <div key={i} style={s.msg(m.role)}>{m.content}</div> ))}
                        {loading && <div style={{fontSize:'10px', color:'#555', letterSpacing:'1px'}}>GENERATING VOICE...</div>}
                    </div>
                    <div style={s.inputArea}>
                        <input style={{flex:1, background:'#111', border:'1px solid #333', color:'#fff', padding:'12px', borderRadius:'12px', outline:'none'}} value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSendMessage()} placeholder="Ask me about Rohan..." />
                        <button onClick={handleSendMessage} style={{background:'#2563eb', border:'none', color:'#fff', width:'45px', borderRadius:'12px', cursor:'pointer', fontWeight:'bold'}}>↑</button>
                    </div>
                </div>
            )}
        </>
    );
}