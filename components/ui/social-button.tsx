import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const socialButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      provider: {
        google: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus-visible:ring-gray-500/20",
        linkedin: "bg-[#0077b5] text-white hover:bg-[#005885] focus-visible:ring-[#0077b5]/20",
        apple: "bg-black text-white hover:bg-gray-900 focus-visible:ring-gray-500/20",
        facebook: "bg-[#1877f2] text-white hover:bg-[#166fe5] focus-visible:ring-[#1877f2]/20",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      provider: "google",
      size: "default",
    },
  }
)

export interface SocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof socialButtonVariants> {
  asChild?: boolean
  icon?: React.ReactNode
}

const SocialButton = React.forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ className, provider, size, asChild = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(socialButtonVariants({ provider, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </Comp>
    )
  }
)
SocialButton.displayName = "SocialButton"

export { SocialButton, socialButtonVariants }
