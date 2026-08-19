---
id: '08'
title: Define the Career page structure and recruiter-engagement interaction pattern
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

The brief asks for "interactive UI... with solid information to engage recruiters," possibly using interactive icons/images/animation. Decide, grounding in `docs/cv_content_brainstorm.md`'s achievement-based (XYZ format) content ideas and the known work history (PT Inspigo Inovasi Indonesia — AI/RAG + enterprise platform work; PT Praweda Sarana Informatika — Shipyard/trucking, real-time GPS tracking):

- Layout pattern: interactive scroll-timeline, expandable cards per role, or something else.
- What fields each work-history entry needs (role, company, dates, impact metrics, tech used, highlights) — this feeds the shared content schema in ticket 11.
- What "engage recruiters" concretely means here: a resume download/print view, a "download as PDF" of this page, direct contact CTA per entry, links to case-study detail (see ticket 09 for whether case studies live here or on Skills & Showcase)?
- Icon/animation treatment: per-role tech-stack icons, animated reveal on scroll, etc.

## Answer

**Layout:** Expandable cards per role, using ticket 06's card primitive directly — one card each for PT Inspigo Inovasi Indonesia (Frontend Engineer, 2021–Present), PT Praweda Sarana Informatika (Full Stack Developer, 2018–2021), and PT Indocyber Global Technology (Full Stack Developer Trainee, 2018). Collapsed state shows role/company/dates + one top highlight; expands on click to the full achievement list and tech tags. Reveal-on-scroll uses ticket 06's standard spring (stiffness 120, damping 18), staggered per card — no bespoke animation for this page.

**Entry fields** (feeds ticket 11's schema): `role`, `company`, `startDate`/`endDate` (or `"Present"`), `topHighlight` (shown collapsed), `achievements: string[]` (XYZ-format bullets per `docs/cv_content_brainstorm.md` — Accomplished [X] as measured by [Y], by doing [Z]), `techTags: string[]`, `caseStudySlug?` (optional link to a `/projects/[slug]` case study, per ticket 09's scope decision — Inspigo's entry links to the Inspigo AI / IFB case studies).

**Recruiter engagement:** three mechanisms on this page — a "Download CV" primary button (ticket 06 primitive, points at `public/frontend-engineer.pdf`); a direct "Get in touch" contact CTA on the page itself (not requiring navigation to About & Contact first — links there or to `mailto:`); and per-entry links to matching Skills & Showcase case studies where one exists (Inspigo entry → Inspigo AI / IFB case studies).

**Icons:** A tech-stack icon row per entry (React, Next.js, OpenAI, PHP, Vue, etc. — sourced via `lucide-react` or simple logo icons), shown alongside/instead of the plain text tags for that entry — the one page where icons supplement ticket 06's plain-tag primitive, since scannable tech recognition matters more here for a skimming recruiter.
