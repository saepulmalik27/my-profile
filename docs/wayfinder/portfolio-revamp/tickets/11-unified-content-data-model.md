---
id: '11'
title: Define the unified content data model shared by the UI and the AI chatbot
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: ['08', '09', '10']
---

## Question

Per the map's standing decision, content moves out of hardcoded JSX (`app/page.tsx`) and the duplicated chatbot `SYSTEM_PROMPT` (`app/api/chat/route.ts`) into structured TS/JSON data files that are the single source of truth for both. Using the field/scope decisions from tickets 08 (Career), 09 (Skills & Showcase), and 10 (About & Contact), define:

- The actual data shape/schema (e.g. `content/career.ts`, `content/skills.ts`, `content/about.ts`) — types, not just a vague description.
- Where this lives in the repo (`apps/portfolio/content/` vs a shared package) and whether any of it should be MDX-backed vs plain TS/JSON, reconciling with ticket 09's case-study decision.
- How the chatbot's system prompt is generated from this same data (a serialization function, not a second hand-written bio).

## Answer

**Location & format:** Plain typed TS modules in `apps/portfolio/content/` (co-located with the existing `content/projects/*.mdx`, not a shared package — this data is portfolio-app-specific). TS over JSON to keep type safety and allow computed fields without a build/validation step.

**Files & shapes:**

```ts
// content/types.ts
export type CareerEntry = {
  id: string;
  role: string;
  company: string;
  startDate: string; // "2021-01"
  endDate: string | 'Present';
  topHighlight: string; // shown collapsed, per ticket 08
  achievements: string[]; // XYZ-format bullets
  techTags: string[];
  caseStudySlug?: string; // matches a content/projects/*.mdx slug, per ticket 09 — NOT the case study itself
};

export type SkillCategory = {
  id: string;
  name: string; // "Architecture & Concepts" | "AI Integration" | "Tools & Languages" | "Soft Skills"
  skills: string[];
};

export type AboutMilestone = {
  id: string;
  era: string; // "Physics" | "Full Stack" | "Frontend & AI"
  org: string;
  period: string;
  description: string;
};

export type ContactLink = {
  type: 'email' | 'phone' | 'linkedin' | 'github';
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string; // home hero description
  resumeUrl: string; // "/frontend-engineer.pdf"
};
```

- `content/profile.ts` — `Profile` (used by home hero, nav brand, About & Contact, and the chatbot).
- `content/career.ts` — `CareerEntry[]`, per ticket 08.
- `content/skills.ts` — `SkillCategory[]`, per ticket 09.
- `content/about.ts` — `AboutMilestone[]` + `ContactLink[]`, per ticket 10.
- Case studies remain `content/projects/*.mdx` (unchanged) — this model only references them by `caseStudySlug`, never duplicates their prose.

**Chatbot wiring:** `content/system-prompt.ts` exports `buildSystemPrompt()`, importing `profile`/`career`/`skills`/`about` and serializing them into the prompt text. `apps/portfolio/app/api/chat/route.ts` calls `buildSystemPrompt()` per request (module-level import, cheap to call — no need to cache), replacing the current hardcoded `SYSTEM_PROMPT` constant. This is the single source of truth both the UI and the chatbot read from ticket 11 onward.
