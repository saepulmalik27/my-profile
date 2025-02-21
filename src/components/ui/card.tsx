import * as React from "react";

import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.Ref<HTMLDivElement>;
};

const Card = ({ className, ref, ...props }: CardProps) => (
  <div
    ref={ref}
    className={cn("rounded-xl  shadow", className)}
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
