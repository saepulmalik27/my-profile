'use client';

import { cn } from './lib/utils';
import React from 'react';
import { motion } from 'framer-motion';

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
        hidden: {},
      }}
      className={cn(
        'grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function BentoCard({
  className,
  children,
  colSpan = 1,
  rowSpan = 1,
}: {
  className?: string;
  children: React.ReactNode;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3 | 4;
}) {
  const colSpanClasses = {
    1: 'md:col-span-1 lg:col-span-1',
    2: 'md:col-span-2 lg:col-span-2',
    3: 'md:col-span-2 lg:col-span-3',
    4: 'md:col-span-2 lg:col-span-4',
  };

  const rowSpanClasses = {
    1: 'row-span-1',
    2: 'row-span-2',
    3: 'row-span-3',
    4: 'row-span-4',
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: 'spring', stiffness: 100, damping: 15 },
        },
      }}
      whileHover={{ scale: 0.98, transition: { duration: 0.2 } }}
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-lg',
        'bg-card text-card-foreground',
        'border border-border',
        'transition-colors duration-300 hover:border-primary/40',
        colSpanClasses[colSpan],
        rowSpanClasses[rowSpan],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
