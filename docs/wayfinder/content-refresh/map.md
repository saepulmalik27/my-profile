---
label: wayfinder:map
tracker: local-markdown
---

# Portfolio Content Refresh (Wayfinder Map)

## Destination

Finalized, copy-ready content for the website: project deep-dives (challenges tackled, problems solved) for **Inspigo For Business**, **Inspigo AI**, ten more not-yet-documented Inspigo-era projects (n8n workflow/security automation, CI/CD, Storybook docs, AWS S3/Amplify/Vercel infra, CMS, admin analytics dashboard, video player, GTM/GA/MoEngage tracking, SEO, Agora+Firebase realtime chat), Praweda's **Shipyard Project Management System**, Praweda's **Trucking Management Application**, and Indocyber's **trainee project**; a refreshed **Skills & Techstack** list; and a decided site placement plus captured content for three sections that don't exist yet — **Currently Learning**, **Personal Projects**, **Courses**. Everything is recorded as ticket Answers, ready to transcribe into `apps/portfolio/content/*.ts`, `content/projects/*.mdx`, and whatever new section ticket 07 lands on.

## Notes

- **Domain:** `apps/portfolio`'s content layer only (`content/*.ts`, `content/projects/*.mdx`). Per standing decision below, **no code/file edits happen inside this map** — every ticket produces a decision (content facts), transcription into the actual files is separate execution afterward.
- **Tracker:** no issue tracker configured for this repo — same **local-markdown fallback** used by the (closed) Portfolio Revamp map: this file is the map, each `tickets/NNN-slug.md` is a child ticket, claimed via `assignee:`, blocked via `blocked_by: [ids]` in frontmatter. Frontier = open, unassigned tickets with all `blocked_by` ids closed.
- **Plan, don't do:** confirmed with the user — this map stops at decisions. Pasting finalized content into `content/career.ts`, `content/skills.ts`, `content/projects/*.mdx`, and any new schema fields is out of this map, tracked under Not yet specified.
- **Skills to consult:** `/domain-modeling` for ticket 07 (deciding where the three new sections live in the site IA) and any schema-shape questions that come up while grilling. `/grill-with-docs` is reserved for explicit user invocation and can't be called by the agent (learned during the Portfolio Revamp map) — grilling tickets are worked as a live conversation in-session.
- **Relationship to the Portfolio Revamp map:** that map locked the site's page IA (Home/Career/Skills/About routes), visual theme, and the About page's physics-era milestone — none of that is revisited here. This map only refines/expands the _facts_ that feed Career and Skills & Showcase, plus decides where the three net-new sections go.
- **Ties to `docs/recruiter-feedback.md`:** that review flagged three gaps this map is a direct chance to close — no quantified impact in achievements, no visuals/evidence for case studies, and no visible personal-project/GitHub proof. Grilling tickets should actively ask for numbers, screenshot/demo availability, and concrete links, not just prose.
- **User-directed working order:** Inspigo For Business (01) → Inspigo AI (02) → the ten newly-discovered Inspigo projects (11–20, any order within the group) → Praweda Shipyard (03) → Praweda Trucking (04) → Indocyber (05) → Skills & Techstack (06) → IA placement for the three new sections (07) → Currently Learning (08) → Personal Projects (09) → Courses (10). Ticket ids aren't sequential with this order — 11–20 were added mid-session when the scope widened (see below) — this line is the source of truth for working order, not the filenames.
- **Scope widened mid-charting:** after the first pass, the user flagged that many Inspigo-era projects existed beyond the two already in `content/projects/*.mdx` (Inspigo For Business, Inspigo AI). Confirmed via a quick scoping round: all ten are Inspigo-era (2021–present), the n8n/security-automation one (ticket 11) is official Inspigo work (not a personal project, so it stays out of ticket 09), and each gets its own ticket (one-per-item, matching the depth given to the original two) rather than being bundled by theme.

## Decisions so far

_(none yet — map just charted)_

## Not yet specified

- **Transcribing finalized content** into `apps/portfolio/content/career.ts`, `content/skills.ts`, `content/projects/*.mdx`, and whatever new file/fields ticket 07 decides on — pure execution once every ticket below is closed.
- **Producing case-study visuals** (screenshots, GIFs, or a short demo video) referenced by `docs/recruiter-feedback.md` ticket 5 — asset creation is separate from writing the case-study text captured here.
- **Final prose polish pass** across all captured content, once everything is transcribed — copyediting, not a decision.

## Out of scope

- The site's page IA (routes, nav, 3D home scene, visual theme) and the About page's physics-era milestone — already decided by the closed Portfolio Revamp map (`docs/wayfinder/portfolio-revamp/map.md`); not reopened here.
