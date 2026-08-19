# Recruiter Review — Portfolio Site (saepulmalik.dev)

**Persona:** Tech recruiter sourcing for Web Developer / Frontend Engineer / Fullstack Engineer roles.
**Reviewed:** 2026-08-19. Pages checked: Home (3D scene), Career, Skills & Showcase, About & Contact, AI chat widget, resume PDF link. Content source: `content/*.ts`, `content/projects/*.mdx`, live render at `localhost:3000`.

## Verdict

**Yes — I'd move this candidate to a recruiter screen for Frontend or Fullstack roles.** The site itself is doing double duty as a work sample: a custom Three.js/R3F scene, a RAG-flavored AI chat widget grounded in the candidate's own content, and clean case-study writing are stronger signals than 90% of portfolios I see. 8 years, consistent progression, and a differentiated AI-integration angle (OpenAI + Bedrock + RAG) match what clients are asking for right now.

That said, **I would not be able to submit this candidate to a client yet** — a few pieces of information every intake call starts with are missing from the site, and I'd have to chase them down manually before a submission. Those are the tickets below.

## What's working (keep this)

- **The site is the work sample.** A hiring manager for a frontend role will judge the _site's own engineering_ as much as the résumé text. The 3D room, the streaming AI chat, and the Framer Motion polish all read as senior-level frontend craft.
- **Clear narrative arc.** Physics → full-stack (PHP/Laravel/Vue) → frontend/AI specialist at Inspigo reads as a deliberate specialization, not a scattershot resume. This is a good story for a recruiter to repeat to a hiring manager in one sentence.
- **AI integration experience is a genuine differentiator.** RAG pipeline, OpenAI + Bedrock, streaming UX — this is exactly the "have they actually shipped AI features, not just used ChatGPT" signal clients ask me to filter for.
- **Case studies are structured well** (Problem → Architecture → Execution → Impact) — this format alone puts the candidate ahead of the "list of bullet points" norm and shows they can communicate technical decisions, which matters more at senior levels.
- **No employment gaps, one clear current-employer chain, reputable local university (IPB).**

## Gaps that block a submission (fix these first)

1. **No location, timezone, work authorization, or relocation/remote preference anywhere on the site.** This is usually the _first_ filter a recruiter or ATS applies, especially for remote/international roles, and it's absent from Home, About, Career, and the résumé link context. Right now the only hint is the `+62` phone number.
2. **No availability signal.** Open to opportunities or not? Notice period? Contract vs. full-time? Remote / hybrid / onsite preference? Without this I can't tell a client whether this person is even reachable.
3. **Job title inconsistency.** The hero tagline says _"Senior Frontend Engineer"_ (`content/profile.ts`), but the actual title held at the current employer (Inspigo, 2021–present) is listed as _"Frontend Engineer"_ everywhere else (`content/career.ts`, the Career page card). A recruiter cross-checking site copy against LinkedIn/CV will flag this as title inflation even if unintentional — pick one and use it consistently.
4. **No quantified impact anywhere.** Every achievement is qualitative — "built," "created," "integrated," "maintained" — with zero numbers. No latency figures, user/client counts, performance deltas, or team size in any of the three career entries or three case studies. This is the single biggest lever for a senior-level submission; hiring managers scan for numbers first.
5. **Case studies have no visuals.** Inspigo For Business, Inspigo AI, and the Shipyard/Trucking systems are all private enterprise products with no public URL — which makes screenshots, GIFs, or a short demo video the _only_ available proof of the actual UI work. Right now all three case studies are text-only.
6. **GitHub is linked but shows no evidence of what's there.** For a candidate whose paid work is entirely closed-source, the GitHub link matters more, not less — right now it's just a bare URL with no indication of pinned/personal projects, OSS contributions, or code samples a hiring manager could actually open.
7. **AI chat widget can't answer the questions above either.** I tried the obvious recruiter questions ("is he open to remote roles," "what's his notice period") — the system prompt (`content/system-prompt.ts`) is generated from the same content files, so it has no location/availability data to draw from and just deflects to "contact him directly." Once items 1–2 are added to the content files, this gets fixed for free since the prompt is auto-generated.

## Nice-to-haves (would strengthen, not blocking)

- No certifications listed despite claiming Bedrock/LLM integration work — an AWS certification (if held, or in progress) would reinforce that claim.
- No testimonials, LinkedIn recommendations, or manager quotes.
- The 3D room loads pitch-black by default (`components/scene/home-experience.tsx`) until the visitor clicks "Light up the room." It's a genuinely nice interaction once discovered, but a recruiter skimming a dozen portfolios in a browser tab may bounce off an apparently-blank screen before finding the hint text. Consider a low ambient light by default so content reads as present immediately, with the toggle as an enhancement.

## Tickets to file

| #   | Ticket                                                                                                                                              | Files likely touched                                 |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 1   | Add location, work authorization, and remote/relocation preference to About & Contact                                                               | `content/about.ts`, `content/types.ts`               |
| 2   | Add availability status (open to work, notice period, contract/FTE, remote/hybrid/onsite)                                                           | `content/profile.ts` or `content/about.ts`           |
| 3   | Resolve title mismatch: "Senior Frontend Engineer" (tagline) vs. "Frontend Engineer" (career entry)                                                 | `content/profile.ts`, `content/career.ts`            |
| 4   | Add quantified metrics to career achievements and case-study "Impact" sections                                                                      | `content/career.ts`, `content/projects/*.mdx`        |
| 5   | Add screenshots/GIFs (or a short demo video) to each case study                                                                                     | `content/projects/*.mdx`, `public/assets/`           |
| 6   | Surface concrete GitHub evidence — pinned personal projects, OSS contributions, or a "code samples" note if most work is NDA'd                      | `content/about.ts` or a new `content/projects` entry |
| 7   | List certifications held or in progress (esp. AWS, given Bedrock claims)                                                                            | `content/skills.ts` or `content/about.ts`            |
| 8   | Default the home 3D scene to a lit/visible state on load; keep the light toggle as a bonus interaction                                              | `components/scene/home-experience.tsx`               |
| 9   | Once #1–2 land in content files, verify the AI chat widget can answer location/availability questions (should be automatic via `buildSystemPrompt`) | `content/system-prompt.ts` (verify only)             |

Priority order for a recruiter's purposes: **1 → 2 → 3 → 4**, then 5–7. Item 8 is cosmetic but cheap to fix and affects first impressions the most.
