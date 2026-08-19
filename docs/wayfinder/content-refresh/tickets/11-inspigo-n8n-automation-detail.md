---
id: '11'
title: 'Inspigo — n8n automation workflows (incl. security automation): capture project detail, challenges, and problems solved'
type: grilling
status: open
assignee: null
blocked_by: []
---

## Question

- What specific workflows were built in n8n — list them. For the security/pentest automation specifically: what triggers it (schedule, CI hook, on-demand), what does Nuclei/OWASP ZAP actually scan (which targets/environments), and what happens to the results (alert, ticket filed, report generated)?
- Whose idea was this — your own initiative or a team/security ask? What gap did it fill — was this kind of scanning not happening at all before, or was it manual?
- One concrete hard problem: e.g. false-positive noise from ZAP/Nuclei, turning raw scan output into something actionable, handling auth so scans can reach authenticated routes, guardrails so an automated scan can't accidentally degrade staging/prod.
- The "POC project, prototype project" mention — what were those, roughly, and did any graduate from prototype into something actually relied on?
- Numbers: how many workflows exist, findings caught over time, run frequency, rough time saved vs. doing this manually?
- Evidence: is there anything shareable (an n8n workflow screenshot, a sanitized sample report), or is this fully internal/NDA?
