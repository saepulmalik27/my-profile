---
id: '17'
title: 'Inspigo — video player: capture project detail, challenges, and problems solved'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

- Custom-built player, or a wrapped library (video.js, Plyr, a hosted player like Mux, custom HLS)? What features — playback speed control, captions, watch-progress tracking, anti-piracy/download protection for paid course content?
- One concrete hard problem: e.g. adaptive bitrate/bandwidth handling, cross-browser/mobile playback quirks, accurately tracking watch progress for course-completion logic, preventing content piracy.
- Ownership, and rough scale — how many videos/hours of content does this serve?
- Numbers: video volume, buffering/load-time improvement you can point to, any completion-rate impact?
- Evidence: this is UI-facing and likely the most demo-able of the Inspigo items — is there a version you could screen-record or screenshot?

## Answer

**Build:** Wraps `react-player`, not built from scratch. Supports HLS adaptive streaming, playback speed control, and video quality control.

**Hard problem:** Wiring analytics into the player was very difficult at the outset.

**Ownership:** Took over an existing implementation from a legacy developer, rather than building it greenfield.

**Scale/impact:** Powers every video piece of content across Inspigo, and the player itself is a shared module/component reused across multiple Inspigo platforms — including Inspigo For Business and Inspigo AI.

**Evidence:** `apps/portfolio/public/project/video-player/` — `control-video-player.png`, `video-player-on-ifb.png`, `video-player.png`.
