import { Button } from '@repo/ui/button';
import type { Metadata } from 'next';
import { CareerCard } from '../../components/career/career-card';
import { career } from '../../content/career';
import { contactLinks } from '../../content/about';
import { profile } from '../../content/profile';
import { getCaseStudies } from '../../lib/get-case-studies';
import { defaultOpenGraph, defaultTwitter } from '../../lib/seo';

const careerDescription =
  'Work history: eight years across full-stack foundations and a frontend/AI specialization.';

export const metadata: Metadata = {
  title: 'Career',
  description: careerDescription,
  alternates: { canonical: '/career' },
  openGraph: {
    url: '/career',
    title: `Career — ${profile.name}`,
    description: careerDescription,
    ...defaultOpenGraph,
  },
  twitter: {
    title: `Career — ${profile.name}`,
    description: careerDescription,
    ...defaultTwitter,
  },
};

export default async function CareerPage() {
  const email = contactLinks.find((link) => link.type === 'email');
  const caseStudies = await getCaseStudies();
  const caseStudyTitles = Object.fromEntries(
    caseStudies.map((study) => [study.slug, study.title])
  );

  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-28 md:px-10 md:pt-32">
      <header className="mb-12 max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          Career
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
          Eight years, three chapters.
        </h1>
        <p className="mt-4 text-foreground/70">
          Full-stack foundations, then a deliberate move into frontend
          engineering and AI integration. Each role below expands into the full
          detail — tech stack included.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href={profile.resumeUrl}>Download CV</a>
          </Button>
          {email && (
            <Button asChild variant="outline">
              <a href={email.href}>Get in touch</a>
            </Button>
          )}
        </div>
      </header>

      <div className="flex flex-col gap-4">
        {career.map((entry, index) => (
          <CareerCard
            key={entry.id}
            entry={entry}
            index={index}
            caseStudyTitles={caseStudyTitles}
          />
        ))}
      </div>
    </main>
  );
}
