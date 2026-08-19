import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '../../components/ui/reveal';
import { profile } from '../../content/profile';
import { skillCategories } from '../../content/skills';
import { getCaseStudies } from '../../lib/get-case-studies';
import { defaultOpenGraph, defaultTwitter } from '../../lib/seo';

const skillsDescription =
  'Technical skills grouped by category, plus a few case studies worth a closer look.';

export const metadata: Metadata = {
  title: 'Skills & Showcase',
  description: skillsDescription,
  alternates: { canonical: '/skills' },
  openGraph: {
    url: '/skills',
    title: `Skills & Showcase — ${profile.name}`,
    description: skillsDescription,
    ...defaultOpenGraph,
  },
  twitter: {
    title: `Skills & Showcase — ${profile.name}`,
    description: skillsDescription,
    ...defaultTwitter,
  },
};

export default async function SkillsPage() {
  const caseStudies = await getCaseStudies();

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-28 md:px-10 md:pt-32">
      <header className="mb-12 max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          Skills &amp; Showcase
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
          What I build with, and what I&apos;ve built.
        </h1>
        <p className="mt-4 text-foreground/70">
          A categorized skill set, followed by a few case studies worth a closer
          look.
        </p>
      </header>

      <section className="mb-16 grid gap-5 sm:grid-cols-2">
        {skillCategories.map((category, index) => (
          <Reveal
            key={category.id}
            delay={index * 0.06}
            className="rounded-lg border border-border bg-card p-5"
          >
            <h2 className="font-mono text-xs uppercase tracking-wide text-accent">
              {category.name}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-xs text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </section>

      <section>
        <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
          Case studies
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.08}>
              <Link
                href={`/projects/${study.slug}`}
                className="group flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <h3 className="font-display text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                  {study.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-foreground/70">
                  {study.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {study.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-4 text-sm font-medium text-primary">
                  Read case study →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
