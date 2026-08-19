import type { IconType } from 'react-icons';
import {
  SiCakephp,
  SiCodeigniter,
  SiLaravel,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';

// Only tags with a real, verified simple-icons export get a brand icon —
// deliberately no icon for OpenAI/Bedrock/RAG/C#/SQL Server/MVC, since
// react-icons@5.7's Si set doesn't ship those and a wrong/misleading icon
// is worse than a plain text tag.
export const TECH_ICONS: Record<string, IconType> = {
  'Next.js': SiNextdotjs,
  React: SiReact,
  'Tailwind CSS': SiTailwindcss,
  PHP: SiPhp,
  Laravel: SiLaravel,
  CodeIgniter: SiCodeigniter,
  CakePHP: SiCakephp,
  'Vue.js': SiVuedotjs,
  TypeScript: SiTypescript,
  Spring: SiSpring,
};
