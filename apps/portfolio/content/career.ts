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
      "Translated Figma designs into pixel-accurate, production-ready UI across Inspigo's products.",
      'Created customizable learning platforms for enterprise clients with dynamic UI adjustments — Inspigo For Business (IFB).',
      'Built a reusable form system powering the CMS and readable, non-technical-friendly charts for the admin dashboard.',
      'Integrated AI-powered features using Foundation Models (OpenAI, Bedrock) and RAG for personalized learning experiences — Inspigo AI.',
    ],
    techTags: [
      'Next.js',
      'React',
      'TypeScript',
      'Figma',
      'LangChain',
      'RAG',
      'RTK / Zustand',
      'React Hook Form',
      'Recharts',
      'Storybook',
      'Tailwind CSS',
    ],
    caseStudySlugs: [
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
    ],
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
      'Built a Shipyard Project Management System from the ground up on Laravel + Vue.js + PostgreSQL, centralizing project and warehouse tracking and closing off a prior fraud vector in the inquiry/quotation process.',
      'Maintained and extended a legacy Trucking Management Application, adding GPS-based route and parking-dwell-time tracking for fleet management oversight.',
    ],
    techTags: [
      'PHP',
      'Laravel',
      'CodeIgniter',
      'CakePHP',
      'Vue.js',
      'PostgreSQL',
    ],
    caseStudySlugs: ['praweda-shipyard', 'praweda-trucking'],
  },
  {
    id: 'indocyber',
    role: 'Full Stack Developer Trainee',
    company: 'PT Indocyber Global Technology',
    startDate: '2018',
    endDate: '2018',
    topHighlight: 'Built a Library Management System as a final project.',
    achievements: [
      'Trained in C#, Java, SQL Server, and JavaScript.',
      'Built a Library Management System using MVC concepts in both .NET and Java Spring — the throughline into the PHP/Vue.js work that followed at Praweda.',
    ],
    techTags: ['C#', 'Java', 'SQL Server', 'JavaScript', 'Spring', 'MVC'],
  },
];
