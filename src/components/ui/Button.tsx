import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost" | "gradient";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-[linear-gradient(90deg,#5BA3FF_0%,#2D7BFF_42%,#0066FF_100%)] text-white shadow-[0_4px_28px_rgba(0,102,255,0.45)] hover:brightness-105",
  gradient:
    "border border-transparent bg-[linear-gradient(90deg,#5BA3FF_0%,#2D7BFF_42%,#0066FF_100%)] text-white shadow-[0_4px_24px_rgba(0,102,255,0.4)] hover:brightness-105",
  outline:
    "border border-white bg-transparent text-white hover:bg-white/[0.06]",
  ghost:
    "border border-white/35 bg-transparent text-white hover:border-white/60 hover:bg-white/5",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center rounded-[12px] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-300";

  const classes = cn(base, variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
