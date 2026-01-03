// portfolio/components/Rohbot.js
"use client";
import { useEffect, useRef, useState } from "react";

export default function Rohbot() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef(null);

  // Voice queue
  const audioQueue = useRef([]);
  const isPlaying = useRef(false);
  const currentAudio = useRef(null);

  // Speak tracking (prevents repeating / partial sentence chaos)
  const spokenUpToRef = useRef(0);

  const presets = [
    "Tell me about your education",
    "What are your core AI skills?",
    "Show me your RAG projects",
    "Data Center experience?",
  ];

  useEffect(() => {
    setMounted(true);
    setMessages([
      { role: "bot", content: "Hi! I'm Rohan's twin. Use the suggestions below or ask me anything brief." },
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
