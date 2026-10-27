---
id: '01'
title: Research feasible MD to PDF/DOCX conversion engines under Vercel serverless constraints
type: research
status: closed
assignee: null
blocked_by: []
---

## Question

`apps/doc-converter` needs to convert Markdown into PDF and DOCX from inside a Vercel-hosted Next.js app — serverless functions, no persistent server, no pre-installed system binaries. Survey the real options and their fit for that environment:

- **Pandoc itself**: can a Pandoc binary be bundled into a Vercel serverless function (bundle-size limits, cold-start cost)? Does PDF output require a LaTeX engine (e.g. `xelatex`/`pdflatex`) on top, and if so is that remotely feasible to bundle too, or does it push PDF output out of reach for a plain Pandoc approach? Is Pandoc's native DOCX writer viable on its own (it doesn't need LaTeX) even if PDF doesn't work this way?
- **Pandoc-wasm / other WASM builds**: does a WASM build of Pandoc exist and run inside a Node/Edge serverless function, and with what limitations vs. the native binary?
- **JS-native alternatives**: markdown → HTML via `unified`/`remark`/`rehype`, then HTML → PDF via `puppeteer-core` + `@sparticuz/chromium` (headless Chrome packaged for serverless) or similar; purpose-built packages like `md-to-pdf`, `@react-pdf/renderer`, `markdown-pdf`. For DOCX, the `docx` npm package (build a document programmatically) vs. converting via Pandoc vs. other options.
- **Vercel-specific limits** that constrain whichever approach: max function execution duration (Hobby/Pro/Fluid compute tiers), deployment bundle size caps, memory limits, and the realistic cold-start/latency cost of bundling a headless browser or a Pandoc binary.

Produce a recommendation — a primary approach (and a documented fallback if the primary has real risk) covering both PDF and DOCX — with enough detail on sync-vs-async feasibility and rough size/latency numbers that ticket 02 (UI flow) and ticket 04 (abuse guardrails) can act on it directly. Cite primary sources (official Vercel docs, Pandoc docs, npm/GitHub for any library considered) fetched live, not secondhand summaries.

## Answer

Full findings, with primary-source citations (Vercel's official docs, Pandoc's own manual/install docs, GitHub release data, npm registry metadata, all fetched live): `docs/wayfinder/doc-converter/research/conversion-engine-findings.md` on branch `research/doc-converter-engine` (commit `c70b231`).

**Primary approach: split-engine, pure-JS-native, fully synchronous.**

- **Shared parsing:** `unified`/`remark`/`rehype` turns Markdown into a shared `mdast`/`hast` representation, reused by both output paths.
- **DOCX:** the `docx` npm package — pure JS, ~4.65 MB, zero external binaries, executes in low milliseconds.
- **PDF:** `puppeteer-core` + `@sparticuz/chromium`, rendering the same HTML the DOCX path derives from via Chromium's print-to-PDF. This is the exact pattern Vercel's own KB guide documents and ships a template for. Chromium adds only ~33–39 MB compressed to the function bundle (well inside the 250 MB cap) and needs ≥512 MB RAM (1600 MB+ recommended) — inside every Vercel plan's memory limits.

**Sync vs. async:** both paths finish well within a single Vercel function invocation (300s cap even on Hobby) for this use case's actual scale — one document per request, not batch conversion. **No job-queue/polling/Workflows pattern is needed.** Ticket 02 can design a plain request/response flow (upload or paste → immediate download). This directly resolves the "async infrastructure" item that was sitting in the map's Not yet specified.

**Fallback, if Chromium's weight/cold-start becomes a real problem:** `@react-pdf/renderer` (`pdfkit`-based, zero browser dependency) for the PDF path — trades reusing the HTML pipeline for mapping the Markdown AST into its own component API, but given the map's already-decided "plain formatting, no custom branding" requirement, that's a small loss.

**Ruled out:** native Pandoc binary (DOCX-only is bundle-feasible at ~33 MB, but PDF requires a separate LaTeX/wkhtmltopdf/typst engine that doesn't fit Vercel's bundle limits) and `pandoc-wasm` (its own README states it cannot produce PDF at all in the WASM sandbox, and at 58.6 MB unpacked has no size advantage over `docx` for DOCX).

**Flag for ticket 04:** Vercel's request/response body cap is 4.5 MB — worth an input-size cap comfortably under that, or streaming large outputs rather than returning them inline.
