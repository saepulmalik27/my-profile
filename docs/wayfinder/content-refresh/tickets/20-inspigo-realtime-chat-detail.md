---
id: '20'
title: 'Inspigo — realtime chat (Agora + Firebase): capture project detail, challenges, and problems solved'
type: grilling
status: open
assignee: null
blocked_by: []
---

## Question

- What's this chat used for — live class Q&A, 1:1 mentor chat, community/cohort chat, something else? Why both Agora and Firebase — is Agora handling voice/video while Firebase Realtime Database handles the chat/messaging layer, or a different split?
- One concrete hard problem: e.g. message delivery reliability/ordering, presence/typing indicators, scaling to many concurrent users, keeping Agora call state and Firebase chat state in sync.
- Ownership, and rough scale — concurrent users, message volume?
- Numbers: concurrent users supported, latency figures, uptime?
- Evidence: is a demo or screen recording of the chat in action presentable, or fully internal?
