import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default: "text-secondary-100 border-accent-100 border bg-transparent hover:bg-accent-100 hover:text-accent-200 transition-all duration-300 shadow-[0_4px_12px_rgba(var(--accent-100-rgb),0.1)] hover:shadow-[0_4px_16px_rgba(var(--accent-100-rgb),0.25)] hover:-translate-y-0.5 cursor-pointer",
        destructive:
          "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90 cursor-pointer",
        outline:
          "border border-background-300 bg-transparent text-secondary-100 hover:bg-background-200 hover:text-accent-100 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer",
        secondary:
          "bg-background-300 text-secondary-100 hover:bg-background-300/80 transition-all cursor-pointer",
        ghost: "hover:bg-background-200 hover:text-accent-100 transition-all cursor-pointer",
        link: "text-accent-100 underline-offset-4 hover:underline cursor-pointer",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
