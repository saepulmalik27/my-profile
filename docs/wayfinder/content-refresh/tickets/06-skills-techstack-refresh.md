---
id: '06'
title: 'Refresh Skills & Techstack content'
type: grilling
status: open
assignee: null
blocked_by: []
---

## Question

`content/skills.ts` currently has four flat categories (Architecture & Concepts, AI Integration, Tools & Languages, Soft Skills) with no proficiency signal. Now that tickets 01–05 have surfaced the real tech used per project, reconcile:

- Anything in `content/skills.ts` that's aspirational/not actually used in production work, and anything genuinely used (surfaced in tickets 01–05, e.g. specific vector DB, specific state-management library) that's missing from the list?
- Should skills carry any proficiency/recency signal (e.g. "daily driver" vs. "used on one project" vs. "learning"), or stay a flat tag list — recruiters often weight recency and depth, not just presence on a list?
- The AI Integration category is thin (3 items) relative to how much of the Inspigo AI narrative leans on it — does grilling ticket 02 surface anything (specific RAG/vector-store tooling, prompt-eval approach) that belongs here?
- Any tools/languages that are stale and should be dropped (e.g. CakePHP/CodeIgniter — still worth listing given Praweda history, or noise for a frontend-focused audience)?
