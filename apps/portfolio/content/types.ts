// Ticket 11: the single content schema shared by the UI and the AI
// chatbot's system prompt (content/system-prompt.ts) — no more hardcoded
// bio text duplicated between app/page.tsx and app/api/chat/route.ts.

export type CareerEntry = {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string | 'Present';
  /** Shown when the card is collapsed (ticket 08). */
  topHighlight: string;
  /** XYZ-format bullets, per docs/cv_content_brainstorm.md. */
  achievements: string[];
  techTags: string[];
  /**
   * Matches slugs in content/projects/*.mdx (ticket 09) — case studies
   * stay MDX-only, never duplicated here. Omitted until those MDX files
   * actually exist, to avoid linking to a page that isn't there.
   */
  caseStudySlugs?: string[];
};

/** 'daily' = daily driver, 'used' = used on real work, 'learning' = actively picking up. */
export type SkillLevel = 'daily' | 'used' | 'learning';

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillCategory = {
  id: string;
  name: string;
  skills: Skill[];
};

export type AboutMilestone = {
  id: string;
  era: string;
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
  tagline: string;
  resumeUrl: string;
};
