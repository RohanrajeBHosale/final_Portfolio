"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Home() {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(".hero", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" })
            .from(".cta", { opacity: 0, y: 10, stagger: 0.12, duration: 0.4 }, "-=0.3")
            .from(".section", { y: 25, opacity: 0, stagger: 0.18, duration: 0.5 }, "-=0.15");
    }, []);

    const pillars = [
        {
            title: "GenAI Systems",
            desc: "RAG pipelines, grounding + citations, agent orchestration, API-first design.",
        },
        {
            title: "ML & Data Pipelines",
            desc: "Ingestion → ETL → indexing/training, batch workflows, cloud deployments.",
        },
        {
            title: "Evaluation & Reliability",
            desc: "Offline eval, regression tests, latency awareness, fallbacks & failure modes.",
        },
    ];

    const work = [
        {
            tag: "GENAI • RAG",
            title: "ROHbot — Portfolio RAG Assistant",
            desc: "LLM assistant that answers questions about my work using retrieval + grounded responses with sources.",
            links: [
                { label: "Live Demo", href: "https://rohbot.vercel.app", external: true },
                { label: "GitHub", href: "https://github.com/RohanrajeBHosale/ROHbot", external: true },
                { label: "Architecture", href: "/projects/rohbot", external: false },
            ],
        },
        {
            tag: "CV • DIFFUSION",
            title: "Sketch Studio — Sketch → Photorealistic Portraits",
            desc: "Stable Diffusion + ControlNet + BLIP pipeline to preserve structure and improve prompt adherence.",
            links: [
                { label: "Project", href: "/projects", external: false },
                { label: "Writeup", href: "/projects", external: false },
            ],
        },
        {
            tag: "SECURITY • ML",
            title: "Network Anomaly Detection",
            desc: "Traffic anomaly detection with classical + deep approaches (Isolation Forest, One-Class SVM, Autoencoder).",
            links: [
                { label: "Project", href: "/projects", external: false },
                { label: "GitHub", href: "https://github.com/RohanrajeBHosale", external: true },
            ],
        },
    ];

    return (
        <div className="container">
            {/* ================= HERO ================= */}
            <section className="hero" style={{ textAlign: "center", marginBottom: "110px" }}>
                <h1
                    style={{ fontSize: "4.2rem", fontWeight: 900, marginBottom: "18px" }}
                    className="gradient-text"
                >
                    I build production-grade GenAI systems — not demos.
                </h1>

                <p
                    style={{
                        fontSize: "1.15rem",
                        color: "var(--subtle-text-color)",
                        maxWidth: "820px",
                        margin: "0 auto 42px",
                    }}
                >
                    RAG, agents, and ML pipelines with grounding, evaluation, and deployment in mind.
                </p>

                <div className="cta" style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                    <Link
                        href="/projects"
                        className="card"
                        style={{ padding: "12px 28px", background: "var(--accent-color-1)", color: "#fff", border: "none" }}
                    >
                        Projects
                    </Link>

                    <a
                        href="https://github.com/RohanrajeBHosale"
                        target="_blank"
                        rel="noreferrer"
                        className="card"
                        style={{ padding: "12px 28px" }}
                    >
                        GitHub
                    </a>

                    <a
                        href="mailto:therohanrajebhosale@gmail.com"
                        className="card"
                        style={{ padding: "12px 28px" }}
                    >
                        Contact
                    </a>
                </div>
            </section>

            {/* ================= WHAT I BUILD (3 PILLARS) ================= */}
            <section className="section" style={{ marginBottom: "110px" }}>
                <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "14px" }}>What I build</h2>
                <p style={{ textAlign: "center", color: "var(--subtle-text-color)", marginBottom: "46px" }}>
                    Three lanes. No role-shopping. Inspectable systems.
                </p>

                <div className="card-grid">
                    {pillars.map((p, i) => (
                        <div key={i} className="card highlight-card" style={{ textAlign: "left" }}>
                            <h3 style={{ marginBottom: "10px" }}>{p.title}</h3>
                            <p style={{ margin: 0, color: "var(--subtle-text-color)", lineHeight: 1.6 }}>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= SELECTED WORK ================= */}
            <section className="section" style={{ marginBottom: "110px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", flexWrap: "wrap" }}>
                    <div>
                        <h2 style={{ fontSize: "2rem", margin: 0 }}>Selected work</h2>
                        <p style={{ color: "var(--subtle-text-color)", marginTop: "10px" }}>
                            A few systems that show how I think, build, and ship.
                        </p>
                    </div>

                    <Link
                        href="/projects"
                        style={{ color: "var(--accent-color-1)", textDecoration: "none", fontWeight: "bold" }}
                    >
                        See all projects →
                    </Link>
                </div>

                <div className="card-grid" style={{ marginTop: "40px" }}>
                    {work.map((w, i) => (
                        <div key={i} className="card highlight-card" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontSize: "0.75rem", letterSpacing: "0.06em", color: "var(--accent-color-1)" }}>
                {w.tag}
              </span>

                            <h3 style={{ margin: 0 }}>{w.title}</h3>
                            <p style={{ margin: 0, color: "var(--subtle-text-color)", lineHeight: 1.6 }}>
                                {w.desc}
                            </p>

                            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
                                {w.links.map((l, idx) =>
                                    l.external ? (
                                        <a
                                            key={idx}
                                            href={l.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="card"
                                            style={{ padding: "10px 14px", fontSize: "0.9rem" }}
                                        >
                                            {l.label}
                                        </a>
                                    ) : (
                                        <Link
                                            key={idx}
                                            href={l.href}
                                            className="card"
                                            style={{ padding: "10px 14px", fontSize: "0.9rem" }}
                                        >
                                            {l.label}
                                        </Link>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= WRITING (OPTIONAL) ================= */}
            <section className="section" style={{ marginBottom: "110px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", flexWrap: "wrap" }}>
                    <div>
                        <h2 style={{ fontSize: "1.8rem", margin: 0 }}>
                            Technical writeups <span style={{ opacity: 0.55 }}>(optional)</span>
                        </h2>
                        <p style={{ color: "var(--subtle-text-color)", marginTop: "10px" }}>
                            Deep dives after you’ve seen the code.
                        </p>
                    </div>

                    <a
                        href="https://medium.com/@rohanrajebhosale"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "var(--accent-color-1)", textDecoration: "none", fontWeight: "bold" }}
                    >
                        Read on Medium →
                    </a>
                </div>

                <div className="card-grid" style={{ marginTop: "40px" }}>
                    <a
                        href="https://medium.com/@rohanrajebhosale/building-rohbot-a-deep-dive-into-my-ai-twin-5770320185a7"
                        target="_blank"
                        rel="noreferrer"
                        className="card highlight-card"
                    >
                        <span style={{ fontSize: "0.75rem", color: "var(--accent-color-1)" }}>AI • RAG</span>
                        <h3 style={{ margin: "10px 0" }}>Building ROHbot</h3>
                        <p style={{ margin: 0, color: "var(--subtle-text-color)" }}>
                            Retrieval, grounding, and how the system is structured.
                        </p>
                    </a>

                    <a
                        href="https://medium.com/@rohanrajebhosale/from-zero-to-f1-data-building-a-web-app-with-python-and-streamlit-fdba80c1a94e"
                        target="_blank"
                        rel="noreferrer"
                        className="card highlight-card"
                    >
                        <span style={{ fontSize: "0.75rem", color: "var(--accent-color-1)" }}>DATA</span>
                        <h3 style={{ margin: "10px 0" }}>From Zero to F1 Data</h3>
                        <p style={{ margin: 0, color: "var(--subtle-text-color)" }}>
                            Pipelines, automation, and usable analytics.
                        </p>
                    </a>
                </div>
            </section>

            {/* ================= CONTACT ================= */}
            <section
                className="section"
                style={{
                    textAlign: "center",
                    padding: "70px 40px",
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: "20px",
                    border: "1px solid var(--border-color)",
                }}
            >
                <h2 style={{ fontSize: "2.4rem", marginBottom: "18px" }} className="gradient-text">
                    Let’s build something real
                </h2>

                <p
                    style={{
                        color: "var(--subtle-text-color)",
                        maxWidth: "640px",
                        margin: "0 auto 34px",
                    }}
                >
                    I’m interested in roles where I can design and ship real ML and GenAI systems.
                </p>

                <div style={{ display: "flex", justifyContent: "center", gap: "22px", flexWrap: "wrap" }}>
                    <a href="mailto:therohanrajebhosale@gmail.com" className="card" style={{ padding: "10px 14px" }}>
                        Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rohanrajebhosale/"
                        target="_blank"
                        rel="noreferrer"
                        className="card"
                        style={{ padding: "10px 14px" }}
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/RohanrajeBHosale"
                        target="_blank"
                        rel="noreferrer"
                        className="card"
                        style={{ padding: "10px 14px" }}
                    >
                        GitHub
                    </a>
                </div>
            </section>
        </div>
    );
}
