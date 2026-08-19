import type { SkillCategory } from './types';

// Grouped per ticket 09 / docs/cv_content_brainstorm.md's restructuring
// suggestion — reads as more senior/intentional than a flat tag list.
export const skillCategories: SkillCategory[] = [
  {
    id: 'architecture',
    name: 'Architecture & Concepts',
    skills: [
      'SSR/SSG',
      'Micro-frontend',
      'State Management Patterns',
      'Web Performance Optimization',
      'System Design',
      'Code Splitting & Lazy Loading',
      'Accessibility (WCAG)',
      'Design Systems',
    ],
  },
  {
    id: 'ai-integration',
    name: 'AI Integration',
    skills: [
      'Prompt Engineering',
      'RAG Pipeline',
      'LLM Integration (OpenAI, Bedrock)',
    ],
  },
  {
    id: 'tools-languages',
    name: 'Tools & Languages',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'TypeScript',
      'React.js',
      'Next.js',
      'Vue.js',
      'Redux',
      'Tailwind CSS',
      'Figma',
      'Jest',
      'React Testing Library',
      'Webpack',
      'Vite',
      'Babel',
      'Git & GitHub',
    ],
  },
  {
    id: 'soft-skills',
    name: 'Soft Skills',
    skills: [
      'Agile/Scrum',
      'Cross-functional Collaboration',
      'Documentation Writing',
    ],
  },
];
