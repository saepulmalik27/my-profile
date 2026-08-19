---
id: '01'
title: Research the R3F ecosystem for a walkable-room, interactive-object scene
type: research
status: closed
assignee: null
blocked_by: []
---

## Question

Survey the three.js / React Three Fiber ecosystem for building a small walkable-room scene with a rigged, animated avatar and clickable interactive objects (window, bed, chair, light switch). Cover:

- Character-controller options for click-to-walk or WASD movement in R3F (e.g. `@react-three/drei`'s helpers, `ecctrl`, custom raycast-to-navmesh approaches).
- Physics/collision needs: is a physics engine (rapier, cannon-es) actually necessary for this scene, or is simple bounding-box/navmesh logic enough?
- Rigged character animation: how to get/animate a low-poly rigged human (Mixamo-exported FBX/GLTF + `@react-three/drei`'s `useAnimations`), and realistic effort to get a "sit in chair" / "lie on bed" pose working.
- Asset sourcing options for a low-poly bedroom (desk, monitor, chair, bed, sofa, window) and a rigged character — free/cheap marketplaces (Sketchfab, Kenney, Quaternius, Mixamo), typical license terms, and realistic file sizes for web delivery.
- Loading/perf patterns for R3F scenes in Next.js App Router (code-splitting the canvas, `<Suspense>` + `useGLTF.preload`, draco/meshopt compression).
- Any well-known reference implementations or tutorials of a similar "3D room portfolio" concept worth studying.

Produce a findings summary (with links) that ticket 02 (deciding the tech stack, control scheme, and asset pipeline) can act on directly.

## Answer

Full findings, with primary-source citations (official docs, npm registry, GitHub API — fetched live, not secondhand blog summaries): `docs/wayfinder/portfolio-revamp/research/3d-ecosystem-findings.md` on branch `research/3d-ecosystem-portfolio` (commit `5f151e7`).

Headline recommendations feeding ticket 02:

1. **Character controller:** `drei`'s `KeyboardControls` (WASD) driving a hand-rolled walk loop. Skip `ecctrl` — well-maintained but hard-requires Rapier, overkill for one room.
2. **Physics:** not needed. `THREE.Box3` bounding-box checks per prop instead of `@react-three/rapier`/`@react-three/cannon` — `cannon-es` is effectively stale (no push since Jan 2024).
3. **Rigged animation:** upload the character mesh to Mixamo's auto-rigger so every clip shares one skeleton (avoids retargeting pain); blend via `drei`'s `useAnimations` + three.js `AnimationAction.crossFadeTo`; skip runtime IK, use canned sit/sleep clips.
4. **Assets:** Kenney "Furniture Kit" (CC0) for bed/desk/chair/sofa; Mixamo or Quaternius "Ultimate Modular Men Pack" (CC0) for the rigged character; Sketchfab only with a per-model license check (Standard vs Editorial tiers).
5. **Loading/perf:** a `"use client"` Canvas component lazy-loaded via `next/dynamic({ ssr: false })` from a Server Component page (`ssr:false` errors inside Server Components directly per Next.js 16 docs); `Suspense` + `useGLTF.preload`; compress GLBs via `gltfjsx --transform` (Draco + WebP + prune).
6. **References:** `brunosimon/folio-2019` (MIT) as the primary study target — the best-known walkable 3D portfolio; `mohsen-ameli/my-room` and `VinayMatta63/threejs-portfolio` as closer-scoped single-room R3F examples; Wawa Sensei tutorials as a secondary how-to reference.
