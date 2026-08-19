import * as React from 'react';
import { cn } from './lib/utils';

export type TagProps = React.HTMLAttributes<HTMLSpanElement>;

// "Two Lights" mono pill (ticket 06): uncolored by design — color is
// reserved for state/action, not decoration, so this never takes a
// variant/color prop.
const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-md border border-border bg-surface px-[0.6rem] py-[0.3rem] font-mono text-xs text-foreground/70',
          className
        )}
        {...props}
      />
    );
  }
);
Tag.displayName = 'Tag';

export { Tag };
