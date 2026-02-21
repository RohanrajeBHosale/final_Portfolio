module.exports = [
"[project]/app/projects/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
/**
 * CURATE THIS LIST. This is your portfolio. Not GitHub search.
 * Keep 6–9 projects max. If it’s not inspectable, remove it.
 */ const CURATED = [
    {
        id: "rohbot",
        featured: true,
        category: "GenAI",
        title: "ROHbot — Portfolio RAG Assistant",
        oneLiner: "LLM assistant that answers questions about my work using grounded retrieval with sources, eval hooks, and deployable structure.",
        repo: "RohanrajeBHosale/ROHbot",
        demo: "https://rohbot.vercel.app",
        github: "https://github.com/RohanrajeBHosale/ROHbot",
        writeup: "https://medium.com/@rohanrajebhosale/building-rohbot-a-deep-dive-into-my-ai-twin-5770320185a7",
        stack: [
            "Gemini/OpenAI",
            "Supabase Vector",
            "Node.js",
            "Vercel"
        ],
        signal: "Grounding + citations • Deployable • System design",
        metric: "Deployed system: ingest → index → retrieve → respond (add Hit@K / latency next)"
    },
    {
        id: "sketch-studio",
        featured: true,
        category: "ML",
        title: "Sketch Studio — Sketch → Photorealistic Portraits",
        oneLiner: "Stable Diffusion + ControlNet pipeline to preserve sketch structure while generating photorealistic portraits.",
        repo: null,
        demo: null,
        github: "https://github.com/RohanrajeBHosale",
        writeup: null,
        stack: [
            "Stable Diffusion",
            "ControlNet",
            "BLIP",
            "PyTorch"
        ],
        signal: "Conditioned generation • Prompt adherence • Evaluation-ready",
        metric: "Add SSIM/CLIP or qualitative eval grid (don’t leave blank long-term)"
    },
    {
        id: "anomaly",
        featured: true,
        category: "Security",
        title: "Network Anomaly Detection",
        oneLiner: "Traffic anomaly detection comparing classical + deep approaches with practical evaluation and pipeline structure.",
        repo: null,
        demo: null,
        github: "https://github.com/RohanrajeBHosale",
        writeup: null,
        stack: [
            "Python",
            "Scikit-learn",
            "Autoencoder",
            "Scapy"
        ],
        signal: "Model comparison • Security context • Pipeline thinking",
        metric: "Add AUC/F1 + dataset size + false positive rate"
    },
    // Non-featured (keep these STRONG, few, and inspectable)
    {
        id: "fake-news",
        featured: false,
        category: "ML",
        title: "Fake News Detection Engine (NLP)",
        oneLiner: "Fine-tuned transformer model with a simple inference layer and evaluation workflow.",
        repo: null,
        demo: null,
        github: "https://github.com/RohanrajeBHosale",
        writeup: null,
        stack: [
            "RoBERTa",
            "Hugging Face",
            "Python"
        ],
        signal: "Fine-tuning • Eval • Serving",
        metric: "Add F1 + dataset size + baseline comparison"
    },
    {
        id: "etl",
        featured: false,
        category: "Data",
        title: "Data Pipeline — ETL to Analytics Outputs",
        oneLiner: "ETL pipeline design focusing on clean transforms, reliability, and query-ready outputs.",
        repo: null,
        demo: null,
        github: "https://github.com/RohanrajeBHosale",
        writeup: null,
        stack: [
            "Python",
            "SQL",
            "Spark/BigQuery"
        ],
        signal: "ETL • Scalable • Production mindset",
        metric: "Add runtime + schedule + data volume"
    }
];
const FILTERS = [
    "All",
    "Featured",
    "GenAI",
    "ML",
    "Data",
    "Security"
];
function Pill({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontSize: "0.8rem",
            padding: "6px 10px",
            borderRadius: "999px",
            border: "1px solid var(--border-color)",
            background: "rgba(255,255,255,0.03)",
            color: "var(--subtle-text-color)",
            whiteSpace: "nowrap"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/projects/page.js",
        lineNumber: 95,
        columnNumber: 9
    }, this);
}
function Chip({ active, children, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "card",
        style: {
            padding: "10px 14px",
            border: active ? "1px solid var(--accent-color-1)" : "1px solid var(--border-color)",
            color: active ? "#fff" : "var(--subtle-text-color)",
            background: active ? "var(--accent-color-1)" : "rgba(255,255,255,0.03)",
            cursor: "pointer"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/projects/page.js",
        lineNumber: 113,
        columnNumber: 9
    }, this);
}
function Action({ href, label }) {
    if (!href) return null;
    const external = href.startsWith("http");
    const style = {
        padding: "9px 12px",
        fontSize: "0.9rem"
    };
    if (external) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            target: "_blank",
            rel: "noreferrer",
            className: "card",
            style: style,
            children: label
        }, void 0, false, {
            fileName: "[project]/app/projects/page.js",
            lineNumber: 136,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "card",
        style: style,
        children: label
    }, void 0, false, {
        fileName: "[project]/app/projects/page.js",
        lineNumber: 142,
        columnNumber: 9
    }, this);
}
function formatDate(iso) {
    if (!iso) return null;
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return null;
    return d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}
