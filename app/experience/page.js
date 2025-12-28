export default function ExperiencePage() {
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

    return (
        <div className="container">
            <h2 className="gradient-text" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '10px' }}>
                Experience
            </h2>
            <p style={{ color: 'var(--subtle-text-color)', marginBottom: '40px' }}>
                Specializing in production-grade ML systems and Generative AI.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {experiences.map((exp, i) => (
                    <div key={i} className="card" style={{ textAlign: 'left' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                            <h3 style={{ margin: 0, color: '#fff' }}>{exp.company}</h3>
                            <span style={{ color: 'var(--accent-color-1)', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                {exp.period}
                            </span>
                        </div>
                        <p style={{ fontWeight: 700, color: 'var(--accent-color-2)', marginBottom: '15px', fontSize: '1.1rem' }}>
                            {exp.role}
                        </p>
                        <ul style={{ color: 'var(--subtle-text-color)', paddingLeft: '20px', lineHeight: '1.7' }}>
                            {exp.points.map((p, j) => (
                                <li key={j} style={{ marginBottom: '8px' }}>{p}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}