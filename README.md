# 🚀 Rohanraje.com - Next.js AI Portfolio & Digital Twin

> "I didn't just want a portfolio. I wanted an Agent that could interview on my behalf."

This is a **Next.js 14** application that serves as my professional portfolio. Unlike static sites, this features **ROHbot**, a fully autonomous **RAG (Retrieval Augmented Generation)** Digital Twin capable of answering questions about my background, skills, and projects using my own voice via **ElevenLabs**.

![Portfolio Preview](public/og-image.png)

## 🌟 Key Features

### 🧠 The "Digital Twin" (ROHbot)
- **Architecture:** Full RAG pipeline using **Supabase (pgvector)** for long-term memory.
- **Inference:** Powered by **Groq (Llama 3.3 70B)** for sub-second latency responses.
- **Embeddings:** Uses **Google Gemini (text-embedding-004)** for semantic search.
- **Voice:** Integrated **ElevenLabs API** for real-time Text-to-Speech (TTS).
- **Behavior:** Streaming responses (Token-by-token) with interruption handling (Barge-in).

### ⚡ Automated Project Sync
- **GitHub API Integration:** The "Projects" page fetches directly from my GitHub account.
- **Zero-Maintenance:** To add a new project to my site, I simply tag a repository with `portfolio` on GitHub. The site updates instantly via ISR/Client-side fetching.

### 🎨 Modern UI/UX
- **Glassmorphism Design:** Custom dark-mode aesthetic with frosted glass effects.
- **Performance:** Optimized images, lazy loading, and Edge-ready API routes hosted on Vercel.

---

## 🛠️ The Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | Next.js 14 (App Router) | React Server Components & Client Hooks |
| **Styling** | CSS-in-JS | Custom responsive design system |
| **Database** | Supabase | Vector Store for RAG Knowledge Base |
| **LLM Inference** | Groq | Llama 3.3 70B (Versatile) |
| **Embeddings** | Google Gemini | text-embedding-004 |
| **Voice** | ElevenLabs | Multilingual v1 Model |
| **Hosting** | Vercel | CI/CD and Edge Functions |

---

## 📂 Architecture Overview

1.  **Ingestion:** A custom Node.js script scans my local Markdown notes and GitHub Repos, converts them to Vectors, and pushes them to Supabase.
2.  **Retrieval:** When a user asks a question, the backend converts the query to a vector and performs a Semantic Similarity Search.
3.  **Generation:** The relevant context + user question is sent to Groq/Llama 3.3 to generate a strictly factual response.
4.  **Synthesis:** The text is streamed to the frontend for speed, while simultaneously being sent to ElevenLabs to generate audio.

---

## 🚀 Getting Started Locally

1.  **Clone the repo**
    ```bash
    git clone https://github.com/RohanrajeBHosale/final_Portfolio.git
    cd final_Portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**
    Create a `.env.local` file:
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:3000
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

---

## 🤝 Contact & Hired
This project demonstrates my ability to build **Full-Stack AI Applications**. If you are looking for an AI Engineer who understands the entire data lifecycle—from Vector DBs to Frontend UX—let's talk.

[Visit the Live Site](https://www.rohanraje.com)