function ProjectsPage() {
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [meta, setMeta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({}); // repo -> {stars, language, updated_at}
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("loading"); // loading | ok | limited
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Fetch GitHub metadata for curated repos only (lightweight, controlled)
        const reposToFetch = CURATED.map((p)=>p.repo).filter(Boolean);
        if (reposToFetch.length === 0) {
            setStatus("ok");
            return;
        }
        let cancelled = false;
        async function run() {
            try {
                const results = await Promise.all(reposToFetch.map(async (full)=>{
                    const res = await fetch(`https://api.github.com/repos/${full}`);
                    if (!res.ok) throw new Error("rate-limited");
                    const data = await res.json();
                    return [
                        full,
                        {
                            stars: data.stargazers_count,
                            language: data.language,
                            updated_at: data.updated_at
                        }
                    ];
                }));
                if (cancelled) return;
                const m = {};
                results.forEach(([k, v])=>m[k] = v);
                setMeta(m);
                setStatus("ok");
            } catch (e) {
                if (cancelled) return;
                // If GitHub rate limits, don’t break the page. Just hide meta.
                setStatus("limited");
            }
        }
        run();
        return ()=>{
            cancelled = true;
        };
    }, []);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (filter === "All") return CURATED;
        if (filter === "Featured") return CURATED.filter((p)=>p.featured);
        return CURATED.filter((p)=>p.category === filter);
    }, [
        filter
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "100px 20px",
            minHeight: "100vh"
        },
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    marginBottom: "34px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "gradient-text",
                        style: {
                            fontSize: "3.2rem",
                            fontWeight: 900,
                            marginBottom: "12px"
                        },
                        children: "Projects"
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 225,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "var(--subtle-text-color)",
                            maxWidth: "900px",
                            lineHeight: 1.7
                        },
                        children: "Curated systems only. If it doesn’t demonstrate system design, evaluation, or deployment, it doesn’t belong here."
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 228,
                        columnNumber: 17
                    }, this),
                    status === "limited" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginTop: "12px",
                            color: "var(--subtle-text-color)",
                            fontSize: "0.95rem"
                        },
                        children: "GitHub metadata hidden (rate limited). Content is still fully available."
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 233,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/page.js",
                lineNumber: 224,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginBottom: "34px"
                },
                children: FILTERS.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                        active: filter === f,
                        onClick: ()=>setFilter(f),
                        children: f
                    }, f, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 242,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/projects/page.js",
                lineNumber: 240,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card-grid",
                style: {
                    marginBottom: "70px"
                },
                children: filtered.map((p)=>{
                    const m = p.repo ? meta[p.repo] : null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card highlight-card",
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: "10px",
                                    flexWrap: "wrap"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "0.75rem",
                                            letterSpacing: "0.08em",
                                            color: "var(--accent-color-1)"
                                        },
                                        children: p.category.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this),
                                    p.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                        children: "Featured"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 263,
                                        columnNumber: 48
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/page.js",
                                lineNumber: 259,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    margin: 0
                                },
                                children: p.title
                            }, void 0, false, {
                                fileName: "[project]/app/projects/page.js",
                                lineNumber: 266,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    color: "var(--subtle-text-color)",
                                    lineHeight: 1.6
                                },
                                children: p.oneLiner
                            }, void 0, false, {
                                fileName: "[project]/app/projects/page.js",
                                lineNumber: 267,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "8px",
                                    flexWrap: "wrap",
                                    marginTop: "6px"
                                },
                                children: p.stack.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 271,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/projects/page.js",
                                lineNumber: 269,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "6px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: "0 0 6px 0",
                                            fontWeight: 800
                                        },
                                        children: "Signal"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 276,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: 0,
                                            color: "var(--subtle-text-color)"
                                        },
                                        children: p.signal
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 277,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/page.js",
                                lineNumber: 275,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "6px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: "0 0 6px 0",
                                            fontWeight: 800
                                        },
                                        children: "Metric"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 281,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: 0,
                                            color: "var(--subtle-text-color)"
                                        },
                                        children: p.metric
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 282,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/page.js",
                                lineNumber: 280,
                                columnNumber: 29
                            }, this),
                            m && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "10px",
                                    flexWrap: "wrap",
                                    marginTop: "8px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                        children: [
                                            "★ ",
                                            m.stars
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 287,
                                        columnNumber: 37
                                    }, this),
                                    m.language && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                        children: m.language
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 288,
                                        columnNumber: 52
                                    }, this),
                                    m.updated_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                        children: [
                                            "Updated ",
                                            formatDate(m.updated_at)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 289,
                                        columnNumber: 54
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/page.js",
                                lineNumber: 286,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "10px",
                                    flexWrap: "wrap",
                                    marginTop: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Action, {
                                        href: p.demo,
                                        label: "Live Demo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 294,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Action, {
                                        href: p.github,
                                        label: "GitHub"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 295,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Action, {
                                        href: p.writeup,
                                        label: "Writeup"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 296,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Action, {
                                        href: p.internal,
                                        label: "Architecture"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 297,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/page.js",
                                lineNumber: 293,
                                columnNumber: 29
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 254,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/projects/page.js",
                lineNumber: 249,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    textAlign: "center",
                    padding: "60px 40px",
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: "20px",
                    border: "1px solid var(--border-color)"
                },
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "gradient-text",
                        style: {
                            fontSize: "2.2rem",
                            marginBottom: "14px"
                        },
                        children: "Want the fastest proof?"
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 315,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "var(--subtle-text-color)",
                            maxWidth: "650px",
                            margin: "0 auto 26px"
                        },
                        children: "Start with ROHbot. It shows retrieval, grounding, and a deployable system structure — not just notebooks."
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 318,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "12px",
                            justifyContent: "center",
                            flexWrap: "wrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "card",
                                style: {
                                    padding: "10px 14px"
                                },
                                href: "https://rohbot.vercel.app",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Live Demo"
                            }, void 0, false, {
                                fileName: "[project]/app/projects/page.js",
                                lineNumber: 322,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "card",
                                style: {
                                    padding: "10px 14px"
                                },
                                href: "https://github.com/RohanrajeBHosale/ROHbot",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "GitHub"
                            }, void 0, false, {
                                fileName: "[project]/app/projects/page.js",
                                lineNumber: 325,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 321,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/page.js",
                lineNumber: 305,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/projects/page.js",
        lineNumber: 214,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=app_projects_page_c412818f.js.map