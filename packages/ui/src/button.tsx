import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      // Hover/focus glow follows the "Two Lights" motion language (ticket 06):
      // amber for things you act on, cyan for the cyan-accented secondary path.
      // Kept additive to each variant's existing hover treatment.
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_22px_-6px_rgba(242,166,90,0.6)] focus-visible:shadow-[0_0_22px_-6px_rgba(242,166,90,0.6)]',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-[0_0_22px_-6px_rgba(229,72,77,0.55)] focus-visible:shadow-[0_0_22px_-6px_rgba(229,72,77,0.55)]',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-[0_0_22px_-8px_rgba(111,226,214,0.6)] focus-visible:shadow-[0_0_22px_-8px_rgba(111,226,214,0.6)]',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
