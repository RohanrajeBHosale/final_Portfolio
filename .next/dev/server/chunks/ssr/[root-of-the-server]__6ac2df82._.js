module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/experience/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExperiencePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ExperiencePage() {
    const experiences = [
        {
            company: "GenAI Explorers Club, UMass Dartmouth",
            role: "Secretary",
            period: "June 2024 – Present",
            points: [
                "Led hands-on workshops covering LLM architectures, tokenization, embeddings, and transformer workflows for 100+ students.",
                "Designed and delivered technical training modules on prompt engineering, RAG systems, and agent frameworks like LangChain and CrewAI.",
                "Mentored members in building LLM-powered applications, including chatbots and agentic automation tools."
            ]
        },
        {
            company: "BotLot",
            role: "ML/AI Engineer – LLM Systems",
            period: "May 2025 – Aug 2025",
            points: [
                "Worked on production ML systems with an emphasis on reliability, robustness, and user-facing performance.",
                "Designed and deployed ML inference services using FastAPI for low-latency, scalable model serving.",
                "Conducted systematic failure-mode and robustness testing, improving model reliability by 35–50%.",
                "Built feedback-driven pipelines incorporating user interaction data to continuously improve model behavior."
            ]
        },
        {
            company: "Project550",
            role: "Machine Learning Engineer (Multimodal Visual AI)",
            period: "Jan 2025 – Present",
            points: [
                "Designed and trained a data-centric multimodal generative vision system converting sketches into photorealistic images.",
                "Built end-to-end ML pipelines covering dataset curation, preprocessing, training, and interactive inference.",
                "Performed visual failure-mode analysis to identify geometry drift and annotation ambiguity.",
                "Optimized inference for low-latency interactive workflows, exposing models through user-facing interfaces."
            ]
        },
        {
            company: "Sahyadri Polytechnic Sawarde",
            role: "Assistant Professor",
            period: "June 2023 – Jan 2024",
            points: [
                "Designed and deployed automated data management systems using Python and SQL, reducing analytical turnaround time by 60%.",
                "Mentored 12+ student technical teams through hackathons and research expos.",
                "Built Python/SQL automation for grading and plagiarism detection, cutting manual academic workload by 60%."
            ]
        },
        {
            company: "Trismus Healthcare Services",
            role: "ML Engineer (Medical Imaging)",
            period: "Jan 2022 – June 2023",
            points: [
                "Built data preprocessing and feature-engineering pipelines for large-scale medical imaging datasets.",
                "Developed and evaluated CNN-based diagnostic models, performing detailed error analysis.",
                "Created data audit and validation tools to ensure dataset integrity and reproducibility."
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "gradient-text",
                style: {
                    fontSize: '3rem',
                    fontWeight: 900,
                    marginBottom: '10px'
                },
                children: "Experience"
            }, void 0, false, {
                fileName: "[project]/app/experience/page.js",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: 'var(--subtle-text-color)',
                    marginBottom: '40px'
                },
                children: "Specializing in production-grade ML systems and Generative AI."
            }, void 0, false, {
                fileName: "[project]/app/experience/page.js",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px'
                },
                children: experiences.map((exp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        style: {
                            textAlign: 'left'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                    gap: '10px',
                                    marginBottom: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            margin: 0,
                                            color: '#fff'
                                        },
                                        children: exp.company
                                    }, void 0, false, {
                                        fileName: "[project]/app/experience/page.js",
                                        lineNumber: 70,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--accent-color-1)',
                                            fontWeight: 'bold',
                                            fontSize: '0.9rem'
                                        },
                                        children: exp.period
                                    }, void 0, false, {
                                        fileName: "[project]/app/experience/page.js",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/experience/page.js",
                                lineNumber: 69,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontWeight: 700,
                                    color: 'var(--accent-color-2)',
                                    marginBottom: '15px',
                                    fontSize: '1.1rem'
                                },
                                children: exp.role
                            }, void 0, false, {
                                fileName: "[project]/app/experience/page.js",
                                lineNumber: 75,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                style: {
                                    color: 'var(--subtle-text-color)',
                                    paddingLeft: '20px',
                                    lineHeight: '1.7'
                                },
                                children: exp.points.map((p, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        style: {
                                            marginBottom: '8px'
                                        },
                                        children: p
                                    }, j, false, {
                                        fileName: "[project]/app/experience/page.js",
                                        lineNumber: 80,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/experience/page.js",
                                lineNumber: 78,
                                columnNumber: 25
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/experience/page.js",
                        lineNumber: 68,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/experience/page.js",
                lineNumber: 66,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/experience/page.js",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/experience/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/experience/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6ac2df82._.js.map