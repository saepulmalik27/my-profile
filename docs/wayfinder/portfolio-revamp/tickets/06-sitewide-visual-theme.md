---
id: '06'
title: Design the site-wide visual theme (colors, typography, motion language)
type: prototype
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

Using `/frontend-design`, design the visual/theme system that replaces the current unused shadcn-default palette in `apps/portfolio/styles/color.css` and `theme.css`. This is the literal "use claude design" ask from the original brief. Cover:

- Color tokens (light/dark — or a single dark-first theme, given the moodier direction) informed by ticket 03's 3D room mood board.
- Typography scale/pairing (current: local Geist Sans/Mono via `next/font/local`).
- Motion language for non-canvas UI (Career/Skills/About pages) — is `framer-motion` (already a dependency of `@repo/ui`) still the animation approach, and what's the general feel (subtle/professional vs bold/playful)?
- Core reusable UI primitives needed beyond what `packages/ui` already has (`bento-grid`, `button`, `card`).

Link the resulting design/prototype as the ticket's answer — this feeds the Tailwind `@theme` tokens and `packages/ui` component styling.

## Answer

**Prototype:** "Two Lights Kit" — https://claude.ai/code/artifact/d3907023-43b2-42c1-8dc1-a2bb4d9746f1 (source: `two-lights-kit.html`, built via `/frontend-design`). Approved by the user, with the real logo (`apps/portfolio/public/assets/logo/logo.png`) added to the nav primitive at 28px alongside the wordmark.

**Color tokens:** Single dark-first theme, no light mode — formalizes ticket 03's palette as named Tailwind `@theme` tokens: `--color-ink` (`#12141F`, base background everywhere), `--color-surface` (`#1F2438`, cards/panels/nav), `--color-amber` (`#F2A65A`, primary accent — CTAs and "human" content), `--color-cyan` (`#6FE2D6`, secondary accent — technical content and live state), `--color-dusk` (`#4A5578`, dividers/muted text), `--color-paper` (`#F5EDE0`, primary text on dark). Radius is a deliberate `3px` everywhere (near-square, not the generic `rounded-lg`); elevation via hairline `1px` low-opacity borders, not shadows.

**Typography:** Fraunces (display, used sparingly), IBM Plex Sans (body), IBM Plex Mono (labels/data/eyebrows) — same three-face system as ticket 03, now with a concrete scale (H1 ~2.75rem, H2 ~2rem, H3 ~1.4rem italic-amber, body 1rem, mono labels 0.7–0.85rem).

**Motion:** Framer Motion stays the animation engine (already a `@repo/ui` dependency). "Quiet by default, a spark on contact": section reveals are calm springs (stiffness 120, damping 18, ~60ms stagger, fade + 16px rise, once-on-scroll) matching the existing bento-grid's character; hover/focus on actionable elements gets a 180–220ms glow (amber for actions, cyan for live/status). `prefers-reduced-motion` drops rise/spring everywhere, opacity fades only.

**New primitives beyond `bento-grid`/`button`/`card`:** nav bar (transparent-over-canvas, logo + wordmark + mono nav links), button variants (primary/secondary/ghost), tag/pill (mono, uncolored — color reserved for state/action not decoration), a Career entry card, a Skills & Showcase case-study card, and the floating chat launcher (amber body, cyan status dot).
