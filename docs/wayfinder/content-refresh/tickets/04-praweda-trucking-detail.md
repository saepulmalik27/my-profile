---
id: '04'
title: 'Praweda — Trucking Management Application: capture project detail, challenges, and problems solved'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
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

## Answer

**Purpose:** Primarily built for management oversight — letting supervisors monitor whether drivers followed assigned routes, how long they parked at a given location, and which route was actually taken.

**Pipeline:** Device → server → UI (no further detail on device type or protocol).

**Role:** Maintaining an existing system, not greenfield.

**Hard problems:** (1) A very old, legacy codebase; (2) map rendering performance, since it relied on a third-party map provider; (3) cost efficiency — location updates were throttled to a fixed interval (ranging from every 5 minutes to every 15 minutes) rather than continuous tracking, to control data/API costs.

**Numbers:** Not specified (fleet size, timeline, team size) — open follow-up if it surfaces later.

**Evidence:** Not specified — likely inaccessible now given the maintenance-only role and job ending in 2021; treat as no evidence available unless the user provides it later.
