"use client";
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const chatWindowRef = useRef(null);

    const toggleChat = () => {
        if (!isOpen) {
            setIsOpen(true);
            gsap.fromTo(chatWindowRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
            if (messages.length === 0) {
                setMessages([{ text: "Hello! I am ROHbot. Ask me about Rohan's AI projects.", isBot: true }]);
            }
        } else {
            setIsOpen(false);
        }
    };

    return (
        <>
            <div onClick={toggleChat} style={{ position: 'fixed', bottom: '30px', right: '30px', cursor: 'pointer', zIndex: 1001 }}>
                <img src="/avatar1.png" style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid var(--accent-color-1)' }} alt="AI Bot" />
            </div>

            {isOpen && (
                <div className="chat-window" ref={chatWindowRef}>
                    <div className="chat-header">
                        <span style={{ fontWeight: 700 }}>ROHbot Assistant</span>
                        <button onClick={toggleChat} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
                    </div>
                    <div className="chat-messages">
                        {messages.map((m, i) => (
                            <div key={i} className={`chat-message ${m.isBot ? 'bot' : 'user'}`}>{m.text}</div>
                        ))}
                    </div>
                    <div className="chat-input-area">
                        <input type="text" placeholder="Ask a question..." />
                        <button style={{ background: 'var(--accent-color-1)', border: 'none', color: '#fff', borderRadius: '50%', width: '35px', height: '35px' }}>→</button>
                    </div>
                </div>
            )}
        </>
    );
}