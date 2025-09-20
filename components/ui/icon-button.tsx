import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all " +
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 outline-none " +
    "focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:border-ring " +
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        tertiary: "bg-muted text-muted-foreground hover:bg-muted/80",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        danger: "bg-destructive text-white hover:bg-destructive/90",
      },
      size: {
        xxl: "size-14", // 56
        xl: "size-12",  // 48
        lg: "size-10",  // 40
        md: "size-8",   // 32
        sm: "size-7",   // 28
        xs: "size-6",   // 24
      },
      loading: {
        true: "relative text-transparent !cursor-wait",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      loading: false,
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Spinner = () => (
  <span className="absolute inset-0 grid place-items-center">
    <span className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
  </span>
);

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, loading, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(iconButtonVariants({ variant, size, loading, className }))}
        ref={ref}
        aria-busy={!!loading}
        disabled={props.disabled || !!loading}
        {...props}
      >
        {loading ? <Spinner /> : children}
      </Comp>
    );
  }
);
IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
