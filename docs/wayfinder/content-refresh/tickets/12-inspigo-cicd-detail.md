---
id: '12'
title: 'Inspigo — CI/CD using GitHub Actions: capture project detail, challenges, and problems solved'
type: grilling
status: open
assignee: null
blocked_by: []
---

## Question

- What pipelines exist — lint/typecheck/test on PR, build+deploy on merge, something else? Which repo(s)/app(s) does this cover (just the portfolio-style monorepo pattern, or Inspigo's actual product repos)?
- Was this greenfield (no CI existed before you built it) or improving something that already existed? What was the pain point before?
- One concrete hard problem: e.g. build/cache time in a monorepo, flaky tests blocking merges, secrets management across environments, matrix builds, environment-specific deploy targets.
- Ownership: sole builder, or part of a platform/DevOps effort with others?
- Numbers: build time before vs. after, deploy frequency change, how many pipelines/repos covered?
- Evidence: sanitized workflow YAML or pipeline screenshot shareable, or fully internal?
