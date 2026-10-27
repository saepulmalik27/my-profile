---
label: wayfinder:map
tracker: local-markdown
---

# Doc Converter (Wayfinder Map)

## Destination

A decision roadmap for a new app, **`apps/doc-converter`**, that converts Markdown to PDF and DOCX (via Pandoc or an equivalent engine) and deploys publicly on Vercel alongside `apps/portfolio`. It serves two flows: a generic upload/paste of any `.md` file, and a dedicated path that exports content straight out of `apps/portfolio`'s own content (case-study MDX, resume/CV data). Primarily a personal content pipeline that happens to be public, not a marketing showcase feature. This map produces decisions — the conversion engine/runtime, the UI flow, the portfolio-content integration boundary, and the abuse-guardrail approach — not code; scaffolding the app is execution that happens afterward.

**Status: reached.** All 4 tickets are closed and no fog graduated into new ones — the way is clear. What's left (below, under Not yet specified) is scaffolding/implementation work, not further decisions.

## Notes

- **Domain:** a brand-new app in this Turborepo/pnpm monorepo (`apps/*`, `packages/*`), sibling to `apps/portfolio` and `apps/storybook`. No existing code to anchor against — this is greenfield.
- **Tracker:** no issue tracker configured for this repo — same **local-markdown fallback** used by the Portfolio Revamp and Content Refresh maps: this file is the map, each `tickets/NNN-slug.md` is a child ticket, claimed via `assignee:`, blocked via `blocked_by: [ids]` in frontmatter. Frontier = open, unassigned tickets with all `blocked_by` ids closed.
- **Plan, don't do:** every ticket below produces a decision; scaffolding `apps/doc-converter`, wiring `turbo.json`, and writing conversion code happens later, outside this map.
- **Skills to consult:** `/domain-modeling` if the portfolio-content integration ticket surfaces schema/package-boundary questions. Research tickets go through a `/research` subagent, not a live conversation. `/grill-with-docs` is reserved for explicit user invocation and can't be called by the agent — grilling tickets are worked as a live conversation in-session (AskUserQuestion or direct discussion).
- **Hosting constraint that shapes almost everything:** `apps/portfolio` deploys on Vercel, and `apps/doc-converter` is expected to deploy the same way — serverless functions, no persistent server, no pre-installed system binaries. Pandoc's PDF output normally needs a LaTeX engine; whether that (or Pandoc itself) is even runnable in this environment is genuinely open, which is why ticket 01 is research, not an assumption.
- **Charting-session decisions** (settled while naming the destination, not re-litigated per ticket):
  - Primary use case is a **personal content pipeline** — your own markdown (notes, case studies, resume/CV) — not a public-facing showcase feature, even though it deploys publicly.
  - Interface is a **Next.js web app** (`apps/doc-converter`), matching the existing app pattern in this monorepo.
  - Formats in scope: **MD → PDF** and **MD → DOCX**. Reverse conversions are out of scope (see below).
  - Input flow needs **both** a generic upload/paste path for any markdown, and a dedicated path that exports directly from `apps/portfolio`'s content.
  - Output formatting is **plain/default** — no custom branding, template, or site-matched styling needed.
  - Because it's publicly reachable, the endpoint **needs abuse guardrails** (rate limiting / size caps) — not skipped as unnecessary complexity.
  - Hosting is **Vercel**, same platform as `apps/portfolio` — this is what makes the conversion-engine question (ticket 01) a real fork rather than a formality.

## Decisions so far

- [Name the destination](#) — Personal content pipeline (own markdown + portfolio-content export), deployed publicly on Vercel as a Next.js app, MD → PDF/DOCX only, plain formatting, needs abuse guardrails. See Notes for the full charting-session decision list.
- [Research feasible MD to PDF/DOCX conversion engines under Vercel serverless constraints](tickets/01-conversion-engine-research.md) — Split-engine, pure-JS-native, fully synchronous: `docx` npm package for DOCX, `puppeteer-core` + `@sparticuz/chromium` for PDF (both derived from one shared `unified`/`remark`/`rehype` parse). Fits comfortably inside Vercel's bundle/memory/duration limits; no job-queue or polling needed. Fallback if Chromium proves too heavy: `@react-pdf/renderer`. Native Pandoc and `pandoc-wasm` both ruled out — neither can produce PDF within Vercel's constraints. Findings: `docs/wayfinder/doc-converter/research/conversion-engine-findings.md` on branch `research/doc-converter-engine` (commit `c70b231`).
- [Decide the UI flow for the generic upload/paste path and the portfolio-content export path](tickets/02-ui-flow.md) — Two separate routes (not tabs on one page). Generic path: upload or paste, rendered preview before conversion, user picks one output format per submit. Portfolio-export path: both case-study picker and a Resume/CV export are selectable (exact picker/assembly mechanics deferred to ticket 03). Response is synchronous — submit, file streams back, no job/poll. No explicit size cap decided here; Vercel's 4.5MB body limit is the backstop, deliberate caps are ticket 04's call.
- [Decide how apps/doc-converter accesses apps/portfolio's content for the export path](tickets/03-portfolio-content-integration.md) — New shared `packages/content` package (career/skills/types/project MDX extracted out of `apps/portfolio`), `workspace:*` dependency of both apps — chosen because Vercel's per-app builds don't reliably see a sibling app's directory. Resume/CV export is freshly generated from that shared data at conversion time, not a reuse of the existing static `public/frontend-engineer.pdf` (which keeps its current role, untouched). Separate redeploy of `apps/doc-converter` to pick up portfolio content changes is accepted, not engineered around.
- [Decide the abuse-guardrail approach for the public convert endpoint](tickets/04-abuse-guardrails.md) — No rate limiting or Turnstile at launch (low-traffic site, revisit only if needed); ~4MB size cap on the generic upload/paste path (near Vercel's 4.5MB body ceiling); portfolio-export path gets no extra limits (fixed, bounded input); basic in-app conversion logging (timestamp, IP, format, size) as the abuse-visibility mechanism in place of automated rate-limit enforcement.

## Not yet specified

- **Specific PDF/DOCX layout details** beyond "plain formatting" (page size, margins, whether the portfolio-content export — case studies or the freshly-generated Resume/CV — gets any minimal structure like a title page) — pure execution once scaffolding starts, no open decision blocking it.
- **Scaffolding and CI wiring** — pure execution now that every ticket above is closed: `apps/doc-converter/package.json`, `turbo.json` task entries, lint/type-check/build config, CI workflow; per ticket 03, extracting `apps/portfolio/content/{career,skills,types}.ts` + `content/projects/*.mdx` into the new `packages/content` and repointing `apps/portfolio`'s existing imports at it; and per ticket 04, wiring the in-app conversion logging.

## Out of scope

- **Reverse conversions** (PDF/DOCX → Markdown) — explicitly scoped out during charting; this map covers MD → PDF/DOCX only.
