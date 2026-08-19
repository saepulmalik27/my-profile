---
id: '02'
title: Decide the 3D home scene's tech stack, control scheme, and asset pipeline
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: ['01']
---

## Question

Using the findings from ticket 01 (Research the R3F ecosystem), decide:

- Core libraries: React Three Fiber + which helpers (`drei`, physics engine or not, animation approach).
- Avatar control scheme: click-to-walk-to-point vs WASD/joystick vs pure hotspot-click (no free movement) — trades off "feels like a real room to explore" against build complexity.
- Asset pipeline: build custom low-poly models, buy/source from a marketplace, or commission — and the rigged-character approach specifically (Mixamo rig + custom low-poly mesh is the likely default).
- Rough performance budget (target triangle count, texture sizes, initial load size) consistent with the accessibility/perf fallback decided in ticket 04.

## Answer

**Core libraries:** React Three Fiber + `drei` (`KeyboardControls`, `useGLTF`, `useAnimations`), `THREE.Box3` bounding-box collision. No physics engine — `@react-three/rapier`/`cannon` skipped as overkill for a single room, per the ticket 01 research.

**Control scheme:** Click-to-walk — the visitor clicks a point or object in the room and the avatar walks there. Chosen over WASD/joystick (needs a separate mobile control scheme, more tuning to feel good in a small space) and hotspot-only (no exploratory feel). Works uniformly on desktop and touch.

**Asset pipeline:** CC0 packs per the research — Kenney "Furniture Kit" for room props (bed, desk, chair, sofa, window), Mixamo or Quaternius "Ultimate Modular Men Pack" for the rigged character. Fast, free, commercially safe, low-poly/stylized look. Not a custom-modeled/personalized character.

**Rough performance budget** (to be sharpened, not contradicted, by ticket 04's accessibility/perf fallback decision):

- Target ≤ 50k triangles for the whole scene (room + character).
- Texture atlases capped at 2048px, compressed (WebP/Basis via `gltfjsx --transform`).
- GLBs Draco-compressed; target ≤ 5–8MB total initial transfer for the scene assets, lazy-loaded client-side only (`next/dynamic({ ssr: false })` per the research findings) so it never blocks the rest of the page's TTI.
