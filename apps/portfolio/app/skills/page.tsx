import type { Metadata } from 'next';
import { Reveal } from '../../components/ui/reveal';
import { profile } from '../../content/profile';
import { skillCategories } from '../../content/skills';
import { defaultOpenGraph, defaultTwitter } from '../../lib/seo';

const skillsDescription = 'Technical skills grouped by category.';

export const metadata: Metadata = {
  title: 'Skills',
  description: skillsDescription,
  alternates: { canonical: '/skills' },
  openGraph: {
    url: '/skills',
    title: `Skills — ${profile.name}`,
    description: skillsDescription,
    ...defaultOpenGraph,
  },
  twitter: {
    title: `Skills — ${profile.name}`,
    description: skillsDescription,
    ...defaultTwitter,
  },
};

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-28 md:px-10 md:pt-32">
      <header className="mb-12 max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          Skills
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
          What I build with.
        </h1>
        <p className="mt-4 text-foreground/70">
          A categorized skill set, with a proficiency signal — daily driver,
          used on real work, or actively learning.
        </p>
      </header>

      <section className="grid gap-5 sm:grid-cols-2">
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
                  key={skill.name}
                  className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-xs text-foreground/80"
                >
                  {skill.name}
                  {skill.level !== 'daily' && (
                    <span className="ml-1.5 text-foreground/40">
                      · {skill.level}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
