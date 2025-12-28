(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Rohbot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Rohbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Rohbot() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBotSpeaking, setIsBotSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const chatWindowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Setup Voice Recognition
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Rohbot.useEffect": ()=>{
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognition = new SpeechRecognition();
                recognition.continuous = false;
                recognition.lang = 'en-US';
                recognition.onstart = ({
                    "Rohbot.useEffect": ()=>{
                        setIsListening(true);
                        stopBotSpeaking();
                    }
                })["Rohbot.useEffect"];
                recognition.onend = ({
                    "Rohbot.useEffect": ()=>setIsListening(false)
                })["Rohbot.useEffect"];
                recognition.onresult = ({
                    "Rohbot.useEffect": (event)=>{
                        const transcript = event.results[0][0].transcript;
                        setInput(transcript);
                        handleSendMessage(transcript);
                    }
                })["Rohbot.useEffect"];
                recognitionRef.current = recognition;
            }
        }
    }["Rohbot.useEffect"], []);
    // Animations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Rohbot.useEffect": ()=>{
            if (isOpen) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(chatWindowRef.current, {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out"
                });
                if (messages.length === 0) {
                    const welcome = "Hello. I am ROHbot, an AI twin of Rohan. Ask me anything about his skills or projects.";
                    setMessages([
                        {
                            role: 'bot',
                            content: welcome
                        }
                    ]);
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(chatWindowRef.current, {
                    autoAlpha: 0,
                    scale: 0.9,
                    duration: 0.3,
                    ease: "power2.in"
                });
            }
        }
    }["Rohbot.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Rohbot.useEffect": ()=>{
            if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }["Rohbot.useEffect"], [
        messages
    ]);
    const handleSendMessage = async (textOverride)=>{
        const text = textOverride || input;
        if (!text.trim()) return;
        setMessages((prev)=>[
                ...prev,
                {
                    role: 'user',
                    content: text
                }
            ]);
        setInput('');
        setIsTyping(true);
        try {
            const response = await fetch('https://rohbot.vercel.app/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userInput: text,
                    history: []
                }) // Simplified history for JS
            });
            if (!response.body) return;
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let fullReply = "";
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: 'bot',
                        content: ""
                    }
                ]);
            while(true){
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value, {
                    stream: true
                });
                fullReply += chunk;
                setMessages((prev)=>{
                    const newMsgs = [
                        ...prev
                    ];
                    newMsgs[newMsgs.length - 1].content = fullReply;
                    return newMsgs;
                });
            }
        } catch (e) {
            console.error(e);
        } finally{
            setIsTyping(false);
        }
    };
    const stopBotSpeaking = ()=>{
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
        window.speechSynthesis.cancel();
        setIsBotSpeaking(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                style: {
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#0070f3',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '24px'
                },
                children: isOpen ? '✕' : '🤖'
            }, void 0, false, {
                fileName: "[project]/components/Rohbot.js",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: chatWindowRef,
                style: {
                    position: 'absolute',
                    bottom: '80px',
                    right: '0',
                    width: '350px',
                    height: '500px',
                    backgroundColor: '#0d1117',
                    border: '1px solid #333',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    visibility: 'hidden',
                    opacity: 0,
                    transform: 'scale(0.9)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '15px',
                            borderBottom: '1px solid #333',
                            fontWeight: 'bold'
                        },
                        children: "ROHbot (AI Twin)"
                    }, void 0, false, {
                        fileName: "[project]/components/Rohbot.js",
                        lineNumber: 121,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollRef,
                        style: {
                            flex: 1,
                            overflowY: 'auto',
                            padding: '15px'
                        },
                        children: messages.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '10px',
                                    textAlign: m.role === 'user' ? 'right' : 'left'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'inline-block',
                                        padding: '10px',
                                        borderRadius: '10px',
                                        backgroundColor: m.role === 'user' ? '#0070f3' : '#222',
                                        fontSize: '14px'
                                    },
                                    children: m.content
                                }, void 0, false, {
                                    fileName: "[project]/components/Rohbot.js",
                                    lineNumber: 125,
                                    columnNumber: 29
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/Rohbot.js",
                                lineNumber: 124,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Rohbot.js",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '15px',
                            borderTop: '1px solid #333',
                            display: 'flex'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: input,
                            onChange: (e)=>setInput(e.target.value),
                            onKeyDown: (e)=>e.key === 'Enter' && handleSendMessage(),
                            style: {
                                flex: 1,
                                backgroundColor: '#000',
                                border: '1px solid #333',
                                color: '#fff',
                                padding: '8px',
                                borderRadius: '5px'
                            },
                            placeholder: "Ask me..."
                        }, void 0, false, {
                            fileName: "[project]/components/Rohbot.js",
                            lineNumber: 132,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Rohbot.js",
                        lineNumber: 131,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Rohbot.js",
                lineNumber: 113,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Rohbot.js",
        lineNumber: 103,
        columnNumber: 9
    }, this);
}
_s(Rohbot, "mlonOJmhR0b6WiCsIh2PcigXtNM=");
_c = Rohbot;
var _c;
__turbopack_context__.k.register(_c, "Rohbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_Rohbot_f9f0651b.js.map