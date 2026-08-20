'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactLinks } from '../../content/about';
import { profile } from '../../content/profile';

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
} as const;

// Ticket 07: minimal footer on content pages only — never on home, so the
// 3D scene stays full-bleed.
export function SiteFooter() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const socials = contactLinks.filter(
    (link) => link.type === 'github' || link.type === 'linkedin'
  );

  return (
    <footer className="border-t border-border px-6 py-6 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-foreground/60 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          {socials.map((link) => {
            const Icon = SOCIAL_ICONS[link.type as keyof typeof SOCIAL_ICONS];
            return (
              <a
                key={link.type}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
          <Link
            href={profile.resumeUrl}
            className="transition-colors hover:text-foreground"
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
