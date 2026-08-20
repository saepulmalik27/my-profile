---
id: '11'
title: 'Inspigo — n8n pentest automation workflow: capture project detail, challenges, and problems solved'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

- What specific workflows were built in n8n — list them. For the security/pentest automation specifically: what triggers it (schedule, CI hook, on-demand), what does Nuclei/OWASP ZAP actually scan (which targets/environments), and what happens to the results (alert, ticket filed, report generated)?
- Whose idea was this — your own initiative or a team/security ask? What gap did it fill — was this kind of scanning not happening at all before, or was it manual?
- One concrete hard problem: e.g. false-positive noise from ZAP/Nuclei, turning raw scan output into something actionable, handling auth so scans can reach authenticated routes, guardrails so an automated scan can't accidentally degrade staging/prod.
- The "POC project, prototype project" mention — what were those, roughly, and did any graduate from prototype into something actually relied on?
- Numbers: how many workflows exist, findings caught over time, run frequency, rough time saved vs. doing this manually?
- Evidence: is there anything shareable (an n8n workflow screenshot, a sanitized sample report), or is this fully internal/NDA?

## Answer

**Note:** the "AI call-center agent copilot" originally scoped into this ticket turned out to be a separate, substantial project — split out into [ticket 21](21-inspigo-ai-callcenter-copilot-detail.md). This ticket now covers the n8n **pentest automation workflow** only.

**Workflow:** Runs on a weekly schedule (n8n) against the **production** environment. Combines SCA/SAST (**Semgrep**, `pnpm audit`) with DAST (**Nuclei**, **OWASP ZAP**). Raw results are converted to Markdown and reformatted to the **OWASP standard report format using an AI model (OpenAI)**, then converted to a PDF document via an existing internal tool already running on the server, and delivered to **Rocket.Chat**.

**Origin:** Requested by the engineering manager — not a self-driven initiative.

**Hard problems:**

1. **Auth for scanning logged-in routes** — DAST currently only scans headers; hasn't reached full authenticated-route scanning yet.
2. **Service sprawl** — the product runs on microservices, so every product has its own dedicated service(s), multiplying the surface area that needs to be covered by the scan.

**Evidence:** Screenshot at `apps/portfolio/public/project/automation/pentest.png`. GitHub Actions side of the pipeline saved at `apps/portfolio/public/project/ci/workflow.yml` — "Weekly Security Audit": `cron: '0 0 * * 0'` + `workflow_dispatch` for manual runs; installs scoped to the target app (`pnpm install --filter business.inspigo.id...`); runs `pnpm audit` (SCA), Semgrep (SAST), Nuclei + OWASP ZAP Baseline (DAST) against `https://business.inspigo.id`, each step `continue-on-error` so one scanner failing doesn't fail the run; uploads raw JSON reports as a workflow artifact, then `curl -F` POSTs all four JSONs to the n8n webhook (`secrets.N8N_WEBHOOK_URL`) which does the OWASP-format conversion and Rocket.Chat delivery described above.
