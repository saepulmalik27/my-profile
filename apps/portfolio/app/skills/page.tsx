import type { Metadata } from 'next';
import { Reveal } from '../../components/ui/reveal';
import { profile } from '../../content/profile';
import { certificates, currentlyLearning } from '../../content/showcase';
import { skillCategories } from '../../content/skills';
import { defaultOpenGraph, defaultTwitter } from '../../lib/seo';

const skillsDescription =
  'Technical skills grouped by category, plus what I’m currently learning.';

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
          A categorized skill set, grouped by area.
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
                  {skill.level === 'learning' && (
                    <span className="ml-1.5 text-foreground/40">
                      · learning
                    </span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
          Currently learning
        </h2>
        <Reveal className="rounded-lg border border-border bg-card p-5">
          <div className="flex flex-wrap gap-2">
            {currentlyLearning.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-xs text-foreground/80"
              >
                {topic}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-foreground/70">
            {currentlyLearning.why}
          </p>
          <p className="mt-2 text-sm text-foreground/70">
            {currentlyLearning.how} Underway since {currentlyLearning.since},
            including the courses {currentlyLearning.courses.join(' and ')}.
          </p>

          <h3 className="mt-6 font-mono text-xs uppercase tracking-wide text-accent">
            Certificates
          </h3>
          <ul className="mt-3 flex flex-col gap-1.5">
            {certificates.map((cert) => (
              <li key={cert.href}>
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {cert.issuer} certificate →
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </main>
  );
}
