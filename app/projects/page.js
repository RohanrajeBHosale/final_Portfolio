"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

/**
 * CURATE THIS LIST. This is your portfolio. Not GitHub search.
 * Keep 6–9 projects max. If it’s not inspectable, remove it.
 */
const CURATED = [
  {
    id: "rohbot",
    featured: true,
    category: "GenAI",
    title: "ROHbot — Portfolio RAG Assistant",
    oneLiner:
      "LLM assistant that answers questions about my work using grounded retrieval with sources, eval hooks, and deployable structure.",
    repo: "RohanrajeBHosale/ROHbot",
    demo: "https://rohbot.vercel.app",
    github: "https://github.com/RohanrajeBHosale/ROHbot",
    writeup:
      "https://medium.com/@rohanrajebhosale/building-rohbot-a-deep-dive-into-my-ai-twin-5770320185a7",
    stack: ["Gemini/OpenAI", "Supabase Vector", "Node.js", "Vercel"],
    signal: "Grounding + citations • Deployable • System design",
    metric: "Deployed system: ingest → index → retrieve → respond",
  },
  {
    id: "car-price",
    featured: true,
    category: "ML",
    title: "AI Used Car Price Estimator",
    oneLiner:
      "Production-grade XGBoost regressor deployed via Streamlit to predict vehicle market values with 82% accuracy.",
    repo: "RohanrajeBHosale/car-price-predictor", // Ensure this matches your GitHub repo name exactly
    demo: "https://carpricepredictor-ntyf6xmpzqwmloqy4jdg87.streamlit.app/", // Your new Live URL
    github: "https://github.com/RohanrajeBHosale/car-price-predictor",
    writeup: null,
    stack: ["XGBoost", "Streamlit", "Python", "Scikit-Learn"],
    signal: "End-to-End ML • Deployment • Business Value",
    metric: "R² Score: 0.82 • Trained on 300k+ real listings",
  },
  {
    id: "sketch-studio",
    featured: true,
    category: "ML",
    title: "Sketch Studio — Sketch → Photorealistic Portraits",
    oneLiner:
      "Stable Diffusion + ControlNet pipeline to preserve sketch structure while generating photorealistic portraits.",
    repo: null, 
    demo: null,
    github: "https://github.com/RohanrajeBHosale", 
    writeup: null,
    stack: ["Stable Diffusion", "ControlNet", "BLIP", "PyTorch"],
    signal: "Conditioned generation • Prompt adherence • Evaluation-ready",
    metric: "Add SSIM/CLIP or qualitative eval grid",
  },
  {
    id: "data-quality",
    featured: false,
    category: "Data",
    title: "Automated Data Quality Control Panel",
    oneLiner:
      "ETL validation pipeline detecting schema violations and statistical outliers in financial data.",
    repo: "RohanrajeBHosale/data-quality-monitoring-system", // Update if you pushed this repo
    demo: null,
    github: "https://github.com/RohanrajeBHosale/data-quality-monitoring-system",
    writeup: null,
    stack: ["Python", "SQL", "Streamlit", "Pandas"],
    signal: "Data Integrity • Automated Testing • Visualization",
    metric: "Reduced manual review by ~40% (simulated)",
  },

  // Non-featured (keep these STRONG, few, and inspectable)
  {
    id: "fake-news",
    featured: false,
    category: "ML",
    title: "Fake News Detection Engine (NLP)",
    oneLiner:
      "Fine-tuned transformer model with a simple inference layer and evaluation workflow.",
    repo: null,
    demo: null,
    github: "https://github.com/RohanrajeBHosale",
    writeup: null,
    stack: ["RoBERTa", "Hugging Face", "Python"],
    signal: "Fine-tuning • Eval • Serving",
    metric: "Add F1 + dataset size + baseline comparison",
  },
  {
    id: "etl",
    featured: false,
    category: "Data",
    title: "Data Pipeline — ETL to Analytics Outputs",
    oneLiner:
      "ETL pipeline design focusing on clean transforms, reliability, and query-ready outputs.",
    repo: null,
    demo: null,
    github: "https://github.com/RohanrajeBHosale",
    writeup: null,
    stack: ["Python", "SQL", "Spark/BigQuery"],
    signal: "ETL • Scalable • Production mindset",
    metric: "Add runtime + schedule + data volume",
  },
];

const FILTERS = ["All", "Featured", "GenAI", "ML", "Data", "Security"];

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
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

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

