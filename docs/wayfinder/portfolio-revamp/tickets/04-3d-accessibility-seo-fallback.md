---
id: '04'
title: Decide accessibility, SEO, and low-end/mobile fallback strategy for the 3D home page
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

The home page is a canvas-first experience with no crawlable text and real performance risk on mobile/low-end devices. Decide:

- What a screen-reader user or a user with `prefers-reduced-motion` gets instead of/alongside the 3D scene.
- What search engines / social-share previews see for `/` (static hero markup behind the canvas, dedicated meta tags, OG image, etc.).
- What happens on mobile and low-end/low-GPU devices: a lighter-weight scene, a static image/video fallback, or the full scene at reduced fidelity — and how that's detected (viewport/UA sniffing vs WebGL capability probing vs a manual toggle).
- Rough performance targets (Lighthouse/Core Web Vitals expectations) given a heavy canvas on the landing page.

## Answer

**Accessibility:** The canvas is treated as decorative/supplementary, never the sole carrier of content. Real, always-present semantic HTML (name, title, description, nav) sits behind/under the canvas in the DOM — visually arranged so sighted users see the 3D scene, but fully readable by screen readers and fully static (no motion) regardless of device. No separate text-only mode/route — one DOM serves both. `prefers-reduced-motion` disables avatar idle animation, camera drift, and any ambient motion in the scene; the room can remain visually present but static rather than animating.

**Low-end/mobile fallback:** No UA-sniffing. A capability probe (WebGL support check + a quick GPU/perf heuristic, e.g. a short warm-up frame-time sample) picks a quality tier that drops shadow quality, texture resolution, and device pixel ratio on weak devices — everyone still gets the real, interactive scene, just at lower fidelity. No static-image/video fallback tier.

**SEO:** Search engines and social crawlers index the same static semantic HTML from the accessibility decision above (it's real DOM content, not JS-only), not the canvas. A separate, pre-rendered static image of the room (not a live screenshot) is set as the Open Graph / Twitter Card image via Next.js `generateMetadata`.

**Rough performance targets:** Lighthouse Performance ≥ 80 on mobile / ≥ 90 on desktop for `/`, despite the canvas — achieved by keeping the 3D bundle client-only and code-split (per ticket 02's `next/dynamic({ssr:false})` approach) so it never blocks First Contentful Paint or Time to Interactive of the underlying semantic HTML. Largest Contentful Paint target ≤ 2.5s on a mid-tier mobile device, measured against the semantic hero text (not the canvas), since that's what actually gates the metric once the canvas is excluded from the critical path.
