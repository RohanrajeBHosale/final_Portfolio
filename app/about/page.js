// app/about/page.js
export default function AboutPage() {
    const focusAreas = [
        "Data-Centric Machine Learning",
        "Visual AI (Images, Sketches, Multimodal)",
        "Dataset Curation & Annotation Quality",
        "Model Evaluation & Failure Analysis",
        "Scalable Python-Based ML Systems",
        "Open-Source & Enterprise ML Tooling"
    ];

    const skillGroups = [
        { title: "Programming & ML", skills: "Python, PyTorch, NumPy, SciPy, scikit-learn, Pandas" },
        { title: "Visual & Multimodal AI", skills: "CNN, cGAN, Regression, Classification, Decision Augmentation" },
        { title: "Data Systems", skills: "PostgreSQL, SQL, MongoDB, Vector Databases (Supabase/pgvector), Spark" },
        { title: "ML Systems & Infra", skills: "FastAPI, Streamlit, Docker, GCP, AWS, CI/CD" },
        { title: "Collaboration", skills: "GitHub, Git, Remote-first workflows, Agile (PMI-ACP)" }
    ];

    return (
        <div className="container">
            <h2 className="gradient-text" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '20px' }}>About Me</h2>

            <div className="card" style={{ marginBottom: '50px', lineHeight: '1.8' }}>
                <p style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '20px' }}>
                    I am a Machine Learning Engineer with hands-on experience building <strong>data-centric, production-grade ML systems</strong> for unstructured data, with a strong focus on <strong>Visual AI</strong>.
                </p>
                <p style={{ color: 'var(--subtle-text-color)' }}>
                    I specialize in designing end-to-end ML pipelines spanning dataset curation, preprocessing, model training, and interactive inference. My work emphasizes model transparency, failure analysis, and dataset quality. I am passionate about open-source software and building tools that help teams understand and scale machine learning systems.
                </p>
            </div>

            <h3 style={{ marginBottom: '25px' }}>Core Focus Areas</h3>
            <div className="card-grid" style={{ marginBottom: '50px' }}>
                {focusAreas.map((area, i) => (
                    <div key={i} className="card" style={{ padding: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
                        {area}
                    </div>
                ))}
            </div>

            <h3 style={{ marginBottom: '25px' }}>Technical Skills</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {skillGroups.map((group, i) => (
                    <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '20px' }}>
                        <span style={{ color: 'var(--accent-color-1)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>{group.title}</span>
                        <span style={{ color: '#fff' }}>{group.skills}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}