import type { AboutMilestone, ContactLink } from './types';

// Structure and facts fixed by ticket 10 — source of truth:
// public/frontend-engineer.pdf plus docs/portfolio_website_brainstorm.md's
// narrative pitch. Final prose polish is separate (map's "Not yet
// specified" bucket), this is the accurate skeleton it gets built on.
export const aboutMilestones: AboutMilestone[] = [
  {
    id: 'physics',
    era: 'Physics',
    org: 'IPB University',
    period: '2013–2017',
    description:
      'An analytical foundation — physics taught a way of breaking complex, ambiguous problems into testable pieces, a habit that carried straight into engineering.',
  },
  {
    id: 'fullstack',
    era: 'Full Stack',
    org: 'PT Indocyber Global Technology (2018, trainee) → PT Praweda Sarana Informatika',
    period: '2018–2021',
    description:
      'PHP (Laravel, CodeIgniter, CakePHP) and Vue.js across a Shipyard Project Management System and a Trucking Management Application with GPS tracking — full-stack range, end to end.',
  },
  {
    id: 'frontend-ai',
    era: 'Frontend / AI Specialist',
    org: 'PT Inspigo Inovasi Indonesia',
    period: '2021–Present',
    description:
      "Next.js and React at the center, with Inspigo For Business's dynamic enterprise UI and Inspigo AI's OpenAI/Bedrock + RAG chatbot — the specialization the earlier two chapters were building toward.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    type: 'email',
    label: 'saepulalmalik@gmail.com',
    href: 'mailto:saepulalmalik@gmail.com',
  },
  {
    type: 'phone',
    label: '+62 895-2733-4546',
    href: 'tel:+6289527334546',
  },
  {
    type: 'linkedin',
    label: 'linkedin.com/in/saepulmalik27',
    href: 'https://www.linkedin.com/in/saepulmalik27',
  },
  {
    type: 'github',
    label: 'github.com/saepulmalik27',
    href: 'https://github.com/saepulmalik27',
  },
];
