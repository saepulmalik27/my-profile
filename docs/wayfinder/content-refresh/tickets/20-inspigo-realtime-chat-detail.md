---
id: '20'
title: 'Inspigo — realtime chat (Agora + Firebase): capture project detail, challenges, and problems solved'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

- What's this chat used for — live class Q&A, 1:1 mentor chat, community/cohort chat, something else? Why both Agora and Firebase — is Agora handling voice/video while Firebase Realtime Database handles the chat/messaging layer, or a different split?
- One concrete hard problem: e.g. message delivery reliability/ordering, presence/typing indicators, scaling to many concurrent users, keeping Agora call state and Firebase chat state in sync.
- Ownership, and rough scale — concurrent users, message volume?
- Numbers: concurrent users supported, latency figures, uptime?
- Evidence: is a demo or screen recording of the chat in action presentable, or fully internal?

## Answer

**Scope:** Used for live-class Q&A and community chat. Agora handles WebRTC (voice/video); Firebase stores user-behavior analytics.

**Hard problem:** Cross-device/cross-browser compatibility — built in 2022, when `getUserMedia` and audio/video support weren't consistently available across devices/browsers yet.

**Ownership:** Built with a team.

**Impact/timing:** High usage at the time — built during the pandemic when livestreaming-driven products were in very high demand.

**Status:** This feature has since been taken down from the Inspigo product and no longer exists — site copy should frame it in past tense as a discontinued feature.

**Evidence:** None available — feature is gone, no screenshot/recording surfaced.
