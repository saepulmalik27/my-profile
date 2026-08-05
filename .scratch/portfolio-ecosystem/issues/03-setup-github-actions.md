# 03 — Setup GitHub Actions (CI/CD Pipeline)

**What to build:** Automated CI/CD pipelines using GitHub Actions to run the code quality checks (lint, format, type-check) and Turborepo builds on every PR and Push to main.

**Blocked by:** 02 — Setup Code Quality & Git Hooks (Husky)

**Status:** ready-for-agent

- [ ] Create `.github/workflows/ci.yml`.
- [ ] Configure the action to checkout code, setup Node.js/pnpm, and install dependencies.
- [ ] Add steps to run `pnpm lint`, `pnpm type-check`, and `pnpm build` across the monorepo.
- [ ] Utilize Turborepo caching in GitHub Actions to speed up CI runs.
