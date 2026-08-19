'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useSceneEngagement } from './scene-engagement';

// Ticket 07: transparent and hidden-until-engaged over the 3D home scene,
// solid and persistent on every other page.
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/career', label: 'Career' },
  { href: '/skills', label: 'Skills & Showcase' },
  { href: '/about', label: 'About & Contact' },
];

export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { hasEngagedHome } = useSceneEngagement();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const visible = !isHome || hasEngagedHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-opacity duration-700 motion-reduce:transition-none ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      } ${isHome ? 'bg-transparent' : 'border-b border-border bg-surface/95 backdrop-blur-sm'}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          onClick={() => setDrawerOpen(false)}
          className="flex items-center gap-2 font-mono text-sm text-foreground"
        >
          <Image
            src="/assets/logo/logo.png"
            alt=""
            width={28}
            height={28}
            className="rounded-full"
          />
          SAEPUL MALIK
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-sm md:flex">
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
        </nav>
      )}
    </header>
  );
}
