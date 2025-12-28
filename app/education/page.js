// app/education/page.js
export default function EducationPage() {
    const education = [
        {
            school: "University of Massachusetts Dartmouth",
            degree: "Master’s in Data Science",
            date: "December 2025",
            courses: "Machine Learning, Predictive Analytics, Database Designs, Adv. Mathematical Statistics, Advanced Python and R, Data Visualization"
        },
        {
            school: "Symbiosis International University",
            degree: "B.Tech in Computer Science and Engineering",
            date: "June 2022",
            courses: "Data Structures, Algorithms, Operating Systems, Computer Networks"
        }
    ];

    const certs = [
        "Modern Computer Vision (PyTorch, Tensorflow2, Keras & OpenCV4)",
        "PMI-ACP Certification: Adopting an Agile Approach"
    ];

    return (
        <div className="container">
            <h2 className="gradient-text" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '40px' }}>Education</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '60px' }}>
                {education.map((edu, i) => (
                    <div key={i} className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', flexWrap: 'wrap' }}>
                            <h3 style={{ margin: 0 }}>{edu.school}</h3>
                            <span style={{ color: 'var(--accent-color-1)', fontSize: '0.9rem', fontWeight: 'bold' }}>{edu.date}</span>
                        </div>
                        <p style={{ color: 'var(--accent-color-2)', fontWeight: 700, margin: '0 0 15px 0' }}>{edu.degree}</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--subtle-text-color)' }}>
                            <strong>Relevant Courses:</strong> {edu.courses}
                        </p>
                    </div>
                ))}
            </div>

            <div className="card-grid">
                <div>
                    <h3 style={{ marginBottom: '20px' }}>Certifications</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {certs.map((cert, i) => (
                            <div key={i} className="card" style={{ padding: '15px', fontSize: '0.9rem' }}>
                                ✓ {cert}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 style={{ marginBottom: '20px' }}>Extracurriculars</h3>
                    <div className="card" style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                        <ul style={{ paddingLeft: '15px', margin: 0, color: 'var(--subtle-text-color)' }}>
                            <li>Secretary, GenAI Club (UMass Dartmouth)</li>
                            <li>First Prize, Institute Level Project Competition</li>
                            <li>Won Youngest Director Award, Satara Film Festival</li>
                            <li>Successfully conducted 5+ Institute cultural & tech events</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}