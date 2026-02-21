'use client';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// ─── Constants ────────────────────────────────────────────────────────────────
const LONG_MSG_THRESHOLD = 400;

const initialSuggestions = [
    'Tell me about your education',
    'What are your core AI skills?',
    'Show me your RAG projects',
    'Data Center experience?',
];

const postAnswerSuggestions = [
    { label: '🏠 Back to main questions', action: 'main'    },
    { label: '🔄 Ask another question',   action: 'ask'     },
    { label: '📄 View Rohan\'s resume',   action: 'resume'  },
    { label: '🔗 See his GitHub',         action: 'github'  },
    { label: '👋 Contact Rohan',          action: 'contact' },
    { label: '💡 Tell me something surprising', action: 'send' },
];

// ─── CollapsibleBubble ────────────────────────────────────────────────────────
function CollapsibleBubble({ content, isBot }) {
    const isLong = isBot && content.length > LONG_MSG_THRESHOLD;
    const [expanded, setExpanded] = useState(false);
    const displayText = isLong && !expanded ? content.slice(0, LONG_MSG_THRESHOLD) + '…' : content;

    return (
        <div className={`bubble ${isBot ? 'bubble-bot' : 'bubble-user'}`}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{displayText}</ReactMarkdown>
            {isLong && (
                <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
                    {expanded ? '▲ Show less' : '▼ Read more'}
                </button>
            )}
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Rohbot() {
    const [mounted, setMounted]             = useState(false);
    const [isOpen, setIsOpen]               = useState(false);
    const [input, setInput]                 = useState('');
    const [messages, setMessages]           = useState([]);
    const [loading, setLoading]             = useState(false);
    const [suggestionMode, setSuggestionMode] = useState('initial');
    const [suggestions, setSuggestions]     = useState(initialSuggestions);
    const [isVoicePlaying, setIsVoicePlaying] = useState(false);

    const scrollRef   = useRef(null);
    const inputRef    = useRef(null);
    const avatarRef   = useRef(null);

    // Voice queue (unchanged logic)
    const audioQueue  = useRef([]);
    const isPlaying   = useRef(false);
    const currentAudio = useRef(null);
    const spokenUpToRef = useRef(0);

    useEffect(() => {
        setMounted(true);
        setMessages([{
            role: 'bot',
            content: "Hi! I'm **ROHbot** — Rohan's AI portfolio assistant. Ask me anything about his projects, skills, or experience.",
        }]);
    }, []);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages, loading]);

    if (!mounted) return null;

    // ── Voice logic (unchanged) ──
    const stopBotSpeaking = () => {
        if (currentAudio.current) {
            currentAudio.current.pause();
            currentAudio.current = null;
        }
        try { audioQueue.current.forEach((u) => URL.revokeObjectURL(u)); } catch {}
        audioQueue.current = [];
        isPlaying.current = false;
        setIsVoicePlaying(false);
    };

    const playNextInQueue = () => {
        if (audioQueue.current.length === 0) {
            isPlaying.current = false;
            setIsVoicePlaying(false);
            return;
        }
        isPlaying.current = true;
        setIsVoicePlaying(true);
        const audioUrl = audioQueue.current.shift();
        const audio = new Audio(audioUrl);
        currentAudio.current = audio;
        audio.play().catch(() => { isPlaying.current = false; setIsVoicePlaying(false); });
        audio.onended = () => {
            try { URL.revokeObjectURL(audioUrl); } catch {}
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
        } catch (e) { console.error(e); }
    };

    const speakNewCompleteSentences = (fullText) => {
        const start = spokenUpToRef.current;
        if (start >= fullText.length) return;
        const slice = fullText.slice(start);
        const matches = slice.matchAll(/[^.!?]*[.!?]+(\s|$)/g);
        let lastEnd = 0;
        for (const m of matches) lastEnd = m.index + m[0].length;
        if (lastEnd > 0) {
            const toSpeak = slice.slice(0, lastEnd).trim();
            if (toSpeak) speakSentence(toSpeak);
            spokenUpToRef.current += lastEnd;
        }
    };

    const buildHistoryForBackend = (msgs) =>
        msgs.slice(1).filter((m) => m?.content).map((m) => ({
            role: m.role === 'user' ? 'user' : 'assistant',
            content: String(m.content),
        }));

    // ── Send message ──
    const handleSendMessage = async (textOverride) => {
        const text = typeof textOverride === 'string' ? textOverride : input;
        if (!text.trim() || loading) return;

        stopBotSpeaking();
        spokenUpToRef.current = 0;

        const snapshot = messages;
        setMessages((prev) => [...prev, { role: 'user', content: text }]);
        setInput('');
        setLoading(true);
        setSuggestions([]);

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

            if (!res.body) {
                const t = await res.text().catch(() => 'No reply returned.');
                setMessages((prev) => [...prev, { role: 'bot', content: t }]);
                speakSentence(t);
                return;
            }

            const reader  = res.body.getReader();
            const decoder = new TextDecoder();
            setMessages((prev) => [...prev, { role: 'bot', content: '' }]);
            let fullText = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                fullText += decoder.decode(value, { stream: true });
                setMessages((prev) => {
                    const n = [...prev];
                    n[n.length - 1] = { ...n[n.length - 1], content: fullText };
                    return n;
                });
                speakNewCompleteSentences(fullText);
            }

            const tail = fullText.slice(spokenUpToRef.current).trim();
            if (tail) speakSentence(tail);

        } catch (e) {
            console.error(e);
            setMessages((prev) => [...prev, { role: 'bot', content: 'Snag in the connection.' }]);
        } finally {
            setLoading(false);
            setTimeout(() => {
                setSuggestions(postAnswerSuggestions.map((s) => s.label));
                setSuggestionMode('post');
            }, 800);
        }
    };

    // ── Suggestion click handler ──
    const handleSuggestionClick = (label) => {
        if (suggestionMode === 'initial') {
            handleSendMessage(label);
            return;
        }
        const found = postAnswerSuggestions.find((s) => s.label === label);
        if (!found) return;
        switch (found.action) {
            case 'main':
                setSuggestions(initialSuggestions);
                setSuggestionMode('initial');
                break;
            case 'ask':
                setSuggestions([]);
                setSuggestionMode('initial');
                setTimeout(() => inputRef.current?.focus(), 50);
                break;
            case 'resume':
                window.open('/resume.pdf', '_blank');
                break;
            case 'github':
                window.open('https://github.com/rohanraje', '_blank');
                break;
            case 'contact':
                window.open('mailto:rohan@rohanraje.com', '_blank');
                break;
            case 'send':
                handleSendMessage("Tell me something surprising about Rohan's background or projects");
                break;
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setSuggestions(initialSuggestions);
            setSuggestionMode('initial');
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            stopBotSpeaking();
        }
    };

    // ─── Render ───────────────────────────────────────────────────────────────
    return (
        <>
            {/* ── Floating trigger ── */}
            <div className="roh-trigger" onClick={toggleChat}>
                <div className="roh-ring" />
                <div ref={avatarRef} className="roh-avatar-inner">
                    <span className="roh-avatar-emoji">🤖</span>
                </div>
                {!isOpen && <div className="roh-badge">AI</div>}
            </div>

            {/* ── Chat window ── */}
            {isOpen && (
                <div className="roh-window">

                    {/* Header */}
                    <div className="roh-header">
                        <div className="roh-header-left">
                            <div className="roh-header-avatar">
                                <span style={{ fontSize: '18px' }}>🤖</span>
                                <span className="roh-status-dot" />
                            </div>
                            <div className="roh-header-info">
                                <span className="roh-header-name">ROHbot</span>
                                <span className="roh-header-sub">Portfolio Assistant · AI-powered</span>
                            </div>
                        </div>
                        <div className="roh-header-actions">
                            {isVoicePlaying && (
                                <button onClick={stopBotSpeaking} className="roh-icon-btn roh-voice-btn" title="Stop voice">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                        <line x1="23" y1="9" x2="17" y2="15"/>
                                        <line x1="17" y1="9" x2="23" y2="15"/>
                                    </svg>
                                </button>
                            )}
                            <button onClick={toggleChat} className="roh-icon-btn roh-close-btn" title="Close">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="roh-messages" ref={scrollRef}>
                        {messages.map((m, i) => (
                            <div key={i} className={`roh-msg-row ${m.role === 'bot' ? 'roh-bot-row' : 'roh-user-row'}`}>
                                {m.role === 'bot' && (
                                    <div className="roh-bot-avatar-sm">🤖</div>
                                )}
                                {m.role === 'bot' && m.content === '' ? (
                                    <div className="bubble bubble-bot">
                                        <div className="roh-typing">
                                            <span /><span /><span />
                                        </div>
                                    </div>
                                ) : (
                                    <CollapsibleBubble content={m.content} isBot={m.role === 'bot'} />
                                )}
                            </div>
                        ))}
                        {loading && messages[messages.length - 1]?.role !== 'bot' && (
                            <div className="roh-msg-row roh-bot-row">
                                <div className="roh-bot-avatar-sm">🤖</div>
                                <div className="bubble bubble-bot">
                                    <div className="roh-typing"><span /><span /><span /></div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Suggestions */}
                    {suggestions.length > 0 && !loading && (
                        <div className="roh-suggestions">
                            <span className="roh-suggestions-label">
                                {suggestionMode === 'post' ? 'What next?' : 'Quick questions'}
                            </span>
                            <div className="roh-chips">
                                {suggestions.map((s, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSuggestionClick(s)}
                                        disabled={loading}
                                        className={`roh-chip ${suggestionMode === 'post' ? 'roh-chip-post' : ''}`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Input */}
                    <div className="roh-input-area">
                        <input
                            ref={inputRef}
                            className="roh-input"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder={loading ? 'ROHbot is thinking…' : 'Ask me anything…'}
                            disabled={loading}
                        />
                        <button
                            onClick={() => handleSendMessage()}
                            disabled={loading || !input.trim()}
                            className="roh-send-btn"
                        >
                            {loading ? <div className="roh-spinner" /> : (
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"/>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600&family=Syne:wght@600;700&display=swap');

                /* ── Variables ── */
                .roh-window, .roh-trigger {
                    --bg:      #0e1118;
                    --s1:      #151b28;
                    --s2:      #1c2335;
                    --border:  rgba(255,255,255,0.07);
                    --accent:  #4f8ef7;
                    --accent2: #a78bfa;
                    --glow:    rgba(79,142,247,0.22);
                    --text:    #dde2ee;
                    --muted:   #6b7590;
                    --green:   #34d399;
                    --red:     #f87171;
                    --font:    'DM Sans', sans-serif;
                    --display: 'Syne', sans-serif;
                }

                /* ── Trigger ── */
                .roh-trigger {
                    position: fixed;
                    bottom: 28px;
                    right: 28px;
                    z-index: 1001;
                    width: 64px;
                    height: 64px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }
                .roh-ring {
                    position: absolute;
                    inset: -3px;
                    border-radius: 50%;
                    background: conic-gradient(from 0deg, var(--accent), var(--accent2), var(--accent));
                    animation: roh-spin 4s linear infinite;
                    opacity: 0.85;
                }
                @keyframes roh-spin { to { transform: rotate(360deg); } }
                .roh-avatar-inner {
                    position: relative;
                    z-index: 1;
                    width: 58px;
                    height: 58px;
                    border-radius: 50%;
                    background: var(--bg);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 0 24px var(--glow);
                }
                .roh-avatar-emoji { font-size: 26px; line-height: 1; }
                .roh-badge {
                    position: absolute;
                    top: -2px;
                    right: -2px;
                    background: var(--accent);
                    color: #fff;
                    font-family: var(--display);
                    font-size: 8px;
                    font-weight: 700;
                    letter-spacing: 0.6px;
                    padding: 2px 5px;
                    border-radius: 6px;
                    z-index: 2;
                    border: 2px solid var(--bg);
                    line-height: 1.4;
                }

                /* ── Window ── */
                .roh-window {
                    position: fixed;
                    bottom: 106px;
                    right: 28px;
                    width: 390px;
                    height: 590px;
                    background: var(--s1);
                    border-radius: 18px;
                    border: 1px solid var(--border);
                    box-shadow:
                        0 30px 80px rgba(0,0,0,0.6),
                        0 0 0 1px rgba(79,142,247,0.08),
                        inset 0 1px 0 rgba(255,255,255,0.05);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    z-index: 1000;
                    font-family: var(--font);
                    color: var(--text);
                    animation: roh-open 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards;
                }
                @keyframes roh-open {
                    from { opacity: 0; transform: translateY(20px) scale(0.96); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }

                /* ── Header ── */
                .roh-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 14px 16px;
                    background: var(--s2);
                    border-bottom: 1px solid var(--border);
                    flex-shrink: 0;
                }
                .roh-header-left { display: flex; align-items: center; gap: 10px; }
                .roh-header-avatar {
                    position: relative;
                    width: 36px;
                    height: 36px;
                    background: var(--bg);
                    border-radius: 50%;
                    border: 1.5px solid var(--border);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .roh-status-dot {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 10px;
                    height: 10px;
                    background: var(--green);
                    border-radius: 50%;
                    border: 2px solid var(--s2);
                    animation: roh-pulse 2s ease-in-out infinite;
                }
                @keyframes roh-pulse {
                    0%,100% { box-shadow: 0 0 0 0   rgba(52,211,153,0.5); }
                    50%     { box-shadow: 0 0 0 5px rgba(52,211,153,0); }
                }
                .roh-header-info { display: flex; flex-direction: column; gap: 1px; }
                .roh-header-name {
                    font-family: var(--display);
                    font-size: 14px;
                    font-weight: 700;
                    color: var(--text);
                }
                .roh-header-sub { font-size: 11px; color: var(--muted); }
                .roh-header-actions { display: flex; align-items: center; gap: 6px; }
                .roh-icon-btn {
                    width: 30px; height: 30px;
                    border-radius: 8px;
                    border: 1px solid var(--border);
                    background: rgba(255,255,255,0.04);
                    color: var(--muted);
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }
                .roh-voice-btn {
                    color: var(--red);
                    border-color: rgba(248,113,113,0.3);
                    background: rgba(248,113,113,0.08);
                    animation: roh-voice-pulse 1.4s ease-in-out infinite;
                }
                @keyframes roh-voice-pulse {
                    0%,100% { box-shadow: 0 0 0 0   rgba(248,113,113,0.4); }
                    50%     { box-shadow: 0 0 0 5px rgba(248,113,113,0); }
                }
                .roh-close-btn:hover {
                    background: rgba(255,255,255,0.09);
                    color: var(--text);
                }

                /* ── Messages ── */
                .roh-messages {
                    flex: 1;
                    overflow-y: auto;
                    padding: 18px 14px;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }
                .roh-messages::-webkit-scrollbar { width: 3px; }
                .roh-messages::-webkit-scrollbar-track { background: transparent; }
                .roh-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }

                .roh-msg-row {
                    display: flex;
                    align-items: flex-end;
                    gap: 8px;
                    animation: roh-msg-in 0.28s ease forwards;
                }
                @keyframes roh-msg-in {
                    from { opacity: 0; transform: translateY(8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .roh-bot-row  { justify-content: flex-start; }
                .roh-user-row { justify-content: flex-end; }

                .roh-bot-avatar-sm {
                    width: 26px; height: 26px;
                    border-radius: 50%;
                    background: var(--bg);
                    border: 1px solid var(--border);
                    display: flex; align-items: center; justify-content: center;
                    font-size: 14px;
                    flex-shrink: 0;
                    margin-bottom: 2px;
                }

                /* ── Bubbles ── */
                .bubble {
                    max-width: 78%;
                    padding: 10px 14px;
                    border-radius: 14px;
                    font-size: 13.5px;
                    line-height: 1.65;
                    word-break: break-word;
                }
                .bubble-bot {
                    background: var(--s2);
                    border: 1px solid var(--border);
                    color: var(--text);
                    border-bottom-left-radius: 4px;
                }
                .bubble-user {
                    background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
                    color: #fff;
                    border-bottom-right-radius: 4px;
                    box-shadow: 0 4px 16px rgba(79,142,247,0.28);
                }
                .bubble :global(p)            { margin: 0 0 6px; }
                .bubble :global(p:last-child) { margin-bottom: 0; }
                .bubble :global(strong)       { font-weight: 600; }
                .bubble :global(code) {
                    background: rgba(0,0,0,0.25);
                    padding: 1px 5px; border-radius: 4px;
                    font-size: 12px; font-family: 'Courier New', monospace;
                }
                .bubble :global(ul), .bubble :global(ol) { padding-left: 16px; margin: 4px 0; }
                .bubble :global(li) { margin-bottom: 3px; }
                .bubble :global(a)       { color: var(--accent); text-decoration: none; }
                .bubble :global(a:hover) { text-decoration: underline; }

                /* ── Read more ── */
                .read-more-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    margin-top: 10px;
                    padding: 4px 10px;
                    background: rgba(79,142,247,0.12);
                    border: 1px solid rgba(79,142,247,0.25);
                    border-radius: 20px;
                    color: #93b4fc;
                    font-size: 11px;
                    font-family: var(--font);
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.15s ease;
                    letter-spacing: 0.2px;
                }
                .read-more-btn:hover {
                    background: rgba(79,142,247,0.22);
                    border-color: rgba(79,142,247,0.4);
                    color: #c7d9ff;
                }

                /* ── Typing dots ── */
                .roh-typing {
                    display: flex; gap: 4px; align-items: center; padding: 2px 0;
                }
                .roh-typing span {
                    width: 6px; height: 6px;
                    background: var(--muted);
                    border-radius: 50%;
                    animation: roh-dot 1.2s ease-in-out infinite;
                }
                .roh-typing span:nth-child(2) { animation-delay: 0.2s; }
                .roh-typing span:nth-child(3) { animation-delay: 0.4s; }
                @keyframes roh-dot {
                    0%,80%,100% { transform: translateY(0);    opacity: 0.4; }
                    40%         { transform: translateY(-5px); opacity: 1; }
                }

                /* ── Suggestions ── */
                .roh-suggestions {
                    padding: 10px 14px 12px;
                    border-top: 1px solid var(--border);
                    background: var(--s1);
                    flex-shrink: 0;
                }
                .roh-suggestions-label {
                    display: block;
                    font-size: 10px; font-weight: 600;
                    letter-spacing: 0.9px; text-transform: uppercase;
                    color: var(--muted); margin-bottom: 8px;
                }
                .roh-chips { display: flex; flex-wrap: wrap; gap: 6px; }
                .roh-chip {
                    background: rgba(79,142,247,0.07);
                    color: #93b4fc;
                    border: 1px solid rgba(79,142,247,0.18);
                    border-radius: 20px;
                    padding: 5px 12px;
                    font-size: 12px;
                    font-family: var(--font);
                    cursor: pointer;
                    transition: all 0.18s ease;
                    white-space: nowrap;
                    line-height: 1.4;
                }
                .roh-chip:hover:not(:disabled) {
                    background: rgba(79,142,247,0.16);
                    border-color: rgba(79,142,247,0.35);
                    color: #c7d9ff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(79,142,247,0.15);
                }
                .roh-chip-post {
                    background: rgba(167,139,250,0.07);
                    color: #c4b5fd;
                    border-color: rgba(167,139,250,0.18);
                }
                .roh-chip-post:hover:not(:disabled) {
                    background: rgba(167,139,250,0.16);
                    border-color: rgba(167,139,250,0.35);
                    color: #e0d9ff;
                    box-shadow: 0 4px 12px rgba(167,139,250,0.15);
                }
                .roh-chip:disabled { opacity: 0.4; cursor: not-allowed; }

                /* ── Input ── */
                .roh-input-area {
                    display: flex; align-items: center; gap: 8px;
                    padding: 12px 14px;
                    background: var(--s2);
                    border-top: 1px solid var(--border);
                    flex-shrink: 0;
                }
                .roh-input {
                    flex: 1;
                    background: var(--s1);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 10px 14px;
                    font-size: 13.5px;
                    font-family: var(--font);
                    color: var(--text);
                    outline: none;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }
                .roh-input::placeholder { color: var(--muted); font-style: italic; }
                .roh-input:focus {
                    border-color: rgba(79,142,247,0.4);
                    box-shadow: 0 0 0 3px rgba(79,142,247,0.1);
                }
                .roh-input:disabled { opacity: 0.55; cursor: not-allowed; }
                .roh-send-btn {
                    width: 38px; height: 38px;
                    border-radius: 12px; border: none;
                    background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
                    color: #fff; cursor: pointer;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                    transition: all 0.18s ease;
                    box-shadow: 0 4px 14px rgba(79,142,247,0.3);
                }
                .roh-send-btn:hover:not(:disabled) {
                    transform: translateY(-1px);
                    box-shadow: 0 6px 20px rgba(79,142,247,0.42);
                }
                .roh-send-btn:disabled {
                    opacity: 0.35; cursor: not-allowed;
                    transform: none; box-shadow: none;
                }
                .roh-spinner {
                    width: 15px; height: 15px;
                    border: 2px solid rgba(255,255,255,0.3);
                    border-top-color: #fff;
                    border-radius: 50%;
                    animation: roh-spin-s 0.75s linear infinite;
                }
                @keyframes roh-spin-s { to { transform: rotate(360deg); } }

                /* ── Mobile ── */
                @media (max-width: 440px) {
                    .roh-window {
                        width: calc(100vw - 20px);
                        right: 10px; bottom: 88px;
                        height: 70vh; max-height: 580px;
                        border-radius: 16px;
                    }
                    .roh-trigger { bottom: 18px; right: 18px; }
                    .roh-chip { font-size: 11px; padding: 4px 10px; }
                }
            `}</style>
        </>
    );
}