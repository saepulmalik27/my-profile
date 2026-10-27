---
id: '02'
title: Decide the UI flow for the generic upload/paste path and the portfolio-content export path
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: ['01']
---

## Question

Using ticket 01's engine recommendation (and its sync-vs-async / latency constraints), design the actual page flow for `apps/doc-converter`:

- Is this one page with two flows, or two separate routes — one for "convert any markdown" and one for "export from my portfolio"?
- Generic path: upload a `.md` file, paste raw markdown text, or both? Any in-browser preview before conversion/download? Pick PDF vs DOCX output, or produce both?
- Portfolio-content export path: what's actually selectable — pick a specific case study from `apps/portfolio/content/projects/*.mdx`, generate a resume/CV PDF assembled from `career.ts`/`skills.ts`, or both? What's the picker UI look like?
- Response model: does conversion happen synchronously (submit → file streams back) or does it need a job-and-poll pattern, given ticket 01's answer on function duration and engine latency?
- File-size / length limits for the generic upload path, sized to whatever ticket 01 found workable.

## Answer

**Routes:** two separate routes — one for the generic markdown converter, one dedicated to portfolio-content export. Clean separation rather than a tabbed single page.

**Generic path:** supports both file upload and pasted text as input. After input, the app renders an HTML preview of the markdown before the user commits — no blind submit-and-download. The user picks one output format (PDF or DOCX) per conversion; the app doesn't generate both automatically.

**Portfolio-content export path:** covers both — a picker listing individual case studies (from `content/projects/*.mdx`) and a separate "Export Resume/CV" option assembled from `career.ts`/`skills.ts`. Exact picker UI and how the resume/CV gets assembled from those sources is the access/composition question ticket 03 (portfolio-content integration) resolves — this ticket only settles that both are selectable, not case-study-only or resume-only.

**Response model:** confirmed synchronous, per ticket 01 — submit → conversion runs inline → file streams back as the response. No job-queue or polling pattern, for either path.

**File-size / length limits:** no explicit cap decided here. Vercel's own 4.5 MB request/response body ceiling (per ticket 01) is the natural backstop for now; any deliberate, tighter limit is left to ticket 04 (abuse guardrails), which already owns that question.
