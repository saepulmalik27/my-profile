---
id: '16'
title: 'Inspigo — Admin dashboard (charts, monitoring, statistics for clients): capture project detail, challenges, and problems solved'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

- What's actually shown — which metrics/charts, real-time or batch/aggregated? What charting library or approach?
- One concrete hard problem: e.g. performance with large datasets, real-time update mechanics, designing visualizations legible to non-technical enterprise clients, per-client data isolation (multi-tenant access control matters a lot here, given Inspigo For Business's per-tenant model).
- Ownership, and who actually consumes this — an internal ops/CS team, or the enterprise clients directly logging in to see their own stats?
- Numbers: how many clients/users rely on this dashboard, data volume handled, any load-time improvement you drove?
- Evidence: are the charts presentable anonymized/with fake data, or is this off-limits?

## Answer

**Scope:** Custom-built admin panel covering member management, organization management, member statistics, and a learning-path module — combines charts/monitoring with the management/CRUD side, built on React Hook Form + Zod (forms) and Recharts (stats), not a from-scratch component set.

**Hard problem:** Permissions/roles, driven by the backend's authorization model — a scope system attached to the JWT token rather than a simple role table.

**Ownership:** Built with the product team plus a dedicated backend engineer, user owned frontend.

**Numbers:** Went from no admin tooling to near-universal adoption — almost every client organization on Inspigo uses it, typically ~2 admins per org.

**Evidence:** `apps/portfolio/public/project/admin-dashboard/admin-dashboard.png`.
