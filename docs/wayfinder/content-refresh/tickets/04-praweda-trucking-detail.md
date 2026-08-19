---
id: '04'
title: 'Praweda — Trucking Management Application: capture project detail, challenges, and problems solved'
type: grilling
status: open
assignee: null
blocked_by: []
---

## Question

Split out of the combined `content/projects/shipyard-trucking.mdx` case study into its own deep dive — the Trucking Management Application with GPS tracking specifically:

- What did fleet coordination look like before real-time GPS tracking existed here (the current MDX says "coordinated without real-time visibility")?
- Walk through the GPS tracking + analytics piece concretely: what's the data pipeline (device → server → UI), how often does location update, what analytics were actually built (utilization, route efficiency, something else)?
- Was this greenfield or an existing system you maintained/improved (the current MDX says "maintained and improved")? If maintaining — what was the worst part of the existing system you inherited?
- Any concrete hard problem: real-time data at scale, map rendering performance, handling spotty GPS signal/offline trucks, etc.?
- Any numbers: fleet size tracked, update frequency, measurable operational improvement, timeline, team size?
- Anything screenshot-able, or fully inaccessible now?
