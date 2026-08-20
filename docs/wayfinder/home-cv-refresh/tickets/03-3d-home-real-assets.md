---
id: '03'
title: 'Replace 3D home scene primitives with real 3D assets'
type: grilling
status: open
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

The entire room in `apps/portfolio/components/scene/room-scene.tsx` (266
lines) is built from raw Three.js primitive geometries — `boxGeometry`,
`planeGeometry`, and similar, ~29 uses across the file — for every prop:
floor, walls, window, desk, monitor, lamp, bed, and chair. There are no
modeled assets anywhere in the repo (no `.glb`/`.gltf` files under `public/`,
no `useGLTF` calls) — it's a fully procedural low-poly room, not imported
art. `@react-three/drei` (`^10.7.8`) is already a dependency and ships
`useGLTF`, so loading real models needs no new package.

This ticket is about upgrading the _art_, not the room's IA/interactions —
[portfolio-revamp](../../portfolio-revamp/map.md) already locked the room's
existence, the "Two Lights" theme, and the avatar's pose-driven interactions
(sit/sleep/window/light-switch/discovery hint); none of that is reopened
here.

- Source: does real 3D asset work mean commissioning/buying models (a
  marketplace like Sketchfab/CGTrader/Kenney's asset packs), modeling them
  yourself, or generating them? This determines licensing constraints and
  turnaround time, and belongs in the Answer before any file work starts.
- Scope: replace every prop (floor/walls/window/desk/monitor/lamp/bed/chair)
  in one pass, or prioritize a subset first (e.g. the pieces the avatar
  directly interacts with — bed, chair, window, light switch — before
  background dressing like walls/floor)?
- Style continuity: the current room commits to a deliberate low-poly
  "Two Lights" aesthetic (see [portfolio-revamp ticket 06](../../portfolio-revamp/tickets/06-sitewide-visual-theme.md)
  and [ticket 03](../../portfolio-revamp/tickets/03-3d-room-art-direction.md))
  — do real assets need to match that low-poly style, or is this an
  opportunity to raise the art direction bar entirely (which would reopen
  that locked decision and needs an explicit call, same as ticket 01's
  hardcoding tradeoff)?
- Interaction rigging: swapping primitives for real models means the avatar's
  click targets, sit/sleep pose anchoring, and the light-switch hitbox all
  need to be re-anchored to the new geometry — is that back-compat trivial,
  or does it need re-tuning per asset?
- Performance/loading: real GLB assets add load time and a loading-state
  requirement that pure-primitive geometry never needed — `PerfMonitor`
  (room-scene.tsx:25) already exists for frame-rate degradation; does asset
  loading need its own fallback/skeleton state, and is there a budget (file
  size, draw calls, target device tier) to hit given
  [ticket 04's accessibility/SEO/reduced-motion fallback](../../portfolio-revamp/tickets/04-3d-accessibility-seo-fallback.md)
  requirements?
- Any assets already in hand (purchased, downloaded, modeled) to start from,
  or is sourcing itself part of this ticket's open work?

## Answer

(not yet captured)
