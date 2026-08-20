---
id: '03'
title: 'Praweda — Shipyard Project Management System: capture project detail, challenges, and problems solved'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

Split out of the combined `content/projects/shipyard-trucking.mdx` case study into its own deep dive — the Shipyard Project Management System specifically:

- What was the process before this system existed (the current MDX says "manual, fragmented... tracked outside any single system") — what did that actually look like day to day, and who felt the pain?
- Walk through 1–2 concrete hard problems on this specific system — what part of "project intake through to completion" was the hardest to model or build? Any tricky domain logic (approval workflows, multi-stage status, role-based access across shipyard roles)?
- Stack specifics beyond the general "PHP (Laravel/CodeIgniter/CakePHP) + Vue.js" — which framework was used for _this_ system specifically, and why?
- What was your role — greenfield build, or maintaining/extending something that existed?
- Any numbers: users, project volume tracked, time saved vs. the old manual process, team size, timeline (within the 2018–2021 window)?
- Anything screenshot-able, or fully inaccessible now (job ended 2021)?

## Answer

**Before state:** Some tooling already existed, but it was scattered/fragmented, and part of the process was still manually recorded outside any system.

**Hard problems:** (1) Syncing manually-recorded data into the new system, and (2) driving actual field adoption of the new system among shipyard staff.

**Stack:** Laravel + Vue.js + PostgreSQL.

**Role:** Built from the ground up (greenfield).

**Impact:** Faster project record-keeping; all projects and warehouse inventory tracked centrally; inquiry and quotation processes now clearly logged in-system, closing off a prior avenue for fraud/manipulation.

**Numbers:** Not specified (users/team size/timeline) — open follow-up if it surfaces later.

**Evidence:** None — no longer accessible; role ended in 2021.
