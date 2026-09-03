# Portfolio Website

My personal portfolio, built from scratch as a full project — planned, designed, and deployed in phases.

**🔗 Live: [showmikdebnath.me](https://showmikdebnath.me/)**

---

## About

This isn't just a static resume page — it's an ongoing project I'm building out feature by feature, treating it as both a portfolio *and* a way to practice full-stack + AI engineering skills. Every phase below is planned, built, and shipped independently rather than all at once.

## ✅ Phase 1 — Static Portfolio (Live)

- Dark-themed, fully responsive design with scroll animations (AOS) and a typing-effect hero (Typed.js)
- Pages: Home, About, Projects, Contact
- Categorized skills, timeline, and a featured publications section
- Project showcase with live demo links and GitHub links
- Zero cost — built with plain HTML/CSS/JS, no frameworks or build tools

## ✅ Phase 2 — Contact, SEO & Polish (Live)

- Contact form wired to [Formspree](https://formspree.io/) via AJAX submission (no page reload)
- Custom domain (`showmikdebnath.me`) via Namecheap, hosted free on Cloudflare Workers
- SEO: sitemap.xml, robots.txt, Open Graph tags, submitted and indexed on Google Search Console
- Free analytics via Cloudflare Web Analytics + Google Analytics
- Favicon and social-preview (Open Graph) image
- 🔲 Generic CV upload — coming once it's written (currently deferred in favor of my job-specific CV)

## 🔜 Phase 3 — Backend + Blog (Planned)

- FastAPI backend, deployed on Render
- Supabase (Postgres + Storage) for a blog database and file storage
- Simple admin login to publish blog posts without redeploying the site
- Blog listing + individual post pages, fetched dynamically
- Possibly migrating the contact form fully server-side

## 🔮 Phase 4 — RAG Chatbot (Planned)

- A chatbot on the site that can answer visitor questions about me, my projects, and my background
- Powered by Groq (LLaMA) + vector search over my own content (About page, project descriptions, resume)
- Same approach I used in my [AI Playground](https://github.com/ShowmikDebnath/AI-Playground) experiments, applied to a real product

---

## Tech Stack

**Current (Phase 1–2):** HTML, CSS, JavaScript, AOS, Typed.js, Formspree, Cloudflare Workers

**Planned (Phase 3–4):** FastAPI, PostgreSQL, Supabase, Groq (LLaMA), pgvector

## Repo Structure

```
portfolio-website/
├── frontend/       # everything live today
├── backend/        # reserved for Phase 3
├── wrangler.jsonc  # Cloudflare Workers config
└── README.md
```

---
