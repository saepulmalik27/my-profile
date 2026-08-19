---
id: '03'
title: Design the 3D room's art direction and lighting (moodier night-bedroom tone)
type: prototype
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

Per the map's standing decision, the home scene's moodier bedroom-at-night tone sets the new site-wide visual direction — so this scene needs real art direction, not a placeholder. Using `/frontend-design`, produce a concrete visual reference (mood board, palette, lighting study, or a rough R3F lighting sketch) for:

- Time-of-day / lighting baseline (night scene with monitor glow + desk lamp as key lights? warm vs cool palette?), and how it changes if the visitor turns the room light on/off.
- Color palette and material style (low-poly flat-shaded vs stylized-realistic textures) for the room and avatar.
- How the hero text (name, job title, description) is composited over the canvas — overlay HTML, in-scene 3D text, or a transition from overlay to full-canvas.
- How this palette/mood extends into the site-wide theme tokens that ticket 06 (site-wide visual theme) will formalize.

Link the resulting reference/prototype as the ticket's answer.

## Answer

**Prototype:** "Two Lights" mood board — https://claude.ai/code/artifact/5dc05b06-6230-498c-a491-ffb2a52851b4 (source: `two-lights-moodboard.html`, built via `/frontend-design`). Approved by the user as-is.

**Concept:** the room has exactly two default light sources — the desk lamp's warm amber and the monitor's cool cyan — and every other choice (palette, type, site-wide theme) is built around that duality rather than a generic single-accent dark mode.

**Lighting baseline:**

- **Night default:** only lamp (amber) and monitor (cyan) glow; walls/room in Ink Navy shadow.
- **Room light on:** a warm Paper-Warm flood désaturates both key lights — the deliberately "wrong"/practical state, not the default.
- **Window open:** Dusk Violet moonlight spills in as a third, borrowed rim light — never a key light.

**Palette (6 tokens):** Ink Navy `#12141F` (ground), Deep Indigo `#1F2438` (surfaces), Lamp Amber `#F2A65A` (warm key / primary accent), Monitor Cyan `#6FE2D6` (cool key / secondary accent), Dusk Violet `#4A5578` (window light / muted text), Paper Warm `#F5EDE0` (text on dark / flood state).

**Material style:** low-poly, flat/soft-shaded with baked gradient lighting (not PBR-realistic) — consistent with the Kenney/Mixamo/Quaternius CC0 asset decision in ticket 02. Emissive materials for the monitor screen and lamp bulb.

**Typography:** Fraunces (display, used sparingly for name/headline), IBM Plex Sans (body), IBM Plex Mono (utility — doubles as a diegetic "status log" reading out the room's own light/window state, tying directly into ticket 05's interactions).

**Hero text compositing:** headline text "boots" in monospace (terminal-style, echoing the monitor's glow) then settles into the Fraunces display face — an overlay-to-refined-identity transition, not raw in-scene 3D text or a static overlay.

**Site-wide extension (feeds ticket 06):** Ink Navy stays the base background on every page, not just home. Amber = primary accent for "human" content (About, contact, CTAs). Cyan = secondary accent for "technical" content (Skills, code, the chat widget). This replaces the old Bold & Colorful bento palette in `docs/portfolio_references.md` everywhere, not just on the 3D scene.
