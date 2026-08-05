# 02 — Setup Code Quality & Git Hooks (Husky)

**What to build:** A robust local DX and code quality setup for the monorepo. Ensuring all code is formatted, linted, and type-checked before committing.

**Blocked by:** 01 — Initialize Monorepo Foundation

**Status:** ready-for-agent

- [ ] Install Husky, lint-staged, Prettier, and ESLint at the root of the monorepo.
- [ ] Configure `lint-staged` to run ESLint, Prettier, and TypeScript (`tsc --noEmit`) on staged files.
- [ ] Add a `pre-commit` hook via Husky to trigger `lint-staged`.
- [ ] Ensure the configurations align with the latest documentation for Turborepo and Next.js.
