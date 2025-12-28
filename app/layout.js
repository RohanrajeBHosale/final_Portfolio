import "./globals.css";
import Navbar from "../components/Navbar";
import Rohbot from "../components/Rohbot";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body style={{ margin: 0, backgroundColor: '#000' }}>
        <Navbar />
        <main style={{ paddingTop: '80px' }}>
            {children}
        </main>
        <Rohbot />
        </body>
        </html>
    );
}