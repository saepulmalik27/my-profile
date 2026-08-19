'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

// Ticket 06's motion language (spring 120/18, once-on-scroll) as a
// reusable wrapper — Server Component pages (Skills, About) compose this
// directly since they can't call useFrame/motion hooks themselves.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
