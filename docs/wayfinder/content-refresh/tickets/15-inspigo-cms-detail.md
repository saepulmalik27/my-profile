---
id: '15'
title: 'Inspigo — CMS (forms, media upload): capture project detail, challenges, and problems solved'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

- What content does this CMS actually manage? Is it a custom-built admin panel, or built on/integrated with a headless CMS platform? What form types does it handle — a dynamic form builder, or a fixed set of forms?
- One concrete hard problem: e.g. dynamic form schema and validation, rich media handling at scale, permissions/roles for content editors, draft/versioning support.
- Ownership: sole builder, or part of a team? Who are the end users — internal content team, or the enterprise clients themselves (ties into the Inspigo For Business per-tenant story)?
- Numbers: how many content types/forms supported, how many non-technical users rely on it, measurable time saved vs. whatever existed before (if anything)?
- Evidence: is a screenshot of the admin UI presentable (likely safe — no end-user PII), or is it off-limits?

## Answer

**Scope:** Custom-built CMS covering every content type across Inspigo — audio podcast content, video content, dynamic UI config for Inspigo For Business, learning paths, AI roleplay content, and payment/voucher/credit management, all as full CRUD. Built with React Hook Form + shadcn + Zod for forms, TanStack Table for the list/table views.

**Hard problem:** Consuming many different backend services, each with its own error format — validation and error handling had to normalize across inconsistent error shapes and inconsistent list/response shapes per service.

**Ownership:** Built with a team (not solo).

**Impact:** Major internal workflow efficiency gain — other Inspigo teams no longer need to go through engineering to update any product content; they self-serve through the CMS.

**Evidence:** `apps/portfolio/public/project/cms/` — `cms.png`, `drag-n-drop-form.png`, `form.png`, `table.png`.
