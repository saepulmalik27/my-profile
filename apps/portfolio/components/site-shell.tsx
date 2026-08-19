'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { SceneEngagementProvider } from './nav/scene-engagement';
import { SiteFooter } from './nav/site-footer';
import { SiteNav } from './nav/site-nav';

// Ticket 07: simple ~250ms crossfade between routes — matches ticket 06's
// "quiet by default" motion language, no shared-element/layout morphing.
export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <SceneEngagementProvider>
      <SiteNav />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <SiteFooter />
    </SceneEngagementProvider>
  );
}
