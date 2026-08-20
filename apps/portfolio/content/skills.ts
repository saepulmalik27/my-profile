import type { SkillCategory } from './types';

// Grouped per ticket 09 / docs/cv_content_brainstorm.md's restructuring
// suggestion — reads as more senior/intentional than a flat tag list.
// Reconciled against actual project usage per ticket 06: dropped
// Micro-frontend (never shipped), added a daily/used/learning proficiency
// signal, and expanded AI Integration + split Tools & Languages into
// frontend vs. backend/infra now that tickets 01–05/11–20 surfaced the
// real stack.
export const skillCategories: SkillCategory[] = [
  {
    id: 'architecture',
    name: 'Architecture & Concepts',
    skills: [
      { name: 'SSR/SSG', level: 'daily' },
      { name: 'State Management Patterns', level: 'daily' },
      { name: 'Web Performance Optimization', level: 'daily' },
      { name: 'System Design', level: 'daily' },
      { name: 'Code Splitting & Lazy Loading', level: 'daily' },
      { name: 'Accessibility (WCAG)', level: 'used' },
      { name: 'Design Systems', level: 'daily' },
    ],
  },
  {
    id: 'ai-integration',
    name: 'AI Integration',
    skills: [
      { name: 'Prompt Engineering', level: 'daily' },
      { name: 'System Prompt Design', level: 'daily' },
      { name: 'RAG Pipeline Design', level: 'daily' },
      { name: 'RAG Chunking & Context Construction', level: 'used' },
      { name: 'Embeddings & Vector Databases (Pinecone)', level: 'used' },
      { name: 'Context-Window Management', level: 'used' },
      { name: 'LLM Integration (OpenAI, Bedrock)', level: 'daily' },
      { name: 'LangChain & Orchestration Frameworks', level: 'used' },
      { name: 'Streaming Delivery (WebRTC, SSE)', level: 'daily' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Tools & Languages',
    skills: [
      { name: 'HTML5', level: 'daily' },
      { name: 'CSS3', level: 'daily' },
      { name: 'JavaScript (ES6+)', level: 'daily' },
      { name: 'TypeScript', level: 'daily' },
      { name: 'React.js', level: 'daily' },
      { name: 'Next.js', level: 'daily' },
      { name: 'Vue.js', level: 'used' },
      { name: 'Redux', level: 'used' },
      { name: 'RTK / Zustand', level: 'daily' },
      { name: 'Tailwind CSS', level: 'daily' },
      { name: 'React Hook Form + Zod', level: 'daily' },
      { name: 'shadcn/ui', level: 'daily' },
      { name: 'TanStack Table', level: 'used' },
      { name: 'Recharts', level: 'used' },
      { name: 'react-player', level: 'used' },
      { name: 'Figma', level: 'used' },
      { name: 'Jest', level: 'used' },
      { name: 'React Testing Library', level: 'used' },
      { name: 'Webpack', level: 'used' },
      { name: 'Vite', level: 'used' },
      { name: 'Babel', level: 'used' },
      { name: 'Git & GitHub', level: 'daily' },
    ],
  },
  {
    id: 'backend-infra',
    name: 'Backend & Infra',
    skills: [
      { name: 'PHP (Laravel, CodeIgniter, CakePHP)', level: 'used' },
      { name: 'PostgreSQL', level: 'used' },
      { name: 'AWS (S3, Lambda, Amplify)', level: 'daily' },
      { name: 'GitHub Actions (CI/CD)', level: 'daily' },
      { name: 'n8n', level: 'used' },
      { name: 'Agora (WebRTC)', level: 'used' },
      { name: 'Firebase', level: 'used' },
      { name: 'GTM / GA / MoEngage', level: 'daily' },
      { name: 'Security Tooling (Semgrep, Nuclei, OWASP ZAP)', level: 'used' },
    ],
  },
  {
    id: 'soft-skills',
    name: 'Soft Skills',
    skills: [
      { name: 'Agile/Scrum', level: 'daily' },
      { name: 'Cross-functional Collaboration', level: 'daily' },
      { name: 'Documentation Writing', level: 'daily' },
    ],
  },
];
