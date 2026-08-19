import type { CareerEntry } from './types';

// Source of truth: public/frontend-engineer.pdf. Ordered most-recent-first
// for ticket 08's expandable-card layout.
export const career: CareerEntry[] = [
  {
    id: 'inspigo',
    role: 'Frontend Engineer',
    company: 'PT Inspigo Inovasi Indonesia',
    startDate: '2021',
    endDate: 'Present',
    topHighlight:
      'Built and maintained high-performance web applications using Next.js and React.',
    achievements: [
      'Built and maintained high-performance web applications using Next.js and React.',
      'Created customizable learning platforms for enterprise clients with dynamic UI adjustments — Inspigo For Business (IFB).',
      'Integrated AI-powered features using Foundation Models (OpenAI, Bedrock) and RAG for personalized learning experiences — Inspigo AI.',
    ],
    techTags: ['Next.js', 'React', 'OpenAI', 'Bedrock', 'RAG', 'Tailwind CSS'],
    caseStudySlugs: ['inspigo-for-business', 'inspigo-ai'],
  },
  {
    id: 'praweda',
    role: 'Full Stack Developer',
    company: 'PT Praweda Sarana Informatika (Outsourced by PT Indocyber)',
    startDate: '2018',
    endDate: '2021',
    topHighlight:
      'Built a Shipyard Project Management System handling end-to-end workflow.',
    achievements: [
      'Developed web applications using PHP (Laravel, CodeIgniter, CakePHP) and Vue.js.',
      'Built a Shipyard Project Management System handling end-to-end workflow.',
      'Maintained and improved a Trucking Management Application with GPS tracking and analytics.',
    ],
    techTags: ['PHP', 'Laravel', 'CodeIgniter', 'CakePHP', 'Vue.js'],
    caseStudySlugs: ['shipyard-trucking'],
  },
  {
    id: 'indocyber',
    role: 'Full Stack Developer Trainee',
    company: 'PT Indocyber Global Technology',
    startDate: '2018',
    endDate: '2018',
    topHighlight: 'Built a Library Management System as a final project.',
    achievements: [
      'Trained in C#, Java, SQL Server, Java Spring, and MVC frameworks.',
      'Built a Library Management System as a final project.',
    ],
    techTags: ['C#', 'Java', 'SQL Server', 'Spring', 'MVC'],
  },
];
