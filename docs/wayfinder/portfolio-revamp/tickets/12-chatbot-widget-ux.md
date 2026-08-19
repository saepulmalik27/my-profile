---
id: '12'
title: Design the persistent AI chatbot floating widget
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: ['07', '11']
---

## Question

Per the map's standing decision, the existing "chat with my resume" bot (already working via Vercel AI SDK + `/api/chat`, currently a bento cell in `app/page.tsx`) moves to a persistent site-wide floating widget. Using the nav/layout shell from ticket 07 and the content model from ticket 11, decide:

- Widget placement and open/closed states (launcher button position, panel size, mobile behavior) and how it avoids colliding with the 3D canvas's own interaction area on `/`.
- Visual treatment consistent with the ticket 06 theme (currently `apps/portfolio/components/chat-box.tsx` uses a fairly plain message-list UI).
- Whether the system prompt now reads from ticket 11's structured content (replacing the hardcoded `SYSTEM_PROMPT` in `app/api/chat/route.ts`) — confirm this is purely a wiring change, not a new decision.
- Any state persistence across route navigation (does the conversation survive a page change, given it's no longer scoped to one page's component tree?).

## Answer

**Placement & visibility:** Fixed bottom-right launcher (ticket 06's primitive — amber body, cyan status dot), rendered in the root layout so it's present on every route including `/`. Unlike the nav (ticket 07), it's **always visible from first load**, even on the 3D home page — it's a distinct, always-available feature, not gated behind scene discovery. It sits outside the canvas's own click-to-walk hit area, so it never intercepts room clicks; opening it does not pause or interact with avatar state (sitting, sleeping, etc.) in any way — the two are independent.

**Panel behavior:** Closed = just the launcher button. Open, desktop = a fixed ~380×560px panel anchored above/near the launcher (detached from any page layout, unlike today's bento-cell `chat-box.tsx`). Open, mobile = expands to fill the screen, since a small popover is unusable on a phone.

**Visual treatment:** Restyled to the ticket 06 theme — `--color-surface` panel background, `--color-ink` message background, Plex Sans for message text, Plex Mono for timestamps/sender labels, amber for the user's own messages/send button, cyan accents for the assistant's messages (mirroring the amber/cyan "human vs. technical" split already established). Replaces the current plain message-list styling in `apps/portfolio/components/chat-box.tsx`.

**State persistence:** The chat's state (via `useChat` from `@ai-sdk/react`) lives in a provider mounted in the root layout — above the per-route pages — so the conversation survives navigating Home → Career → Skills → About without resetting.

**System prompt wiring:** Confirmed as pure wiring, not a new decision — `app/api/chat/route.ts` calls ticket 11's `buildSystemPrompt()` instead of the current hardcoded `SYSTEM_PROMPT` constant. No behavior change beyond the prompt now being generated from the single content source.
