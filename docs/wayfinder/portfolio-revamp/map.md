---
label: wayfinder:map
tracker: local-markdown
---

# Portfolio Revamp (Wayfinder Map)

## Destination

A complete decision roadmap for revamping `apps/portfolio` into four route-based pages — **Home** (a full interactive 3D bedroom/coding-avatar scene), **Career**, **Skills & Showcase**, and **About & Contact** — covering visual design, content architecture, and 3D interaction design, so the whole thing is ready to hand off for implementation ticket by ticket. This map produces decisions, not code (see Notes).

**Status: reached.** All 12 tickets are closed and no fog graduated into new ones — the way is clear. What's left (below, under Not yet specified) is implementation work, not further decisions.

## Notes

- **Domain:** `apps/portfolio` only (Next.js 16 App Router, React 19, Tailwind v4 CSS-first theme, shared `@repo/ui` package). Three.js/React Three Fiber is net-new to this repo.
- **Tracker:** no issue tracker was configured for this repo, so this map uses the **local-markdown fallback**: this file is the map, each `tickets/NNN-slug.md` file is a child ticket. A ticket is claimed by setting `assignee:` in its frontmatter. Blocking is expressed via `blocked_by: [ids]` in ticket frontmatter (no native tracker blocking available) — a ticket is unblocked when every id in its `blocked_by` list is `status: closed`. The frontier = open tickets with an empty/all-closed `blocked_by` and no `assignee`.
- **Plan, don't do:** ticket resolutions are decisions, recorded as an `## Answer` section appended to the ticket. Actually building the 3D scene, pages, etc. happens later, outside this map.
- **Skills to consult:** `/domain-modeling` for schema/terminology work; `/frontend-design` for the visual-design tickets (this is the "use claude design" ask). `/grill-with-docs` is reserved for explicit user invocation — it can't be called by the agent — so grilling tickets are worked as a live conversation in-session (AskUserQuestion or direct discussion), not by delegating to that skill. `/prototype` for raise-fidelity tickets where "how should it look/behave" is the key question.
- **Standing decisions carried into every ticket below** (settled while charting, not re-litigated per ticket):
  - Four pages are **separate routes** (`/`, `/career`, `/skills`, `/about`) with a persistent nav, not scroll-sections on one page.
  - Portfolio content (work history, skills, bio) lives in **structured TS/JSON data files** — single source shared by the UI and the AI chatbot's system prompt (today it's hardcoded in `app/page.tsx` and duplicated in `app/api/chat/route.ts`).
  - The AI "chat with my resume" bot becomes a **persistent site-wide floating widget**, not tied to the home page's layout.
  - Home's 3D bedroom-at-night scene sets a **new, moodier visual tone for the whole site** — Career/Skills/About get redesigned to match it. This **supersedes** the old "Bold & Colorful" bento aesthetic described in `docs/portfolio_references.md` and `docs/spec.md`.
  - This map **supersedes** `docs/ui-pages.md`'s `apps/portfolio` page list (`/`, `/about`, `/projects`, `/projects/[slug]`, `/resume`) and the visual-direction section of `docs/portfolio_website_brainstorm.md`.
  - This map does **not** touch or retire `apps/blog`, `apps/dashboard`, or a standalone `apps/3d-showcase` app described in `docs/development-roadmap.md` / `docs/project-overview.md` — see Out of scope.
  - Useful source material to ground content decisions: `docs/cv_content_brainstorm.md` (achievement-based CV copy ideas), `docs/portfolio_references.md` (bento-grid visual references, though the visual direction itself is now superseded per above).

## Decisions so far

