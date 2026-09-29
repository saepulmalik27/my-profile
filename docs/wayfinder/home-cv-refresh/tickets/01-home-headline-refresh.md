---
id: '01'
title: 'Update home page headline/highlight'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

The home page hero (`apps/portfolio/components/scene/home-experience.tsx`,
lines 74–83) currently reads:

- H1: "Saepul Malik"
- H3: "Frontend Engineer"
- Tagline: "Senior Frontend Engineer bridging the gap between analytical
  Physics and cutting-edge web development."

And the chair-sit reveal (same file, lines 87–93) currently reads:

- "8 years bridging Physics, full-stack foundations, and a frontend/AI
  specialization — building enterprise-grade interfaces with React, Next.js,
  and RAG-powered AI features."

Both predate the content-refresh work — neither mentions any of the 13 new
case studies, the LangChain/RTK/Zustand/reusable-form-system work now in
`content/career.ts`'s Inspigo achievements, or anything from `content/skills.ts`.

- Does the H1/H3/tagline need to change at all, or is the headline still
  accurate and only the sit-reveal blurb (which is more detailed/current-work
  focused) needs updating?
- If the tagline changes: should it stay a single Physics→Frontend framing
  line, or should it work in something more specific (AI integration depth,
  the reusable-systems thread — CMS forms, admin charts, design system docs)?
- The sit-reveal blurb is the more detailed pitch a recruiter actually reads
  after engaging with the scene — what should it lead with now that there's
  a much bigger body of case-study evidence behind it? Does it need a
  case-study or Showcase-page pointer, or does the nav already handle that?
- Hardcoded vs. content-driven (see map Notes): the tagline text here has
  already drifted from `content/profile.ts`'s `tagline` field. Fix by wiring
  this component to `content/profile.ts` directly (so they can't drift
  again), or keep hardcoding here (matches the component's existing
  ticket-04 pattern of "always-present semantic HTML, not sourced from a
  content file") and just update both strings to match? Either is fine —
  just make the call and record it, don't let it drift silently again.
- Tone/length constraints: this renders over the 3D scene at up to 6xl font
  size for the H1 and needs to survive mobile widths (the wrapping
  `max-w-xl` on the tagline/blurb) — anything replacing the blurb needs to
  stay roughly the same length or shorter.

## Answer

**H1/H3 unchanged** — "Saepul Malik" / "Frontend Engineer" are still accurate identity strings, nothing to refresh there.

**Tagline** trades the pure Physics→Frontend framing for concrete AI/systems signal:

> Senior Frontend Engineer building AI-integrated interfaces and reusable systems for enterprise products.

**Sit-reveal blurb** broadens the highlight reel (no named case studies, no Showcase-page CTA added — the existing Download CV link is enough):

> 8 years bridging Physics, full-stack foundations, and a frontend/AI specialization — shipping AI-integrated interfaces, reusable design systems, and cloud-deployed products end to end.

**Data source:** wire `name`/`role`/`tagline` to `content/profile.ts` (already has the exact shape needed, no schema change) so the hero and CV/nav can't drift apart again. The sit-reveal blurb stays hardcoded in `home-experience.tsx` — it has no existing counterpart in any content file (nothing else duplicates it, so no drift risk), and it matches this component's ticket-04 "always-present semantic HTML" pattern. This is a deliberate split, not an oversight: identity fields (name/role/tagline) are shared with the CV/nav and get a single source of truth; the longer narrative blurb is presentation-only for this one component.
