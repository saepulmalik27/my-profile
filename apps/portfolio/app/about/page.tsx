import { Mail, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Reveal } from '../../components/ui/reveal';
import { aboutMilestones, contactLinks } from '../../content/about';
import { profile } from '../../content/profile';
import type { ContactLink } from '../../content/types';
import { defaultOpenGraph, defaultTwitter } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'About & Contact',
  description: profile.tagline,
  alternates: { canonical: '/about' },
  openGraph: {
    url: '/about',
    title: `About & Contact — ${profile.name}`,
    description: profile.tagline,
    ...defaultOpenGraph,
  },
  twitter: {
    title: `About & Contact — ${profile.name}`,
    description: profile.tagline,
    ...defaultTwitter,
  },
};

// Ticket 10: direct links only, real icons per type — no generic
// placeholder for a brand that already has a recognizable shape.
const CONTACT_ICONS: Record<
  ContactLink['type'],
  ComponentType<{ className?: string }>
> = {
  email: Mail,
  phone: Phone,
  linkedin: FaLinkedin,
  github: FaGithub,
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-28 md:px-10 md:pt-32">
      <header className="mb-16 max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          About &amp; Contact
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
          Physics, full-stack, and now frontend &amp; AI.
        </h1>
        <p className="mt-4 text-foreground/70">{profile.tagline}</p>
      </header>

      {/* Journey — interactive scroll-narrative (ticket 10) */}
      <section className="mb-20">
        <h2 className="mb-8 font-display text-2xl font-semibold text-foreground">
          The journey
        </h2>
        <div className="relative flex flex-col gap-10 border-l border-border pl-8">
          {aboutMilestones.map((milestone, index) => (
            <Reveal
              key={milestone.id}
              delay={index * 0.08}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background"
              />
              <span className="font-mono text-xs uppercase tracking-wide text-accent">
                {milestone.period}
              </span>
              <h3 className="mt-1 font-display text-xl font-medium text-foreground">
                {milestone.era}
              </h3>
              <p className="mt-1 text-sm text-foreground/60">{milestone.org}</p>
              <p className="mt-3 text-foreground/80">{milestone.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact — direct links only, no form (ticket 10) */}
      <section className="mb-20">
        <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
          Get in touch
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {contactLinks.map((link) => {
            const Icon = CONTACT_ICONS[link.type];
            const external = link.type === 'linkedin' || link.type === 'github';
            return (
              <a
                key={link.type}
                href={link.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-secondary/40 text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="truncate font-mono text-sm text-foreground/80">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
