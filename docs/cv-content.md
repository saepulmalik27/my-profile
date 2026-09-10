# Saepul Malik — CV Content Draft

Source of truth once approved: replaces `docs/cv_content_brainstorm.md`'s role
as the CV thinking doc. Target: 1 page. Contact/education carried over as-is
from the current `frontend-engineer.pdf` (no content-file source for these —
not part of the content-refresh scope).

---

**Saepul Malik** — Frontend Engineer

linkedin.com/in/saepulmalik27 · github.com/saepulmalik27 ·
saepulalmalik@gmail.com · +6289527334546 · www.saepulmalik.my.id

## Profile

Frontend Engineer with 8 years of software engineering experience: 3 years
full-stack (PHP, Vue.js, PostgreSQL) followed by 5 focused on React/Next.js
and AI-integrated web applications. Designs config-driven UI architecture and
reusable systems (forms, charts, RAG pipelines) for enterprise products,
combining an analytical background (Physics) with hands-on ownership of
platforms serving tens of thousands of users.

## Employment History

**Frontend Engineer | PT Inspigo Inovasi Indonesia (2021 – Present)**

- Designed and built a config-driven UI architecture — driving per-tenant
  component composition and layout, not just theming — for Inspigo For
  Business, now serving ~350 enterprise clients (~35,000 end users).
- Built Inspigo AI's RAG pipeline (S3 → Pinecone, OpenAI + Bedrock fallback)
  and owned the streaming chat UX, serving thousands of conversations/day at
  peak on a 5-person team.
- Built a reusable form system (React Hook Form + Zod) powering the CMS
  across every Inspigo content type, and the admin dashboard's chart/reporting
  layer (Recharts) — both now used by nearly every client organization.
- Built an AI call-center QA copilot (real-time transcription + rubric-based
  auto-evaluation) covering all support agents, automating 100% of session
  scoring versus ~10% manual sampling previously.
- Stood up CI/CD (GitHub Actions) and weekly automated security scanning
  (SAST/DAST with AI-formatted reports), replacing manual SSH deploys with
  push-to-deploy.
- Migrated all projects from Vercel to AWS Amplify and built S3-based media
  upload pipelines (presigned + Lambda-proxied).
- Also owned: SEO (#1 domestic brand search, green Core Web Vitals),
  analytics/tracking (GTM/GA/MoEngage), and the shared video player module
  powering all Inspigo video content.

**Full Stack Developer | PT Praweda Sarana Informatika (Outsourced by PT
Indocyber) (2018 – 2021)**

- Built a Shipyard Project Management System from the ground up (Laravel +
  Vue.js + PostgreSQL), centralizing project/warehouse tracking and closing a
  prior fraud vector in the inquiry/quotation process.
- Maintained and extended a Trucking Management Application, adding
  GPS-based route and parking-dwell-time tracking.

**Full Stack Developer Trainee | PT Indocyber Global Technology (2018)**

- Trained in C#, Java, SQL Server, and JavaScript.
- Built a Library Management System (MVC, .NET + Java Spring) as a final
  project.

## Education

Physics — IPB University, 2013 – 2017

## Technical Skills

_Daily-driver subset — full breadth (including "used"/"learning" items) lives
on the site's Skills page, not the CV._

- **Architecture & Concepts:** SSR/SSG, State Management Patterns, Web
  Performance Optimization, System Design, Code Splitting & Lazy Loading,
  Design Systems
- **AI Integration:** Prompt Engineering, System Prompt Design, RAG Pipeline
  Design, LLM Integration (OpenAI, Bedrock), Streaming Delivery (WebRTC, SSE)
- **Frontend:** HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js,
  RTK / Zustand, Tailwind CSS, React Hook Form + Zod, shadcn/ui, Git & GitHub
- **Backend & Infra:** AWS (S3, Lambda, Amplify), GitHub Actions (CI/CD), GTM
  / GA / MoEngage
- **Soft Skills:** Agile/Scrum, Cross-functional Collaboration, Documentation
  Writing

---

## Grilling notes (for review, not for the PDF)

- Not on the CV, staying web-only: Storybook and realtime chat (both
  stale/discontinued — no reason to lead with them on a live pitch document),
  and Currently Learning / Personal Projects (too in-progress for a print
  CV — see `/skills` and `/showcase`).
- All 13 Inspigo case studies condensed into 7 themed bullets rather than
  listed individually — a PDF can't do the site's expandable-card/case-study
  links, so grouping by theme (platform, AI/RAG, reusable systems, copilot,
  DevOps, cloud infra, "also owned") keeps it CV-length while still carrying
  every case study's substance somewhere.
- Contact info, education, and photo are carried over unchanged from the
  current PDF — none of these are in any `content/*.ts` file, so nothing to
  reconcile; not fabricated for this draft.
