---
id: '13'
title: 'Inspigo — project documentation using Storybook: capture project detail, challenges, and problems solved'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

- What's actually documented — a shared design system/component library, or per-app components? Roughly how many components/stories?
- One concrete hard problem: e.g. getting Storybook working with the app's specific setup (Next.js App Router, Tailwind theming, dynamic/SSR-only components), visual regression testing, keeping stories from drifting out of sync with the real components.
- Whose initiative was this, and who actually uses it day to day — just you, the whole frontend team, or also non-engineers (design handoff, QA)?
- Numbers: component coverage, team size using it, a concrete before/after (fewer UI inconsistencies, faster design handoff, fewer "how does this component work" questions)?
- Evidence: is there a running Storybook instance you could screenshot (even internally), or is it not presentable outside Inspigo?

## Answer

**Scope:** Documents the shared design system/component library — only components reused across multiple apps get a story, not every per-app component.

**Hard problem:** Keeping stories in sync with the real components as they evolved. This wasn't fully solved — maintenance overhead won, and Storybook here is no longer actively updated as of now.

**Ownership:** Own initiative, built and maintained solo.

**Coverage:** Nearly all cross-app shared components have stories, especially small primitives like buttons.

**Evidence:** Not presentable outside Inspigo — no screenshot/link available.

**Honesty note for the site copy:** this should read as "built and drove adoption of X," not "actively maintains" — it's since gone stale, and the copy shouldn't imply it's a live, current practice.
