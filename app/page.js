"use client";
import { useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function Home() {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(".hero-text", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" })
            .from(".role-pill", { scale: 0.8, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.4")
            .from(".highlight-card", { y: 30, opacity: 0, stagger: 0.2, duration: 0.8 }, "-=0.3");
    }, []);

    const roles = [
        { title: "AI/ML Engineer", desc: "GenAI, LLM Systems & Computer Vision", icon: "brain" },
        { title: "Data Scientist", desc: "Statistical Modeling & Predictive Analytics", icon: "chart-line" },
        { title: "Data Engineer", desc: "ETL Pipelines, Spark & API Architecture", icon: "database" },
        { title: "Data Analyst", desc: "Business Intelligence & SQL Optimization", icon: "magnifying-glass-chart" },
        { title: "Data Center Specialist", desc: "Automation, Reliability & Infrastructure", icon: "server" }
    ];

    return (
        <div className="container">
            {/* HERO SECTION */}
            <section style={{ textAlign: 'center', marginBottom: '100px' }}>
                <div className="hero-text">
                    <h1 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '10px' }} className="gradient-text">
                        Rohanraje Bhosale
                    </h1>
                    <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '30px' }}>
                        Architecting the End-to-End Data Lifecycle
                    </h2>
                </div>

                {/* ROLE PILLS */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', maxWidth: '800px', margin: '0 auto 40px' }}>
                    {roles.map((r, i) => (
                        <span key={i} className="role-pill" style={{
                            padding: '8px 20px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '30px',
                            fontSize: '0.85rem',
                            color: 'var(--subtle-text-color)'
                        }}>
                            {r.title}
                        </span>
                    ))}
                </div>

                <div className="hero-text" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <Link href="/projects" className="card" style={{ padding: '12px 30px', background: 'var(--accent-color-1)', color: '#fff', border: 'none' }}>
                        Explore My Work
                    </Link>
                    <a href="mailto:therohanrajebhosale@gmail.com" className="card" style={{ padding: '12px 30px', color: '#fff' }}>
                        Contact Me
                    </a>
                </div>
            </section>

            {/* THE FIVE PILLARS SECTION */}
            <section style={{ marginBottom: '100px' }}>
                <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '50px' }}>Specialized Expertise</h3>
                <div className="card-grid">
                    {roles.map((role, i) => (
                        <div key={i} className="highlight-card card" style={{ textAlign: 'center' }}>
                            <i className={`fas fa-${role.icon}`} style={{ fontSize: '2rem', color: 'var(--accent-color-1)', marginBottom: '20px' }}></i>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{role.title}</h4>
                            <p style={{ fontSize: '0.9rem' }}>{role.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* BLOG INTEGRATION */}
            <section style={{ marginBottom: '100px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                    <div>
                        <h3 style={{ fontSize: '2rem', margin: 0 }}>Latest Writings</h3>
                        <p style={{ color: 'var(--subtle-text-color)' }}>Sharing insights on AI, Data Engineering, and Formula 1.</p>
                    </div>
                    <a href="https://medium.com/@rohanrajebhosale" target="_blank" style={{ color: 'var(--accent-color-1)', textDecoration: 'none', fontWeight: 'bold' }}>
                        Read all on Medium <i className="fas fa-external-link-alt"></i>
                    </a>
                </div>

                <div className="card-grid">
                    <a href="https://medium.com/@rohanrajebhosale/building-rohbot-a-deep-dive-into-my-ai-twin-5770320185a7" target="_blank" className="card highlight-card">
                        <span style={{ fontSize: '0.7rem', color: 'var(--accent-color-1)' }}>AI & RAG</span>
                        <h4 style={{ margin: '10px 0' }}>Building ROHbot: A Deep Dive into My AI Twin</h4>
                        <p style={{ fontSize: '0.85rem' }}>Architecting a full-stack RAG system with Gemini and Supabase.</p>
                    </a>
                    <a href="https://medium.com/@rohanrajebhosale/from-zero-to-f1-data-building-a-web-app-with-python-and-streamlit-fdba80c1a94e" target="_blank" className="card highlight-card">
                        <span style={{ fontSize: '0.7rem', color: 'var(--accent-color-1)' }}>DATA ENGINEERING</span>
                        <h4 style={{ margin: '10px 0' }}>From Zero to F1 Data</h4>
                        <p style={{ fontSize: '0.85rem' }}>Automating Formula 1 data pipelines using Python and Streamlit.</p>
                    </a>
                </div>
            </section>

            {/* CONTACT / CONNECT SECTION */}
            <section style={{ textAlign: 'center', padding: '60px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '20px' }} className="gradient-text">Let's Build Something</h3>
                <p style={{ color: 'var(--subtle-text-color)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                    Whether you are looking for an ML Engineer to build GenAI systems or a Data Engineer to scale your infrastructure, I'm ready to contribute.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', fontSize: '1.5rem' }}>
                    <a href="mailto:therohanrajebhosale@gmail.com" style={{ color: 'var(--subtle-text-color)' }} title="Email"><i className="fas fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/rohanrajebhosale/" target="_blank" style={{ color: 'var(--subtle-text-color)' }} title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/RohanrajeBhosale" target="_blank" style={{ color: 'var(--subtle-text-color)' }} title="GitHub"><i className="fab fa-github"></i></a>
                    <a href="https://medium.com/@rohanrajebhosale" target="_blank" style={{ color: 'var(--subtle-text-color)' }} title="Medium"><i className="fab fa-medium"></i></a>
                </div>
            </section>
        </div>
    );
}