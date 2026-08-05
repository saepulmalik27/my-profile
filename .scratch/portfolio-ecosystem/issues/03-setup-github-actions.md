# 03 — Setup GitHub Actions (CI/CD Pipeline)

**What to build:** Automated CI/CD pipelines using GitHub Actions to run the code quality checks (lint, format, type-check) and Turborepo builds on every PR and Push to main.

**Blocked by:** 02 — Setup Code Quality & Git Hooks (Husky)

**Status:** ready-for-agent

- [x] Create `.github/workflows/ci.yml`.
- [x] Configure the action to checkout code, setup Node.js/pnpm, and install dependencies.
- [x] Add steps to run `pnpm lint`, `pnpm type-check`, and `pnpm build` across the monorepo.
- [x] Utilize Turborepo caching in GitHub Actions to speed up CI runs.
