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
      'Owned Inspigo For Business as frontend lead — a config-driven enterprise learning platform serving ~350 client organizations.',
    achievements: [
      'Built and maintained high-performance web applications using Next.js and React.',
      "Translated Figma designs into pixel-accurate, production-ready UI across Inspigo's products.",
      'Owned Inspigo For Business (IFB) as frontend lead: designed a config-driven architecture where per-tenant config drives component composition and layout, so enterprise clients onboard through configuration instead of a dedicated build — now ~350 client organizations (~35,000 users).',
      'Built a reusable form system powering the CMS and readable, non-technical-friendly charts for the admin dashboard.',
      'Built the frontend for Inspigo AI, a RAG-powered learning assistant: the token-by-token streaming chat UI (WebSocket, later SSE) and the CMS for managing knowledge-base documents, integrated with the backend OpenAI/Bedrock + Pinecone pipeline.',
      'Built the AI call-center QA copilot end to end — live-call probing, real-time call analysis, and rubric-based QA evaluation — moving QA coverage from a ~10% manual sample to 100% of sessions scored automatically.',
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
