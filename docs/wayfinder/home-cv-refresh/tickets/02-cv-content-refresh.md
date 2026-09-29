---
id: '02'
title: 'Update CV content (Markdown draft, then PDF)'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

`apps/portfolio/public/frontend-engineer.pdf` (the "Download CV" file linked
from the nav, the career page, and the home page's sit-reveal) is a static
binary with no source file in this repo — `docs/cv_content_brainstorm.md` is
an old Bahasa Indonesia brainstorm doc, not a maintained CV source, and
predates the content-refresh work.

**This ticket's deliverable is a Markdown draft of the full CV content —
not the PDF itself.** Produce the PDF only after the Markdown draft below is
written and reviewed/approved.

- Structure: does the PDF need to mirror `content/career.ts`'s three roles
  (Inspigo/Praweda/Indocyber) 1:1, or does a print CV warrant a different
  cut (e.g. condensing the 13 new Inspigo case studies into a few grouped
  bullets rather than listing all of them, since a PDF can't do the
  expandable-card/case-study-link thing the site does)?
- Which of the newly-captured facts from the content-refresh map actually
  belong on a CV vs. staying web-only detail? E.g. the Figma-to-UI bullet,
  the reusable CMS form system + admin dashboard charts bullet, and the
  updated tech tags (LangChain, RTK/Zustand, React Hook Form, Recharts,
  Storybook) are strong CV material — do all 13 new case studies need CV
  mentions, or just the highlights (pentest automation, AI call-center
  copilot, CMS/admin dashboard) with the rest left to the site?
- Skills section: `content/skills.ts` now carries a daily/used/learning
  proficiency signal across 5 categories (~50 items) — does the CV want the
  full list, a trimmed "daily driver" subset, or the old flatter grouping?
- Should Currently Learning / Personal Projects (now on `/skills` and
  `/showcase` respectively) get any CV presence, or are those web-only /
  too in-progress for a CV?
- Format/length constraint: what's the target page count (the old CV was
  presumably 1–2 pages) — that determines how aggressively the above needs
  condensing.

## Answer

- **Structure:** condense the 13 Inspigo case studies into grouped/themed
  bullets rather than listing each individually — a PDF can't do the site's
  expandable-card/case-study-link treatment.
- **Facts included:** broader selection — most case studies with real
  numbers/impact make the cut (IFB, Inspigo AI, pentest automation, AI
  call-center copilot, CI/CD, cloud infra, CMS, admin dashboard, SEO,
  analytics, video player). Skipped: Storybook and realtime chat (both
  stale/discontinued, weak to lead with on a live pitch doc).
- **Skills:** daily-driver subset only from `content/skills.ts` (the
  `level: 'daily'` items across all 5 categories) — full breadth stays on the
  site's Skills page.
- **Currently Learning / Personal Projects:** web-only, no CV presence — too
  in-progress for a print CV.
- **Page count:** 1 page.

**Deliverable written to `docs/cv-content.md`** — full Markdown draft, ready
for review. Contact info, education, and photo carried over unchanged from
the current `frontend-engineer.pdf` (not in any `content/*.ts` file, so
nothing to reconcile against the content-refresh work).

## Execution note (once grilled and closed)

1. Write the approved content to a new Markdown file — suggest
   `docs/cv-content.md` (retire `docs/cv_content_brainstorm.md`'s role as
   the "CV thinking" doc, or fold its still-relevant XYZ-format tip into
   the new file).
2. Get that Markdown reviewed/approved before touching the PDF.
3. Only then produce the updated `apps/portfolio/public/frontend-engineer.pdf`
   — by hand in whatever tool the user prefers (no automated md→pdf
   pipeline exists in this repo; don't build one unless asked).
