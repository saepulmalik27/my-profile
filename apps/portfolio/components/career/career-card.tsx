'use client';

import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { CareerEntry } from '../../content/types';
import { TECH_ICONS } from './tech-icons';

const COMPANY_LOGOS: Record<string, string> = {
  inspigo: '/assets/logo/inspigo.png',
  praweda: '/assets/logo/praweda.png',
  indocyber: '/assets/logo/iglo.png',
};

// Ticket 08: expandable card per role — collapsed shows role/company/dates
// + top highlight, expands to the full achievement list and tech tags.
export function CareerCard({
  entry,
  index,
  caseStudyTitles,
}: {
  entry: CareerEntry;
  index: number;
  caseStudyTitles: Record<string, string>;
}) {
  const [open, setOpen] = useState(index === 0);
  const logo = COMPANY_LOGOS[entry.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 18,
        delay: index * 0.06,
      }}
      className="overflow-hidden rounded-lg border border-border bg-card"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 p-5 text-left"
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-wide text-accent">
            {entry.startDate}–{entry.endDate}
          </span>
          <h3 className="mt-1 font-display text-xl font-medium text-foreground">
            {entry.role}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-foreground/60">
            {logo && (
              <span className="inline-flex h-5 w-5 flex-none items-center justify-center overflow-hidden rounded-full bg-white">
                <Image
                  src={logo}
                  alt=""
                  width={20}
                  height={20}
                  className="h-full w-full object-cover"
                />
              </span>
            )}
            {entry.company}
          </p>
          <p className="mt-3 text-sm text-foreground/80">
            {entry.topHighlight}
          </p>
        </div>
        <ChevronDown
          className={`mt-1 h-5 w-5 flex-none text-foreground/50 transition-transform motion-reduce:transition-none ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-border px-5 pb-5 pt-4">
          <ul className="flex flex-col gap-2 text-sm text-foreground/80">
            {entry.achievements.map((achievement) => (
              <li key={achievement} className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent"
                />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {entry.techTags.map((tag) => {
              const Icon = TECH_ICONS[tag];
              return (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-xs text-foreground/80"
                >
                  {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                  {tag}
                </span>
              );
            })}
          </div>

          {entry.caseStudySlugs && entry.caseStudySlugs.length > 0 && (
            <div className="mt-4 flex flex-col gap-1.5">
              {entry.caseStudySlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/projects/${slug}`}
                  className="inline-block w-fit text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Read: {caseStudyTitles[slug] ?? slug} →
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