function Action({ href, label }) {
  if (!href) return null;
  const external = href.startsWith("http");
  const style = { padding: "9px 12px", fontSize: "0.9rem" };

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="card" style={style}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className="card" style={style}>
      {label}
    </Link>
  );
}

function formatDate(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [meta, setMeta] = useState({}); // repo -> {stars, language, updated_at}
  const [status, setStatus] = useState("loading"); // loading | ok | limited

  useEffect(() => {
    // Fetch GitHub metadata for curated repos only (lightweight, controlled)
    const reposToFetch = CURATED.map((p) => p.repo).filter(Boolean);

    if (reposToFetch.length === 0) {
      setStatus("ok");
      return;
    }

    let cancelled = false;

    async function run() {
      try {
        const results = await Promise.all(
          reposToFetch.map(async (full) => {
            const res = await fetch(`https://api.github.com/repos/${full}`);
            if (!res.ok) throw new Error("rate-limited");
            const data = await res.json();
            return [
              full,
              {
                stars: data.stargazers_count,
                language: data.language,
                updated_at: data.updated_at,
              },
            ];
          })
        );

        if (cancelled) return;
        const m = {};
        results.forEach(([k, v]) => (m[k] = v));
        setMeta(m);
        setStatus("ok");
      } catch (e) {
        if (cancelled) return;
        // If GitHub rate limits, don’t break the page. Just hide meta.
        setStatus("limited");
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    if (filter === "All") return CURATED;
    if (filter === "Featured") return CURATED.filter((p) => p.featured);
    return CURATED.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "100px 20px",
        minHeight: "100vh",
      }}
      className="container"
    >
      {/* HERO */}
      <section style={{ marginBottom: "34px" }}>
        <h1 className="gradient-text" style={{ fontSize: "3.2rem", fontWeight: 900, marginBottom: "12px" }}>
          Projects
        </h1>
        <p style={{ color: "var(--subtle-text-color)", maxWidth: "900px", lineHeight: 1.7 }}>
          Curated systems only. If it doesn’t demonstrate system design, evaluation, or deployment, it doesn’t belong here.
        </p>

        {status === "limited" && (
          <p style={{ marginTop: "12px", color: "var(--subtle-text-color)", fontSize: "0.95rem" }}>
            GitHub metadata hidden (rate limited). Content is still fully available.
          </p>
        )}
      </section>

      {/* FILTERS */}
      <section style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "34px" }}>
        {FILTERS.map((f) => (
          <Chip key={f} active={filter === f} onClick={() => setFilter(f)}>
            {f}
          </Chip>
        ))}
      </section>

      {/* GRID */}
      <section className="card-grid" style={{ marginBottom: "70px" }}>
        {filtered.map((p) => {
          const m = p.repo ? meta[p.repo] : null;

          return (
            <div
              key={p.id}
              className="card highlight-card"
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
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
                <p style={{ margin: "0 0 6px 0", fontWeight: 800 }}>Signal</p>
                <p style={{ margin: 0, color: "var(--subtle-text-color)" }}>{p.signal}</p>
              </div>

              <div style={{ marginTop: "6px" }}>
                <p style={{ margin: "0 0 6px 0", fontWeight: 800 }}>Metric</p>
                <p style={{ margin: 0, color: "var(--subtle-text-color)" }}>{p.metric}</p>
              </div>

              {m && (
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "8px" }}>
                  <Pill>★ {m.stars}</Pill>
                  {m.language && <Pill>{m.language}</Pill>}
                  {m.updated_at && <Pill>Updated {formatDate(m.updated_at)}</Pill>}
                </div>
              )}

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
                <Action href={p.demo} label="Live Demo" />
                <Action href={p.github} label="GitHub" />
                <Action href={p.writeup} label="Writeup" />
                <Action href={p.internal} label="Architecture" />
              </div>
            </div>
          );
        })}
      </section>

      {/* BOTTOM CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 40px",
          background: "rgba(255,255,255,0.02)",
          borderRadius: "20px",
          border: "1px solid var(--border-color)",
        }}
        className="card"
      >
        <h2 className="gradient-text" style={{ fontSize: "2.2rem", marginBottom: "14px" }}>
          Want the fastest proof?
        </h2>
        <p style={{ color: "var(--subtle-text-color)", maxWidth: "650px", margin: "0 auto 26px" }}>
          Start with ROHbot. It shows retrieval, grounding, and a deployable system structure — not just notebooks.
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
