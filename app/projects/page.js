"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

const PROJECTS = [
    {
        id: "rohbot",
        featured: true,
        category: "GenAI",
        title: "ROHbot — Production-Style Portfolio RAG Assistant",
        oneLiner:
            "RAG assistant that answers questions about my work with grounded retrieval, citations, and deployable API structure.",
        proof: ["Live Demo", "GitHub", "Architecture"],
        links: {
            demo: "https://rohbot.vercel.app",
            github: "https://github.com/RohanrajeBHosale/ROHbot",
            internal: "/projects/rohbot",
        },
        stack: ["Gemini/OpenAI", "Supabase Vector", "Node.js", "Vercel"],
        signals: ["Grounding + citations", "Deployable", "Structured pipeline"],
        metric: "Deployed + end-to-end system (ingest → index → retrieve → respond)",
    },
    {
        id: "sketch-studio",
        featured: true,
        category: "ML",
        title: "Sketch Studio — Sketch → Photorealistic Portraits",
        oneLiner:
            "Stable Diffusion + ControlNet pipeline to preserve structure while generating photorealistic portraits from sketches.",
        proof: ["Writeup", "GitHub"],
        links: {
            github: "https://github.com/RohanrajeBHosale",
            writeup: "/projects",
        },
        stack: ["Stable Diffusion", "ControlNet", "BLIP", "PyTorch"],
        signals: ["Image conditioning", "Prompt adherence", "Evaluation-ready"],
        metric: "Reported SSIM/CLIP-style evaluation (add your real numbers here)",
    },
    {
        id: "anomaly",
        featured: true,
        category: "Security",
        title: "Network Anomaly Detection — ML + Security",
        oneLiner:
            "Traffic anomaly detection with classical and deep methods; focuses on signal quality and deployable evaluation.",
        proof: ["GitHub", "Writeup"],
        links: {
            github: "https://github.com/RohanrajeBHosale",
            writeup: "/projects",
        },
        stack: ["Python", "Scikit-learn", "Autoencoder", "Scapy"],
        signals: ["Security context", "Model comparison", "Practical pipeline"],
        metric: "Compared multiple models + baseline (add your AUC/F1 here)",
    },

    // Non-featured (keep these strong, not many)
    {
        id: "market-intel",
        featured: false,
        category: "GenAI",
        title: "GenAI Market Intelligence System (Agents + RAG)",
        oneLiner:
            "Multi-agent pipeline to summarize and query large document streams with retrieval + orchestration.",
        proof: ["GitHub"],
        links: { github: "https://github.com/RohanrajeBHosale" },
        stack: ["LangGraph/LangChain", "Python", "Vector DB", "Cloud"],
        signals: ["Agent orchestration", "RAG", "Pipeline design"],
        metric: "Processes documents daily (add real volume + latency)",
    },
    {
        id: "fake-news",
        featured: false,
        category: "ML",
        title: "Fake News Detection Engine (NLP)",
        oneLiner:
            "Fine-tuned transformer model with a simple serving layer for inference and evaluation.",
        proof: ["GitHub"],
        links: { github: "https://github.com/RohanrajeBHosale" },
        stack: ["RoBERTa", "Hugging Face", "Python", "API/Streamlit"],
        signals: ["Fine-tuning", "Eval", "Serving"],
        metric: "Add test accuracy/F1 + dataset size (don’t leave blank)",
    },
    {
        id: "etl",
        featured: false,
        category: "Data",
        title: "End-to-End Data Pipeline (ETL + Analytics)",
        oneLiner:
            "ETL pipeline design with storage, transforms, and query-ready outputs; focuses on reliability and structure.",
        proof: ["GitHub"],
        links: { github: "https://github.com/RohanrajeBHosale" },
        stack: ["Python", "SQL", "Spark/BigQuery", "Cloud"],
        signals: ["ETL", "Analytics-ready", "Scalable"],
        metric: "Add data size + runtime + schedule (daily/hourly)",
    },
];

const FILTERS = ["All", "GenAI", "ML", "Data", "Security"];

function Chip({ active, children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="card"
            style={{
                padding: "10px 14px",
                border: active ? "1px solid var(--accent-color-1)" : "1px solid var(--border-color)",
                color: active ? "#fff" : "var(--subtle-text-color)",
                background: active ? "var(--accent-color-1)" : "rgba(255,255,255,0.03)",
                cursor: "pointer",
            }}
        >
            {children}
        </button>
    );
}

function Pill({ children }) {
    return (
        <span
            style={{
                fontSize: "0.8rem",
                padding: "6px 10px",
                borderRadius: "999px",
                border: "1px solid var(--border-color)",
                background: "rgba(255,255,255,0.03)",
                color: "var(--subtle-text-color)",
            }}
        >
      {children}
    </span>
    );
}

