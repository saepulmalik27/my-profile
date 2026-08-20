---
id: '12'
title: 'Inspigo — CI/CD using GitHub Actions: capture project detail, challenges, and problems solved'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

- What pipelines exist — lint/typecheck/test on PR, build+deploy on merge, something else? Which repo(s)/app(s) does this cover (just the portfolio-style monorepo pattern, or Inspigo's actual product repos)?
- Was this greenfield (no CI existed before you built it) or improving something that already existed? What was the pain point before?
- One concrete hard problem: e.g. build/cache time in a monorepo, flaky tests blocking merges, secrets management across environments, matrix builds, environment-specific deploy targets.
- Ownership: sole builder, or part of a platform/DevOps effort with others?
- Numbers: build time before vs. after, deploy frequency change, how many pipelines/repos covered?
- Evidence: sanitized workflow YAML or pipeline screenshot shareable, or fully internal?

## Answer

**Pipelines:** Security audit, typecheck & test, and build + deploy. (The security-audit pipeline is the same one detailed in ticket 11 — see its Evidence section for the actual workflow YAML.)

**Before state:** No CI existed at all beforehand; even now only a handful of projects have it set up.

**Design decision:** These pipelines are deliberately _not_ run on every push — only on the production branch and when a version tag is cut. This keeps CI runs scoped to what's about to ship rather than firing on every commit.

**Ownership:** Built solo, working through the design by brainstorming with AI.

**Impact:** Faster build times; deploys become push-to-repo automated instead of manually SSHing into the server to run `pm2` commands. For serverless targets, audit and test steps run automatically as part of the same automation.

**Evidence:** The typecheck/test/build+deploy pipeline itself doesn't have a saved artifact yet — `public/project/ci/workflow.yml` turned out to be the security-audit workflow (ticket 11's), not this one. Open follow-up if a screenshot/YAML for the general pipeline becomes available later.
