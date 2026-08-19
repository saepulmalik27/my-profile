---
id: '10'
title: Define About & Contact page content and contact mechanism
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

Decide the content and structure for the combined About & Contact page:

- "About" narrative: does it tell the physics → fullstack (PHP/Java) → frontend/AI specialist journey described in `docs/portfolio_website_brainstorm.md`, and in what format (prose, interactive timeline, something else)?
- Contact mechanism: a contact form (needs a backend/email service decision), direct mailto/socials links only, or both. Note `app/page.tsx` currently has a placeholder `href="#"` for LinkedIn that needs a real link regardless.
- Resume: does this page host/replace the old `docs/ui-pages.md` `/resume` idea (view `public/frontend-engineer.pdf` inline, downloadable, or an HTML print-friendly version)?
- Whether this page is where the persistent AI chatbot widget (standing decision) gets any special/expanded placement, or it's identical to its treatment on every other page.

## Answer

**About narrative:** Interactive scroll-narrative with 3 milestones, animated in on scroll, per `docs/portfolio_website_brainstorm.md`'s pitch:

1. **Physics — IPB University (2013–2017).** Analytical foundation.
2. **Full Stack — PT Indocyber Global Technology (2018, trainee) → PT Praweda Sarana Informatika (2018–2021).** PHP (Laravel/CodeIgniter/CakePHP) + Vue.js; Shipyard Project Management System (end-to-end workflow); Trucking Management Application (GPS tracking + analytics).
3. **Frontend/AI Specialist — PT Inspigo Inovasi Indonesia (2021–present).** Next.js/React; Inspigo For Business (dynamic, customizable enterprise UI); Inspigo AI (OpenAI/Bedrock + RAG chatbot).

Source of truth for these facts: `public/frontend-engineer.pdf`. Final prose/copy authoring itself stays in the map's "Not yet specified" bucket (content authoring) — this answer fixes the _structure and facts_, not the final sentences.

**Contact mechanism:** Direct links only, no form, no email-service dependency:

- `mailto:saepulalmalik@gmail.com`
- `tel:+628527334546`
- LinkedIn: `https://www.linkedin.com/in/saepulmalik27` (real URL — fixes the current `href="#"` placeholder in `apps/portfolio/app/page.tsx`)
- GitHub: `https://github.com/saepulmalik27`

**Resume:** Download button + inline preview, both pointing at the existing `public/frontend-engineer.pdf` — no HTML print-friendly rebuild. This is the page that fulfills the old `docs/ui-pages.md` `/resume` idea; there's no separate `/resume` route in the new IA.

**Chatbot widget:** No special treatment on this page — identical floating-widget behavior everywhere, confirmed as an input (not a new decision) for ticket 12.