- [Name the destination & reconcile scope with old docs](#) — Full decision roadmap only; this map supersedes the old portfolio-specific docs for page structure/visual direction but leaves the old multi-app vision (blog/dashboard/3d-showcase) untouched and out of scope; the 3D home scene is fully in scope with all 5 interactions.
- [Map the frontier — breadth-first pass](#) — Routes are separate per page; content moves to structured data files shared with the chatbot; chatbot becomes a persistent floating widget; the 3D room's moodier tone becomes the new site-wide visual direction.
- [Clarify the scope and structure of the Skills & Showcase page](tickets/09-skills-showcase-scope.md) — Skills + case studies combined on one page; case studies stay as MDX detail pages (not folded into structured data); skills grouped by category (Architecture/AI/Tools/Soft Skills); visual treatment matches the rest of the site.
- [Define About & Contact page content and contact mechanism](tickets/10-about-contact-content.md) — Interactive scroll-narrative with 3 real career milestones (from `public/frontend-engineer.pdf`); direct contact links only (real LinkedIn URL, fixing the `href="#"` placeholder); resume = download + inline PDF preview of the existing PDF; chatbot widget identical to every other page.
- [Research the R3F ecosystem for a walkable-room, interactive-object scene](tickets/01-research-3d-ecosystem.md) — Findings on branch `research/3d-ecosystem-portfolio` (`docs/wayfinder/portfolio-revamp/research/3d-ecosystem-findings.md`): `drei` KeyboardControls (no physics engine needed), Mixamo-rigged character + crossfaded clips, Kenney/Quaternius CC0 assets, `next/dynamic({ssr:false})` loading, `brunosimon/folio-2019` as primary reference.
- [Decide the 3D home scene's tech stack, control scheme, and asset pipeline](tickets/02-decide-3d-stack-and-controls.md) — R3F + drei + Box3 collision, no physics engine; click-to-walk control; Kenney/Mixamo/Quaternius CC0 assets; ≤50k tris, ≤5–8MB initial load.
- [Design the 3D room's art direction and lighting](tickets/03-3d-room-art-direction.md) — "Two Lights" concept (mood board: https://claude.ai/code/artifact/5dc05b06-6230-498c-a491-ffb2a52851b4), approved as-is: lamp amber `#F2A65A` + monitor cyan `#6FE2D6` as the two key lights/accents, Ink Navy `#12141F` base everywhere, Fraunces/IBM Plex Sans/IBM Plex Mono type system — this is the concrete starting point for ticket 06.
- [Decide accessibility, SEO, and low-end/mobile fallback strategy](tickets/04-3d-accessibility-seo-fallback.md) — Real static semantic HTML behind the canvas (not a separate text-only mode) serves a11y and SEO/OG alike; capability-probed reduced-fidelity 3D on weak devices (no static-image tier); Lighthouse ≥80 mobile/≥90 desktop, LCP ≤2.5s on the semantic hero text.
- [Specify the behavior and feedback for each of the 5 avatar interactions](tickets/05-avatar-interactions-behavior.md) — Click-to-walk with collision; window toggle (light+curtain, no sound); bed = playful self-exiting easter egg; light toggle matches ticket 03's Two Lights baseline; **sitting on the chair is the primary interaction** — triggers the monitor content reveal into Career/Skills/About; a fading first-visit hint nudges discovery.
- [Design the site-wide visual theme](tickets/06-sitewide-visual-theme.md) — "Two Lights Kit" (https://claude.ai/code/artifact/d3907023-43b2-42c1-8dc1-a2bb4d9746f1), approved with the real logo added to nav: formalized `@theme` color tokens, 3px radius/hairline-border system, Fraunces/Plex Sans/Plex Mono scale, "quiet-then-spark" Framer Motion language, and new primitives (nav, button variants, tags, career card, case-study card, chat launcher).
- [Decide site-wide navigation and layout shell](tickets/07-nav-layout-shell.md) — Nav hidden until the visitor engages with the home scene, solid/persistent on content pages; hamburger/drawer on mobile; minimal footer on content pages only (never on home); simple ~250ms fade between routes.
- [Define the Career page structure and recruiter-engagement pattern](tickets/08-career-page-structure.md) — Expandable role cards (Inspigo/Praweda/Indocyber) using ticket 06's card primitive; entry schema for ticket 11 (role/company/dates/topHighlight/achievements/techTags/caseStudySlug); Download CV + contact CTA + per-entry case-study links; tech-stack icon row per entry.
- [Define the unified content data model](tickets/11-unified-content-data-model.md) — Typed TS modules in `apps/portfolio/content/` (`profile.ts`, `career.ts`, `skills.ts`, `about.ts`, `types.ts`); case studies stay as MDX, referenced only by `caseStudySlug`; `content/system-prompt.ts`'s `buildSystemPrompt()` replaces the hardcoded chatbot `SYSTEM_PROMPT`.
- [Design the persistent AI chatbot floating widget](tickets/12-chatbot-widget-ux.md) — Always-visible bottom-right launcher (even on home), root-layout-mounted so the conversation persists across route navigation; fixed ~380×560px panel on desktop, full-screen on mobile; restyled to the ticket 06 theme; system prompt wiring to ticket 11 confirmed as non-decisional.

## Not yet specified

Everything below is implementation-phase work, not a further decision this map needs to make — nothing here blocks starting to build.

- **Final page copy/content authoring** (CV bullets, project case-study narratives, about bio prose) — the structure and facts are locked (tickets 08, 09, 10, 11); writing the actual final sentences into `apps/portfolio/content/*.ts` and the MDX case studies is execution, informed by `docs/cv_content_brainstorm.md`.
- **SEO/analytics specifics** beyond the base accessibility/SEO fallback (ticket 04) — OG image asset, sitemap, structured data. Small enough to decide inline during implementation.
- **Deployment/hosting configuration** for the revamped site (env vars, preview deploys) — unaffected by anything decided in this map; can be handled whenever, independent of the build order.

## Out of scope

- `apps/blog`, `apps/dashboard`, and a standalone `apps/3d-showcase` app, plus the Vercel-subdomain deployment topology, as described in `docs/development-roadmap.md` and `docs/project-overview.md` — this map is scoped to `apps/portfolio` only; those ideas are left alone, neither advanced nor retired.
