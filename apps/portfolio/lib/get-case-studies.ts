import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

// Ticket 09: case studies stay MDX-only — this is the one place that reads
// their frontmatter, so both the Skills & Showcase listing and the Career
// cards' "read the case study" links use the same title, not a second
// hand-copied one that can drift.
export const CASE_STUDY_SLUGS = [
  'inspigo-for-business',
  'inspigo-ai',
  'inspigo-pentest-automation',
  'inspigo-ai-callcenter-copilot',
  'inspigo-cicd',
  'inspigo-storybook',
  'inspigo-cloud-infra',
  'inspigo-cms',
  'inspigo-admin-dashboard',
  'inspigo-video-player',
  'inspigo-analytics-tracking',
  'inspigo-seo',
  'inspigo-realtime-chat',
  'praweda-shipyard',
  'praweda-trucking',
] as const;

export type CaseStudySummary = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
};

export async function getCaseStudies(): Promise<CaseStudySummary[]> {
  return Promise.all(
    CASE_STUDY_SLUGS.map(async (slug) => {
      const filePath = path.join(
        process.cwd(),
        'content/projects',
        `${slug}.mdx`
      );
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const { data } = matter(fileContent);
      return {
        slug,
        title: data.title ?? slug,
        summary: data.summary ?? '',
        tags: Array.isArray(data.tags) ? data.tags : [],
      };
    })
  );
}
