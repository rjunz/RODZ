import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-base font-medium transition-all " +
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 " +
    "focus-visible:ring-ring/50 focus-visible:ring-[3px] underline-offset-4 hover:underline",
  {
    variants: {
      variant: {
        interactive: "text-primary hover:text-primary/80",
        black: "text-gray-900 hover:text-gray-700",
        gray: "text-gray-600 hover:text-gray-900",
      },
      size: {
        lg: "h-14 px-2", // 56, texto/link: pouco padding
        md: "h-12 px-2",
        sm: "h-10 px-1.5",
      },
    },
    defaultVariants: {
      variant: "interactive",
      size: "md",
    },
  }
);

export interface LinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof linkButtonVariants> {
  asChild?: boolean;
}

const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(linkButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
LinkButton.displayName = "LinkButton";

export { LinkButton, linkButtonVariants };
