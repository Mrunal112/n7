import Link from "next/link";
import { cn } from "@/lib/utils";

type LearnMoreLinkProps = {
  href?: string;
  className?: string;
  children?: React.ReactNode;
};

export function LearnMoreLink({
  href = "#",
  className,
  children = "Learn more",
}: LearnMoreLinkProps) {
  const isString = typeof children === "string";
  const hasArrow = isString && (children.includes("→") || children.includes(">"));
  const label = isString && !hasArrow ? children.toUpperCase() : children;

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-cyan transition-colors hover:text-brand-cyan-light",
        className,
      )}
    >
      {label}
      {!hasArrow && (
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          &gt;
        </span>
      )}
    </Link>
  );
}
