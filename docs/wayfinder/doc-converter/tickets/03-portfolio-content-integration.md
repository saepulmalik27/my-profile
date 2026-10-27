---
id: '03'
title: Decide how apps/doc-converter accesses apps/portfolio's content for the export path
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

The dedicated export path needs `apps/doc-converter` to read content that currently lives inside `apps/portfolio` (`content/career.ts`, `content/skills.ts`, `content/projects/*.mdx`). Decide the integration boundary:

- **Shared workspace package**: pull the content layer out into a `packages/*` package both apps depend on (`workspace:*`), vs. having `apps/doc-converter` import directly across app boundaries (usually avoided in this kind of monorepo), vs. duplicating/syncing the data.
- Alternative: does `apps/doc-converter` instead fetch from the deployed `apps/portfolio` site at request time (e.g. hitting a small content API route) rather than importing anything at build time? Trade-offs vs. a shared package.
- **What's actually exportable**: settled by ticket 02 — both a per-case-study export (every `content/projects/*.mdx` file, individually selectable) and a Resume/CV export composed from `career.ts` + `skills.ts`. This ticket decides the access mechanism and, for the Resume/CV path, how that composition actually works — not whether it's in scope.
- **Coupling/versioning**: if content changes in `apps/portfolio`, does `apps/doc-converter` need a separate redeploy to pick it up, and is that acceptable?

## Answer

**Access mechanism: shared workspace package.** Extract `career.ts`, `skills.ts`, `types.ts`, and `content/projects/*.mdx` out of `apps/portfolio/content/` into a new `packages/content` (or similarly named) package, added as a `workspace:*` dependency of both `apps/portfolio` and `apps/doc-converter`. Chosen specifically because Vercel's per-app monorepo builds only reliably bundle an app's own directory plus its declared workspace packages — a direct cross-app filesystem read from `apps/doc-converter` into `apps/portfolio`'s directory isn't a safe bet at deploy time, and a runtime fetch against the live portfolio site was ruled out in favor of the simpler, build-time-typed package approach.

**Resume/CV export: freshly generated**, not a reuse of the existing static `public/frontend-engineer.pdf`. It's composed programmatically from the shared package's `career.ts` + `skills.ts` data at conversion time, so it always reflects current structured content rather than the separately-maintained static PDF. The static PDF is untouched and keeps serving its existing role in `apps/portfolio` (download link, source-of-truth note in `career.ts`) — this doesn't replace or resync it, it's a second, independently generated document. Exact layout/section composition is deferred to the "Specific PDF/DOCX layout details" item already in Not yet specified.

**Coupling: separate redeploy is acceptable.** This is consistent with the shared-package choice — since content is imported at build time, `apps/doc-converter` naturally needs a rebuild/redeploy to pick up portfolio content changes, and that's an accepted cost rather than something to engineer around (content changes are infrequent, per the recent content-refresh effort).