function ActionLink({ href, label }) {
    if (!href) return null;
    const external = href.startsWith("http");
    return external ? (
        <a href={href} target="_blank" rel="noreferrer" className="card" style={{ padding: "9px 12px", fontSize: "0.9rem" }}>
            {label}
        </a>
    ) : (
        <Link href={href} className="card" style={{ padding: "9px 12px", fontSize: "0.9rem" }}>
            {label}
        </Link>
    );
}

function ProjectCard({ p }) {
    return (
        <div className="card highlight-card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "0.75rem", letterSpacing: "0.08em", color: "var(--accent-color-1)" }}>
          {p.category.toUpperCase()}
        </span>
                {p.featured && <Pill>Featured</Pill>}
            </div>

            <h3 style={{ margin: 0 }}>{p.title}</h3>
            <p style={{ margin: 0, color: "var(--subtle-text-color)", lineHeight: 1.6 }}>{p.oneLiner}</p>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "6px" }}>
                {p.stack.map((s) => (
                    <Pill key={s}>{s}</Pill>
                ))}
            </div>

            <div style={{ marginTop: "6px" }}>
                <p style={{ margin: "0 0 6px 0", fontWeight: 700 }}>Signal</p>
                <p style={{ margin: 0, color: "var(--subtle-text-color)" }}>{p.signals.join(" · ")}</p>
            </div>

            <div style={{ marginTop: "6px" }}>
                <p style={{ margin: "0 0 6px 0", fontWeight: 700 }}>Metric</p>
                <p style={{ margin: 0, color: "var(--subtle-text-color)" }}>{p.metric}</p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
                <ActionLink href={p.links?.demo} label="Live Demo" />
                <ActionLink href={p.links?.github} label="GitHub" />
                <ActionLink href={p.links?.writeup} label="Writeup" />
                <ActionLink href={p.links?.internal} label="Architecture" />
            </div>
        </div>
    );
}

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(".projects-hero", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" })
            .from(".filter-row", { opacity: 0, y: 10, duration: 0.4 }, "-=0.2")
            .from(".project-grid", { opacity: 0, y: 10, duration: 0.4 }, "-=0.2");
    }, []);

    const filtered = useMemo(() => {
        if (filter === "All") return PROJECTS;
        return PROJECTS.filter((p) => p.category === filter);
    }, [filter]);

    const featured = useMemo(() => PROJECTS.filter((p) => p.featured), []);

    return (
        <div className="container">
            {/* HERO */}
            <section className="projects-hero" style={{ marginBottom: "40px" }}>
                <h1 className="gradient-text" style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "12px" }}>
                    Projects
                </h1>
                <p style={{ color: "var(--subtle-text-color)", maxWidth: "900px", lineHeight: 1.7 }}>
                    This page is intentionally curated. If a project doesn’t prove something real (system design, evaluation,
                    deployment), it doesn’t belong here.
                </p>
            </section>

            {/* FILTERS */}
            <section className="filter-row" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "40px" }}>
                {FILTERS.map((f) => (
                    <Chip key={f} active={filter === f} onClick={() => setFilter(f)}>
                        {f}
                    </Chip>
                ))}
            </section>

            {/* FEATURED */}
            {filter === "All" && (
                <section className="section" style={{ marginBottom: "70px" }}>
                    <h2 style={{ fontSize: "1.8rem", marginBottom: "18px" }}>Featured</h2>
                    <div className="project-grid card-grid">
                        {featured.map((p) => (
                            <ProjectCard key={p.id} p={p} />
                        ))}
                    </div>
                </section>
            )}

            {/* ALL / FILTERED */}
            <section className="section" style={{ marginBottom: "80px" }}>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "18px" }}>
                    {filter === "All" ? "All projects" : `${filter} projects`}
                </h2>

                <div className="project-grid card-grid">
                    {filtered
                        .filter((p) => filter !== "All" || !p.featured) // avoid duplicate featured in All
                        .map((p) => (
                            <ProjectCard key={p.id} p={p} />
                        ))}
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section
                className="section"
                style={{
                    textAlign: "center",
                    padding: "60px 40px",
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: "20px",
                    border: "1px solid var(--border-color)",
                }}
            >
                <h2 className="gradient-text" style={{ fontSize: "2.2rem", marginBottom: "14px" }}>
                    Want the fastest proof?
                </h2>
                <p style={{ color: "var(--subtle-text-color)", maxWidth: "650px", margin: "0 auto 26px" }}>
                    Start with ROHbot. You’ll see how I structure retrieval, grounding, and deployment — not just notebooks.
                </p>
                <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                    <a className="card" style={{ padding: "10px 14px" }} href="https://rohbot.vercel.app" target="_blank" rel="noreferrer">
                        Live Demo
                    </a>
                    <a className="card" style={{ padding: "10px 14px" }} href="https://github.com/RohanrajeBHosale/ROHbot" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </div>
            </section>
        </div>
    );
}
