---
id: '07'
title: Decide site-wide navigation and layout shell across the 4 routes
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: ['06']
---

## Question

Using the visual theme from ticket 06, decide:

- Nav structure/placement: how does a persistent nav coexist with the full-bleed 3D canvas on `/` (transparent overlay, appears on scroll/interaction, hidden until user leaves the scene)? How does it look on `/career`, `/skills`, `/about` where there's no canvas?
- Mobile nav pattern (hamburger/drawer vs bottom nav vs simple stacked links).
- Footer: needed on all pages? What lives there (socials, resume link, copyright)?
- Page-transition behavior between routes (instant, fade, shared-element) given `framer-motion` is available.

## Answer

**Home nav behavior:** The nav (ticket 06's transparent-over-canvas primitive) is hidden on first load, alongside ticket 05's fading discovery hint. It fades in once the visitor interacts with the scene at all — not gated specifically on sitting in the chair — so it's available without competing with the room's first impression.

**Content pages (`/career`, `/skills`, `/about`):** Nav renders solid (`--color-surface` background, per ticket 06) and persistent at the top, since there's no canvas to protect there.

**Mobile nav:** Hamburger icon opening a full-height slide-out drawer with the 4 links, on the content pages. On mobile home, the same hidden-until-engaged behavior applies before any nav (hamburger included) appears.

**Footer:** Minimal single-line footer (socials, resume link, copyright) on `/career`, `/skills`, `/about` only — never on `/`, so the home page stays full-bleed.

**Page transitions:** Simple Framer Motion opacity crossfade (~200–300ms) between routes, matching ticket 06's "quiet by default" motion language. No shared-element/layout morphing.
