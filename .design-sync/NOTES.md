# design-sync notes

## Fixes

- `@repo/ui` ships raw `.tsx` source, no build script, no `dist/`, and its `exports` map has no `.` (root) entry — only per-file subpath exports (`@repo/ui/button`). Added `packages/ui/src/index.ts` (barrel: `export * from './button'`, scoped to Button only per current sync scope) and `packages/ui/package.json`'s `"types": "src/index.ts"` field so the converter's ts-morph export scan (which looks for `pkgJson.types`/`typings`, defaulting to `index.d.ts`) can find the export surface. Without `types` set, `exportedNames()` parses 0 files and every component gets dropped as `[TITLE_UNMAPPED]`. `--entry packages/ui/src/index.ts` is also required on every build (recorded as `cfg.entry`) since there's no dist to auto-resolve.
- `[GENERAL]` `cfg.storybookConfigDir` must be the `.storybook/` directory itself (`apps/storybook/.storybook`), not its parent app dir. Setting it to `apps/storybook` silently broke story-source resolution (`resolveStorySources` computes `dirname(sbDir)` as a base for resolving `index.json`'s `importPath`s — one level off meant every story file failed to resolve, giving a false "0/0 stories paired" with no hard error).
- `[GENERAL]` **Real repo bug, not a design-sync issue**: `apps/storybook/src/index.css` had `@source "../../packages/ui/src";` — only two `..` segments, which resolves to `apps/packages/ui/src` (doesn't exist) since `packages/` lives at the repo root, not under `apps/`. Tailwind v4 silently generated zero utility classes for anything in `packages/ui/src` as a result — **this means the component's real, live Storybook (`pnpm storybook`) was also rendering completely unstyled buttons before this fix**, not just the design-sync preview. Fixed to `@source "../../../packages/ui/src";` (three `..`) and rebuilt the reference storybook to confirm — Tailwind now emits `.bg-primary`, `.rounded-md`, etc. (CSS asset went from 7KB → 15KB, tokens referenced 18 → 58). Worth a heads-up to the team since it affects the real dev experience, independent of this sync.

## Scope

- Only `Button` is synced (packages/ui also has `Card`, `Code`, `BentoGrid` but none have Storybook stories yet — user chose "sync Button only" over adding stories for the rest, 2026-08-19). `Card`/`Code` are unused Turborepo starter boilerplate (dead template code, not used anywhere in `apps/portfolio`). `BentoGrid` is real (used in the portfolio) but has no story — worth adding a story for it in a future pass if it should be in the design system.
- `apps/portfolio/components/**` (nav, career cards, chat widgets, 3D scene) are the site's real richer UI but live as page-local Next.js components, not an exported package — out of scope for this sync shape.

## Re-sync risks

- If `packages/ui/src/index.ts` or `packages/ui/package.json`'s `types` field is reverted/removed, the next sync will silently drop all components again as `[TITLE_UNMAPPED]` with no fatal error — watch for `exported PascalCase symbols: 0` in the build log.
- If Card/Code/BentoGrid stories are added later, `packages/ui/src/index.ts` needs those exports added too (currently only re-exports `./button`).
