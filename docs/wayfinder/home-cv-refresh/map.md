---
label: wayfinder:map
tracker: local-markdown
---

# Home Headline & CV Refresh (Wayfinder Map)

## Destination

Three pieces of leftover work on the home page and the CV, gathered into one
map because they share an owner and a moment even though they're not one
story:

1. The home-page hero copy and the downloadable CV PDF
   (`apps/portfolio/public/frontend-engineer.pdf`) both still reflect the
   pre-refresh narrative, while `content/career.ts` and `content/skills.ts`
   were substantially rewritten in the recently-closed
   [content-refresh map](../content-refresh/map.md) — Figma-to-UI work, the
   CMS/admin-dashboard reusable form + chart system, LangChain, RTK/Zustand,
   Storybook, and 13 new case studies never made it into either place.
2. The 3D home scene itself (`components/scene/room-scene.tsx`) is still
   built entirely from raw Three.js primitive geometry — no real modeled
   assets exist anywhere in the repo.

This map closes those gaps: an updated home headline/highlight, an updated
CV whose content is drafted and reviewed as Markdown **before** anything
gets turned into a PDF, and a plan for swapping the room's primitive props
for real 3D assets.

**Status: open — not yet grilled.**

## Notes

- **Tracker:** no issue tracker configured for this repo — local-markdown
  fallback, same pattern as the two closed maps. This file is the map, each
  `tickets/NNN-slug.md` is a child ticket, claimed via `assignee:`, blocked
  via `blocked_by: [ids]` in frontmatter.
- **Source of truth for facts:** `apps/portfolio/content/career.ts` and
  `content/skills.ts` are current as of this map's creation — grill against
  what's actually in those files now, not what's in the live site's hero/CV,
  which is what's stale.
- **Home hero text is hardcoded, not content-driven:** `components/scene/home-experience.tsx`
  lines 74–83 and 87–93 hand-write the name/role/tagline and the
  chair-sit reveal blurb as literal JSX strings — the tagline text duplicates
  (and has drifted from) `content/profile.ts`'s `tagline` field rather than
  importing it. Ticket 01 should decide whether to keep hardcoding (matches
  this component's existing pattern/comments) or wire it to `content/profile.ts`
  — don't silently pick one without noting the tradeoff.
- **No markdown→PDF pipeline exists in this repo.** `public/frontend-engineer.pdf`
  is a static binary asset with no source file checked in — `docs/cv_content_brainstorm.md`
  is an old (Bahasa Indonesia) brainstorm doc, not a maintained CV source.
  Ticket 02 is explicit: draft the new CV content as a Markdown file first
  (this map's own deliverable), get it reviewed, and only then produce the
  actual PDF — by hand in whatever tool (Figma, Google Docs, a resume
  builder) the user prefers, since no automated conversion exists to build
  here. Don't invent a build pipeline nobody asked for.
- **Relationship to the closed maps:** the closed
  [content-refresh map](../content-refresh/map.md) is the direct source for
  every new fact tickets 01–02 need to fold in (case studies, skills,
  achievement bullets). The closed
  [portfolio-revamp map](../portfolio-revamp/map.md) locked the home page's
  page IA (3D scene, nav, layout) and the room's low-poly art direction —
  this map does not reopen the IA; ticket 01 only touches hero _copy_ inside
  the already-locked structure, and ticket 03 only touches asset _fidelity_
  (swapping primitive geometry for modeled assets) — unless ticket 03's
  grilling explicitly decides the art direction itself should be revisited,
  which would need the same kind of explicit call-out ticket 01 makes for
  its hardcoding tradeoff, not a silent scope creep.
- **`@react-three/drei` (`^10.7.8`) is already a dependency** and ships
  `useGLTF` — ticket 03 needs no new package to load real models.

## Decisions so far

(none yet — grilling not started)

## Tickets

- [Update home page headline/highlight](tickets/01-home-headline-refresh.md) — open
- [Update CV content (Markdown draft, then PDF)](tickets/02-cv-content-refresh.md) — open
- [Replace 3D home scene primitives with real 3D assets](tickets/03-3d-home-real-assets.md) — open

## Not yet specified

- Producing the actual updated PDF file — explicitly deferred until ticket
  02's Markdown draft is written and reviewed.
- Sourcing/producing the actual 3D asset files for ticket 03 — deferred
  until that ticket's grilling settles source, scope, and style questions.
