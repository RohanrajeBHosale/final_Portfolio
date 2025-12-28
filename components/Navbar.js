'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'About', href: '/' },
        { name: 'Experience', href: '/experience' },
        { name: 'Projects', href: '/projects' },
        { name: 'Education', href: '/education' },
    ];

    // --- Inline Styles ---
    const styles = {
        nav: {
            position: 'fixed', top: 0, left: 0, width: '100%', height: '80px',
            zIndex: 1000, display: 'flex', alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(15px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontFamily: 'sans-serif'
        },
        container: {
            maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 25px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        },
        logo: {
            fontSize: '22px', fontWeight: '900', color: '#fff', textDecoration: 'none', letterSpacing: '-1px'
        },
        dot: { color: '#3b82f6' },
        menu: { display: 'flex', alignItems: 'center', gap: '35px', listStyle: 'none', margin: 0, padding: 0 },
        link: {
            fontSize: '13px', fontWeight: '600', textDecoration: 'none', textTransform: 'uppercase',
            letterSpacing: '1px', transition: '0.2s'
        },
        resumeBtn: {
            backgroundColor: '#2563eb', color: '#fff', padding: '10px 22px', borderRadius: '50px',
            fontSize: '13px', fontWeight: '700', textDecoration: 'none', marginLeft: '20px', transition: '0.2s'
        }
    };

    return (
        <nav style={styles.nav}>
            <div style={styles.container}>
                <Link href="/" style={styles.logo}>
                    ROHANRAJE<span style={styles.dot}>.</span>
                </Link>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ul style={styles.menu}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    style={{
                                        ...styles.link,
                                        color: pathname === link.href ? '#fff' : '#666'
                                    }}
                                    onMouseOver={(e) => e.target.style.color = '#fff'}
                                    onMouseOut={(e) => e.target.style.color = pathname === link.href ? '#fff' : '#666'}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/resume.pdf"
                        style={styles.resumeBtn}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
                    >
                        RESUME
                    </Link>
                </div>
            </div>
        </nav>
    );
}