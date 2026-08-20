---
id: '06'
title: 'Refresh Skills & Techstack content'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

`content/skills.ts` currently has four flat categories (Architecture & Concepts, AI Integration, Tools & Languages, Soft Skills) with no proficiency signal. Now that tickets 01–05 have surfaced the real tech used per project, reconcile:

- Anything in `content/skills.ts` that's aspirational/not actually used in production work, and anything genuinely used (surfaced in tickets 01–05, e.g. specific vector DB, specific state-management library) that's missing from the list?
- Should skills carry any proficiency/recency signal (e.g. "daily driver" vs. "used on one project" vs. "learning"), or stay a flat tag list — recruiters often weight recency and depth, not just presence on a list?
- The AI Integration category is thin (3 items) relative to how much of the Inspigo AI narrative leans on it — does grilling ticket 02 surface anything (specific RAG/vector-store tooling, prompt-eval approach) that belongs here?
- Any tools/languages that are stale and should be dropped (e.g. CakePHP/CodeIgniter — still worth listing given Praweda history, or noise for a frontend-focused audience)?

## Answer

**Drop:** Micro-frontend — never actually used in production.

**Keep, still heavily used:** System Design (used constantly). Redux (still used, though newer projects lean toward RTK or Zustand instead — worth reflecting that evolution rather than listing Redux alone).

**Proficiency signal:** Yes — skills should carry a signal (e.g. daily-driver vs. used-on-one-project vs. learning), not stay a flat tag list.

**AI Integration — expand significantly.** Current 3-item list undersells the actual depth. Add: LangChain and other orchestration frameworks (used, not just theoretical), embeddings + vector databases (Pinecone specifically, surfaced in ticket 02), streaming response delivery via both WebRTC and SSE, system prompt design, RAG-specific know-how (chunking strategy, context construction), and context-window management/understanding.

**Stale tools (CakePHP/CodeIgniter) and security tooling (Semgrep/Nuclei/OWASP ZAP):** Keep both — genuinely used, not noise, even for a frontend-leaning audience.

**Also surfaced across tickets 01–05/11–20, worth folding in during transcription:** React Hook Form + Zod, shadcn, TanStack Table, Recharts, react-player, Agora (WebRTC), Firebase, GTM/GA/MoEngage, n8n, AWS (S3, Lambda, Amplify), Laravel + Vue.js + PostgreSQL (Praweda era), GitHub Actions CI/CD.

**Note:** This ticket captures the reconciliation decisions; the actual restructured `content/skills.ts` (categories, proficiency tagging scheme, final item list) is transcription work per the map's "Plan, don't do" standing decision — not built here.
