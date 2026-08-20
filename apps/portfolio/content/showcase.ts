// Free-form content per ticket 07 — deliberately not a new typed array in
// content/types.ts, closer to content/projects/*.mdx's free-form pattern
// than to CareerEntry/SkillCategory. Powers the Showcase page only.

export type PersonalProject = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  /** null = no public link yet (ticket 09: placeholder slot, not blocking). */
  link: { label: string; href: string } | null;
};

export const personalProjects: PersonalProject[] = [
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot',
    description:
      'Started as a chat interface built with RAG and LangChain, then added speech-to-text/text-to-speech, and is now exploring realtime voice as the next iteration.',
    stack: ['LangChain', 'RAG', 'STT/TTS'],
    link: null,
  },
  {
    id: 'this-site',
    name: 'This Portfolio Site',
    description:
      'The 3D scene, the AI chat widget, and the content pipeline behind this very site.',
    stack: ['Next.js', 'React Three Fiber', 'OpenAI'],
    link: {
      label: 'github.com/saepulmalik27',
      href: 'https://github.com/saepulmalik27',
    },
  },
];

export const currentlyLearning = {
  topics: [
    'Model Context Protocol (MCP)',
    'Agent-loop engineering',
    'Graph-based agent engineering',
    'AI automation, more broadly',
  ],
  why: 'Staying current in the AI era — being "just a frontend engineer" isn\'t enough anymore.',
  how: 'Self-directed: YouTube, courses, and learning-by-doing tied to real projects and work.',
  since: 'Early 2026',
  courses: ['LangChain', 'Context Engineering'],
};

export type Certificate = {
  issuer: string;
  href: string;
};

export const certificates: Certificate[] = [
  {
    issuer: 'Scrimba',
    href: 'https://scrimba.com/@saepulmalik27:certs;cert22z7m4z2ewCciKUgDR8KbEzPoY1VjfKDdXbmPnc7WNoK',
  },
  {
    issuer: 'Scrimba',
    href: 'https://scrimba.com/certificate-cert2uNje7frwxofEgUj4wT4ZuNVRttoxJm3dgF',
  },
  {
    issuer: 'Udemy',
    href: 'https://www.udemy.com/certificate/UC-d078f366-0389-4e32-836d-f32ef3e088c8/',
  },
];
