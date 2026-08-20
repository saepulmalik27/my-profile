---
id: '18'
title: 'Inspigo — analytics/tracking (Google Tag Manager, Google Analytics, MoEngage): capture project detail, challenges, and problems solved'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

- What's actually tracked — which events, funnels, or user journeys? Is this GTM/GA tag setup that feeds real product/marketing decisions, or closer to base instrumentation?
- One concrete hard problem: e.g. GTM tag governance across a multi-tenant product (do different enterprise clients need different tracking?), consent/privacy compliance, wiring MoEngage to trigger push/email campaigns off real user behavior.
- Ownership: solely responsible for the analytics/martech stack, or supporting a separate marketing/growth team's requests?
- Numbers: events/funnels tracked, campaigns enabled via MoEngage, any measurable business impact (retention, engagement lift) you can point to?
- Evidence: analytics dashboards are usually internal — confirm, or note anything presentable.

## Answer

**Scope:** Events, user journeys, and campaigns wired through GTM — Google Analytics and Facebook Pixel both routed through GTM. MoEngage handles campaign triggering. User-journey tracking specifically leans on MoEngage plus an in-house **inspigo-telemetry** system, which is easier to work with for that purpose than raw GTM/GA.

**Hard problem:** Not specified by the user in this pass — open follow-up if it comes up later.

**Ownership:** Full owner of this stack.

**Impact:** Drives retention/engagement analysis and user-journey visibility to gauge product impact, plus early error detection.

**Evidence:** `apps/portfolio/public/project/gtm/` — `gtm-dashboard.png`, `sample.png`.
