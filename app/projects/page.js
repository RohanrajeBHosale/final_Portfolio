'use client';
import { useEffect, useState } from 'react';

export default function ProjectsPage() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/search/repositories?q=user:RohanrajeBHosale+topic:portfolio&sort=updated`)
            .then(res => res.json())
            .then(data => {
                setRepos(data.items || []);
                setLoading(false);
            }).catch(() => setLoading(false));
    }, []);

    const s = {
        container: { maxWidth: '800px', margin: '0 auto', padding: '100px 20px', backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' },
        card: { display: 'block', backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a', padding: '30px', borderRadius: '16px', textDecoration: 'none', color: 'inherit', marginBottom: '20px' },
        title: { fontSize: '1.5rem', fontWeight: '700', margin: '0 0 10px 0' },
        desc: { color: '#888', lineHeight: '1.6', fontSize: '0.95rem' }
    };

    return (
        <div style={s.container}>
            <h1 style={{fontSize: '4rem', fontWeight: '800', marginBottom: '40px'}}>Projects.</h1>
            {loading ? <p>SYNCING...</p> : (
                repos.map((repo, i) => (
                    <a key={i} href={repo.html_url} target="_blank" style={s.card}>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <h3 style={s.title}>{repo.name.replace(/-/g, ' ')}</h3>
                            <span style={{fontSize:'10px', color:'#555'}}>{repo.language}</span>
                        </div>
                        <p style={s.desc}>{repo.description || "View my work on GitHub."}</p>
                        <span style={{color:'#3b82f6', fontSize:'12px', fontWeight:'bold'}}>VIEW REPOSITORY →</span>
                    </a>
                ))
            )}
        </div>
    );
}