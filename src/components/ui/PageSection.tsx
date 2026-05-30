import { cn } from "@/lib/utils";
import { spacing } from "@/lib/section-styles";

type PageSectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  spacing?: "default" | "after-hero" | "compact-bottom" | "after-cb7-hero";
};

const spacingStyles = {
  default: "py-14 lg:py-20",
  "after-hero": cn(spacing.solutionsTop, "pb-16 lg:pb-24"),
  "compact-bottom": "pt-14 pb-8 lg:pt-20 lg:pb-12",
  "after-cb7-hero": "pt-10 pb-14 lg:pt-14 lg:pb-20",
};

/** Transparent section — padding only; background comes from PageCanvas */
export function PageSection({
  id,
  children,
  className,
  spacing: spacingVariant = "default",
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={cn("relative", spacingStyles[spacingVariant], className)}
    >
      {children}
    </section>
  );
}
