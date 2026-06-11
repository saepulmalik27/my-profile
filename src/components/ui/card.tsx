import * as React from "react";

import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.Ref<HTMLDivElement>;
};

const Card = ({ className, ref, ...props }: CardProps) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-background-300 bg-background-200/50 backdrop-blur-md shadow-sm transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
      className
    )}
    {...props}
  />
);
Card.displayName = "Card";

const CardHeader = ({ className, ref, ...props }: CardProps) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({ className, ref, ...props }: CardProps) => (
  <div ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
);
CardTitle.displayName = "CardTitle";

const CardDescription = ({ className, ref, ...props }: CardProps) => (
  <div ref={ref} className={cn("text-sm", className)} {...props} />
);
CardDescription.displayName = "CardDescription";

const CardContent = ({ className, ref, ...props }: CardProps) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
);
CardContent.displayName = "CardContent";

const CardFooter = ({
  className,
  ref,
  ...props
}: CardProps) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
