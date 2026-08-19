---
id: '05'
title: Specify the behavior and feedback for each of the 5 avatar interactions
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

For each of the 5 requested interactions, pin down exact behavior so it's buildable:

- **Walk/move**: how the visitor directs movement (see ticket 02 for control scheme) and what's walkable vs blocked.
- **Open/close window**: visual effect (light change, curtain movement, ambient sound?) and whether it's a toggle or has intermediate states.
- **Sleep on bed**: what triggers it (walk to bed + click?), what happens on screen (camera behavior, does the scene dim/pause, is there an idle/easter-egg moment), and how the visitor exits the state.
- **Turn room light on/off**: which light(s) it affects, and how it interacts with the ticket 03 lighting design (does off = fully dark, or does monitor glow remain as the only light source).
- **Sit on chair**: does this trigger a "coding" idle animation, and does sitting relate to any content reveal (e.g. this is where the visitor "finds" the portfolio content, monitor screen shows something)?

Also decide: is there an explicit call-to-action guiding first-time visitors to try these interactions, or is discovery purely exploratory?

## Answer

**Walk/move:** Click-to-walk per ticket 02 — visitor clicks a point on the floor or an interactive object and the avatar paths there. Walkable area is the open floor; furniture (bed, desk, sofa) and walls block movement via the `Box3` collision from ticket 02. Clicking an interactive object (window, bed, chair, light switch) walks the avatar to the right spot _and_ triggers that object's interaction on arrival — no separate "walk near it, then click again" step.

**Open/close window:** Toggle (not intermediate states). On open: dusk-violet moonlight spills in and the curtain sways gently, matching ticket 03's lighting design — no ambient sound, to avoid autoplay/mute complexity on a professional portfolio. Closing reverses both.

**Sleep on bed:** Walking to the bed and clicking it lies the avatar down; screen dims slightly and a short, light-hearted line appears (mono type, per ticket 03 — e.g. a wink about needing rest after years of shipping code). Self-exits automatically after a few seconds, or immediately on any click/key — no explicit "wake up" UI needed. Playful easter egg, not a sustained state.

**Turn room light on/off:** Affects the single overhead room light. Off (default) = only lamp amber + monitor cyan glow, per ticket 03's "Two Lights" baseline — never fully dark. On = the Paper-Warm flood désaturates both key lights, exactly as prototyped in ticket 03's mood board.

**Sit on chair:** This is the primary interaction — walking to the desk and sitting plays a coding idle animation _and_ triggers the portfolio's content reveal: the monitor screen lights up with the hero content (name/role) and a way into Career/Skills/About & Contact. Sitting is the natural on-ramp from "explore the room" into "read the portfolio," not just a pose.

**Discovery / first-time guidance:** A small, unobtrusive mono-styled hint (e.g. "try clicking around the room") appears on load, matching ticket 03's terminal-boot type motif, and fades out after the first interaction or a few seconds — helps non-gamer visitors (recruiters) who might not think to click into a 3D scene, without cluttering the view long-term.
