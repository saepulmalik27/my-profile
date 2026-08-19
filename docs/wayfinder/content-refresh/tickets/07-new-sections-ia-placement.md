---
id: '07'
title: 'Decide site IA placement for Currently Learning / Personal Projects / Courses'
type: grilling
status: open
assignee: null
blocked_by: []
---

## Question

None of "Currently Learning," "Personal Projects," or "Courses" exist in `content/types.ts` or anywhere in the site IA today. Before capturing their content (tickets 08–10), decide the shape:

- Do these live as new subsections on an existing route (About & Contact, or Skills & Showcase), a new dedicated route, or some combination (e.g. Personal Projects folds into Skills & Showcase's "Case studies" grid alongside the employer projects, while Currently Learning + Courses become a small "Now" block on About)?
- Personal Projects in particular ties directly to the `docs/recruiter-feedback.md` gap that GitHub is linked but shows no evidence of what's there — should this section link out to specific repos, embed anything (README excerpt, stars/activity), or just name+describe+link?
- Data shape: does each need its own typed array in `content/types.ts` (mirroring `CareerEntry`/`SkillCategory`), or is this closer to free-form content (Personal Projects as more MDX case studies, reusing the existing `content/projects/` pattern instead of a new type)?
- Is Courses collapsed into "Currently Learning" (a course in progress is a form of currently-learning) with a separate list only for _completed_ courses/certifications, or are these three genuinely distinct lists?

Use `/domain-modeling` if the shape isn't obvious after a first pass — this is the one ticket in this map that's partly a schema decision, not pure content capture.
