(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/projects/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ProjectsPage() {
    _s();
    const [repos, setRepos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Manual projects for the top of the list
    const staticProjects = [
        {
            name: "Conversational AI (ROHbot)",
            description: "Full-stack Agentic RAG system with Gemini & Supabase integration for personalized AI interactions.",
            html_url: "https://github.com/RohanrajeBHosale/ROHbot",
            language: "JavaScript"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectsPage.useEffect": ()=>{
            const GITHUB_USERNAME = "RohanrajeBHosale";
            const fetchRepos = {
                "ProjectsPage.useEffect.fetchRepos": async ()=>{
                    try {
                        const response = await fetch(`https://api.github.com/search/repositories?q=user:${GITHUB_USERNAME}+topic:portfolio&sort=updated`);
                        const data = await response.json();
                        const githubItems = data.items || [];
                        const filteredStatic = staticProjects.filter({
                            "ProjectsPage.useEffect.fetchRepos.filteredStatic": (sp)=>!githubItems.some({
                                    "ProjectsPage.useEffect.fetchRepos.filteredStatic": (gh)=>gh.name.toLowerCase() === sp.name.toLowerCase()
                                }["ProjectsPage.useEffect.fetchRepos.filteredStatic"])
                        }["ProjectsPage.useEffect.fetchRepos.filteredStatic"]);
                        setRepos([
                            ...filteredStatic,
                            ...githubItems
                        ]);
                        setLoading(false);
                    } catch (error) {
                        setRepos(staticProjects);
                        setLoading(false);
                    }
                }
            }["ProjectsPage.useEffect.fetchRepos"];
            fetchRepos();
        }
    }["ProjectsPage.useEffect"], []);
    // --- Inline Styling (Premium Dark Mode) ---
    const s = {
        container: {
            maxWidth: '900px',
            margin: '0 auto',
            padding: '60px 20px',
            fontFamily: 'sans-serif'
        },
        header: {
            marginBottom: '60px'
        },
        h1: {
            fontSize: '4rem',
            fontWeight: '800',
            margin: '0 0 10px 0',
            letterSpacing: '-2px',
            color: '#fff'
        },
        subtitle: {
            color: '#666',
            fontSize: '1.2rem',
            lineHeight: '1.6',
            maxWidth: '600px'
        },
        grid: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        },
        card: {
            backgroundColor: '#0a0a0a',
            border: '1px solid #1a1a1a',
            borderRadius: '16px',
            padding: '35px',
            textDecoration: 'none',
            color: 'inherit',
            transition: '0.2s ease'
        },
        cardHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px'
        },
        title: {
            fontSize: '1.6rem',
            fontWeight: '700',
            color: '#eee',
            margin: 0
        },
        lang: {
            fontSize: '10px',
            fontWeight: '800',
            padding: '5px 10px',
            backgroundColor: '#111',
            border: '1px solid #222',
            borderRadius: '6px',
            color: '#555',
            textTransform: 'uppercase'
        },
        desc: {
            color: '#888',
            fontSize: '1rem',
            lineHeight: '1.6',
            margin: '0 0 30px 0'
        },
        footer: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#3b82f6',
            fontSize: '13px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: s.container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: s.header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: s.h1,
                        children: "Projects."
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: s.subtitle,
                        children: "An automated showcase of my AI agents, data engineering pipelines, and specialized research."
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/page.js",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: '#222',
                    fontWeight: '900',
                    letterSpacing: '2px'
                },
                children: "SYNCING_GITHUB_DATABASE..."
            }, void 0, false, {
                fileName: "[project]/app/projects/page.js",
                lineNumber: 75,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: s.grid,
                children: repos.map((repo, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: repo.html_url,
                        target: "_blank",
                        rel: "noreferrer",
                        style: s.card,
                        onMouseOver: (e)=>{
                            e.currentTarget.style.borderColor = '#333';
                            e.currentTarget.style.backgroundColor = '#0f0f0f';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        },
                        onMouseOut: (e)=>{
                            e.currentTarget.style.borderColor = '#1a1a1a';
                            e.currentTarget.style.backgroundColor = '#0a0a0a';
                            e.currentTarget.style.transform = 'translateY(0)';
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: s.cardHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: s.title,
                                        children: repo.name.replace(/_/g, ' ').replace(/-/g, ' ')
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 97,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: s.lang,
                                        children: repo.language || 'AI'
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 100,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/page.js",
                                lineNumber: 96,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: s.desc,
                                children: repo.description || "Building intelligent AI systems and robust data architectures."
                            }, void 0, false, {
                                fileName: "[project]/app/projects/page.js",
                                lineNumber: 103,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: s.footer,
                                children: [
                                    "View Repository",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "3",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "5",
                                                y1: "12",
                                                x2: "19",
                                                y2: "12"
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/page.js",
                                                lineNumber: 109,
                                                columnNumber: 176
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "12 5 19 12 12 19"
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/page.js",
                                                lineNumber: 109,
                                                columnNumber: 220
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 109,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/page.js",
                                lineNumber: 107,
                                columnNumber: 29
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 79,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/projects/page.js",
                lineNumber: 77,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/projects/page.js",
        lineNumber: 66,
        columnNumber: 9
    }, this);
}
_s(ProjectsPage, "0TnKNGru6/1oR0vVPnK8mq9kjmg=");
_c = ProjectsPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_projects_page_22c3f2ba.js.map