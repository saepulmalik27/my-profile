---
id: '09'
title: Clarify the scope and structure of the Skills & Showcase page
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

"Skills and showcase" is ambiguous and needs to be resolved before content modeling: does this page cover skills display only (a categorized skills list/visualization), or does it also absorb project case studies — i.e. does it replace the old `docs/ui-pages.md` `/projects` + `/projects/[slug]` idea (deep-dive case studies like Inspigo For Business, Inspigo AI RAG, Shipyard/Trucking, per `docs/portfolio_website_brainstorm.md`)?

Decide:

- Final scope: skills-only, case-studies-only, or both combined on one page (and if both, how they're visually separated).
- If case studies are included: do they stay as MDX detail pages (`content/projects/*.mdx`, already wired via `app/projects/[slug]/page.tsx`) linked from this page, or move fully into the structured data model?
- Skills display pattern: categorized list (current hardcoded array), icon grid, proficiency visualization, or grouped by "Architecture & Concepts / AI Integration / Tools" per `docs/cv_content_brainstorm.md`'s restructuring suggestion.
- Whether this page needs its own interactive/animated treatment distinct from Career, or shares the same visual pattern.

## Answer

**Scope:** Skills & Showcase combines both — a skills overview section plus 2-3 deep-dive project case studies (Inspigo For Business, Inspigo AI/RAG, Shipyard/Trucking), visually separated on the same page (e.g. skills grid up top, case-study cards below). This absorbs and replaces the old `docs/ui-pages.md` `/projects` route concept — there is no separate `/projects` route in the new IA, it's folded into `/skills`.

**Case study format:** Case studies stay as MDX detail pages, reusing the existing `content/projects/*.mdx` + `app/projects/[slug]/page.tsx` pattern (already wired up). The Skills & Showcase page renders case-study summary cards that link out to `/projects/[slug]`. They are _not_ folded into the structured TS/JSON data model from ticket 11 — that model covers skills (and career/about), not case-study prose.

**Skills display:** Grouped by category — Architecture & Concepts / AI Integration / Tools & Languages / Soft Skills — per the restructuring idea in `docs/cv_content_brainstorm.md`, rather than a flat tag list or self-rated proficiency visualization.

**Visual treatment:** Shares the same site-wide visual pattern/theme as Career and About & Contact (per the map's standing decision that the moodier home tone carries through everywhere) rather than a distinct one-off style — concrete styling is ticket 06's job, not this ticket's.
