'use client';

import { Button } from '@repo/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { profile } from '../../content/profile';

// Always visible, everywhere — transparent over the 3D home scene, solid
// on every other page.
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/career', label: 'Career' },
  { href: '/skills', label: 'Skills' },
  { href: '/showcase', label: 'Showcase' },
  { href: '/about', label: 'About & Contact' },
];

export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 ${
        isHome
          ? 'bg-transparent'
          : 'border-b border-border bg-surface/95 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          onClick={() => setDrawerOpen(false)}
          className="flex items-center gap-2 font-mono font-bold text-sm text-foreground"
        >
          <Image
            src="/assets/logo/logo.png"
            alt=""
            width={28}
            height={28}
            className="rounded-full"
          />
          Saepul Malik
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8 font-mono text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? 'text-accent'
                    : 'text-foreground/70 transition-colors hover:text-foreground'
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button asChild size="sm">
            <a href={profile.resumeUrl} download>
              Download CV
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setDrawerOpen((open) => !open)}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
          className="text-foreground md:hidden"
        >
          {drawerOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {drawerOpen && (
        <nav className="flex flex-col gap-1 border-t border-border bg-surface px-6 py-4 font-mono text-sm md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              className={`py-2 ${
                pathname === link.href ? 'text-accent' : 'text-foreground/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="mt-3 w-fit">
            <a
              href={profile.resumeUrl}
              download
              onClick={() => setDrawerOpen(false)}
            >
              Download CV
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
