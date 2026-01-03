'use client';
import { useEffect, useRef, useState } from 'react';

export default function Rohbot() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  // Voice queue
  const audioQueue = useRef([]);
  const isPlaying = useRef(false);
  const currentAudio = useRef(null);

  // Streaming-TTS tracking (prevents rereading the same text)
  const spokenUpToRef = useRef(0);

  const presets = [
    'Tell me about your education',
    'What are your core AI skills?',
    'Show me your RAG projects',
    'Data Center experience?',
  ];

  useEffect(() => {
    setMounted(true);
    setMessages([
      {
        role: 'bot',
        content: "Hi! I'm Rohan's twin. Use the suggestions below or ask me anything brief.",
      },
    ]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  if (!mounted) return null;

  const stopBotSpeaking = () => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current = null;
    }
    try {
      audioQueue.current.forEach((u) => URL.revokeObjectURL(u));
    } catch {}
    audioQueue.current = [];
    isPlaying.current = false;
  };

  const playNextInQueue = () => {
    if (audioQueue.current.length === 0) {
      isPlaying.current = false;
      return;
    }
    isPlaying.current = true;

    const audioUrl = audioQueue.current.shift();
    const audio = new Audio(audioUrl);
    currentAudio.current = audio;

    audio.play().catch(() => {
      isPlaying.current = false;
    });

    audio.onended = () => {
      try {
        URL.revokeObjectURL(audioUrl);
      } catch {}
      playNextInQueue();
    };
  };

  const speakSentence = async (text) => {
    const clean = String(text || '').trim();
    if (!clean) return;

    try {
      const res = await fetch('https://rohbot.vercel.app/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: clean }),
      });

      if (!res.ok) return;

      const ct = (res.headers.get('content-type') || '').toLowerCase();
      if (!ct.includes('audio')) return;

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      audioQueue.current.push(url);
      if (!isPlaying.current) playNextInQueue();
    } catch (e) {
      console.error(e);
    }
  };

  // Speak only NEW complete sentences from the streamed text
  const speakNewCompleteSentences = (fullText) => {
    const start = spokenUpToRef.current;
    if (start >= fullText.length) return;

    const slice = fullText.slice(start);

    // sentences ending with . ! ? followed by space/newline/end
    const matches = slice.matchAll(/[^.!?]*[.!?]+(\s|$)/g);

    let lastEnd = 0;
    for (const m of matches) lastEnd = m.index + m[0].length;

    if (lastEnd > 0) {
      const toSpeak = slice.slice(0, lastEnd).trim();
      if (toSpeak) speakSentence(toSpeak);
      spokenUpToRef.current += lastEnd;
    }
  };

  const buildHistoryForBackend = (msgs) => {
    // Backend expects { role: 'user'|'assistant', content: '...' }
    return msgs
      .slice(1) // skip greeting
      .filter((m) => m?.content)
      .map((m) => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: String(m.content),
      }));
  };

  const handleSendMessage = async (textOverride) => {
    const text = typeof textOverride === 'string' ? textOverride : input;
    if (!text.trim() || loading) return;

    stopBotSpeaking();
    spokenUpToRef.current = 0;

    const snapshot = messages;

    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://rohbot.vercel.app/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userInput: text,
          history: buildHistoryForBackend(snapshot),
        }),
      });

      if (!res.ok) {
        const err = await res.text().catch(() => '');
        console.error('chat error:', err);
        setMessages((prev) => [...prev, { role: 'bot', content: 'Snag in the connection.' }]);
        return;
      }

      // Streamed plain text
      if (!res.body) {
        const t = await res.text().catch(() => 'No reply returned.');
        setMessages((prev) => [...prev, { role: 'bot', content: t }]);
        speakSentence(t);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      setMessages((prev) => [...prev, { role: 'bot', content: '' }]);

      let fullText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        fullText += chunk;

        setMessages((prev) => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1] = { ...newMsgs[newMsgs.length - 1], content: fullText };
          return newMsgs;
        });

        speakNewCompleteSentences(fullText);
      }

      // speak any leftover tail
      const tail = fullText.slice(spokenUpToRef.current).trim();
      if (tail) speakSentence(tail);
    } catch (e) {
      console.error(e);
      setMessages((prev) => [...prev, { role: 'bot', content: 'Snag in the connection.' }]);
    } finally {
      setLoading(false);
    }
  };

  const s = {
    btn: {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      zIndex: 1000,
      width: '65px',
      height: '65px',
      borderRadius: '50%',
      backgroundColor: '#0070f3',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    },
    win: {
      position: 'fixed',
      bottom: '110px',
      right: '30px',
      zIndex: 1000,
      width: '350px',
      height: '520px',
      backgroundColor: '#0d1117',
      border: '1px solid #333',
      borderRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
      fontFamily: 'sans-serif',
    },
    chat: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    msg: (role) => ({
      alignSelf: role === 'user' ? 'flex-end' : 'flex-start',
      backgroundColor: role === 'user' ? '#0070f3' : '#1a1a1a',
      color: '#fff',
      padding: '12px 16px',
      borderRadius: '15px',
      fontSize: '13px',
      maxWidth: '85%',
      lineHeight: '1.4',
      whiteSpace: 'pre-wrap',
    }),
    suggestions: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      padding: '0 20px 15px 20px',
      backgroundColor: '#0d1117',
    },
    pill: {
      backgroundColor: '#161b22',
      border: '1px solid #333',
      color: '#888',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '11px',
      cursor: 'pointer',
      transition: '0.2s',
    },
    inputArea: {
      padding: '15px',
      borderTop: '1px solid #222',
      display: 'flex',
      gap: '10px',
      backgroundColor: '#111',
    },
  };

  return (
    <>
      <button style={s.btn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <span style={{ color: '#fff', fontSize: '24px' }}>✕</span>
        ) : (
          <span style={{ fontSize: '30px' }}>🤖</span>
        )}
      </button>

      {isOpen && (
        <div style={s.win}>
          <div
            style={{
              padding: '15px',
              background: '#111',
              borderBottom: '1px solid #222',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '14px', color: '#eee' }}>ROHbot</span>
            <button
              onClick={stopBotSpeaking}
              style={{
                fontSize: '9px',
                color: '#555',
                background: 'none',
                border: '1px solid #333',
                padding: '4px 8px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              STOP VOICE
            </button>
          </div>

          <div ref={scrollRef} style={s.chat}>
            {messages.map((m, i) => (
              <div key={i} style={s.msg(m.role)}>
                {m.content}
              </div>
            ))}
            {loading && <div style={{ fontSize: '11px', color: '#555' }}>Thinking...</div>}
          </div>

          {messages.length === 1 && !loading && (
            <div style={s.suggestions}>
              {presets.map((text) => (
                <button
                  key={text}
                  onClick={() => handleSendMessage(text)}
                  style={s.pill}
                  onMouseOver={(e) => {
                    e.target.style.borderColor = '#0070f3';
                    e.target.style.color = '#fff';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.borderColor = '#333';
                    e.target.style.color = '#888';
                  }}
                >
                  {text}
                </button>
              ))}
            </div>
          )}

          <div style={s.inputArea}>
            <input
              style={{
                flex: 1,
                background: '#000',
                border: '1px solid #333',
                color: '#fff',
                padding: '10px',
                borderRadius: '12px',
                outline: 'none',
                fontSize: '13px',
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me something..."
            />
            <button
              onClick={() => handleSendMessage()}
              style={{
                background: '#0070f3',
                border: 'none',
                color: '#fff',
                padding: '10px 15px',
                borderRadius: '12px',
                cursor: 'pointer',
              }}
            >
              ↑
            </button>
          </div>
        </div>
      )}
    </>
  );
}
