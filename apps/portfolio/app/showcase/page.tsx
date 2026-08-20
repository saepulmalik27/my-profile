import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '../../components/ui/reveal';
import { profile } from '../../content/profile';
import {
  certificates,
  currentlyLearning,
  personalProjects,
} from '../../content/showcase';
import { getCaseStudies } from '../../lib/get-case-studies';
import { defaultOpenGraph, defaultTwitter } from '../../lib/seo';

const showcaseDescription =
  'Case studies worth a closer look, personal projects, and what I’m currently learning.';

export const metadata: Metadata = {
  title: 'Showcase',
  description: showcaseDescription,
  alternates: { canonical: '/showcase' },
  openGraph: {
    url: '/showcase',
    title: `Showcase — ${profile.name}`,
    description: showcaseDescription,
    ...defaultOpenGraph,
  },
  twitter: {
    title: `Showcase — ${profile.name}`,
    description: showcaseDescription,
    ...defaultTwitter,
  },
};

export default async function ShowcasePage() {
  const caseStudies = await getCaseStudies();

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-28 md:px-10 md:pt-32">
      <header className="mb-12 max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          Showcase
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
          What I&apos;ve built, and what&apos;s next.
        </h1>
        <p className="mt-4 text-foreground/70">
          Case studies from paid work, personal projects, and what I&apos;m
          currently learning.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
          Case studies
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.05}>
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

      <section className="mb-16">
        <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
          Personal projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {personalProjects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.05}
              className="rounded-lg border border-border bg-card p-5"
            >
              <h3 className="font-display text-lg font-medium text-foreground">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-foreground/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link ? (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-primary"
                >
                  {project.link.label} →
                </a>
              ) : (
                <span className="mt-4 inline-block text-sm text-foreground/40">
                  Repo private for now
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section>
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
