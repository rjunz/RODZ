import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const socialButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all " +
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 " +
    "focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      provider: {
        google:
          "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus-visible:ring-gray-500/20",
        linkedin:
          "bg-[#0A66C2] text-white hover:bg-[#0956A3] focus-visible:ring-[#0A66C2]/20",
        apple:
          "bg-black text-white hover:bg-neutral-900 focus-visible:ring-neutral-500/20",
        facebook:
          "bg-[#1877f2] text-white hover:bg-[#166fe5] focus-visible:ring-[#1877f2]/20",
        discord:
          "bg-[#5865F2] text-white hover:bg-[#4752C4] focus-visible:ring-[#5865F2]/20",
      },
      size: {
        lg: "h-14 px-6", // 56 / 24
        md: "h-12 px-5", // 48 / 20
        sm: "h-10 px-3", // 40 / 12
        icon: "size-10", // 40 icon-only
      },
      loading: {
        true: "relative text-transparent !cursor-wait",
        false: "",
      },
    },
    defaultVariants: {
      provider: "google",
      size: "md",
      loading: false,
    },
  }
);

export interface SocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof socialButtonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
}

const Spinner = () => (
  <span className="absolute inset-0 grid place-items-center">
    <span className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
  </span>
);

const SocialButton = React.forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ className, provider, size, loading, asChild = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(socialButtonVariants({ provider, size, loading, className }))}
        ref={ref}
        aria-busy={!!loading}
        disabled={props.disabled || !!loading}
        {...props}
      >
        {loading && <Spinner />}
        {icon && <span className={loading ? "invisible" : "shrink-0"}>{icon}</span>}
        <span className={loading ? "invisible" : "contents"}>{children}</span>
      </Comp>
    );
  }
);
SocialButton.displayName = "SocialButton";

export { SocialButton, socialButtonVariants };
