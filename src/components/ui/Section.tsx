import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: "dark" | "light" | "darker";
};

const variantStyles = {
  dark: "bg-navy text-white",
  darker: "bg-navy-900 text-white",
  light: "bg-surface-light text-[#0f172a]",
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  variant = "dark",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 lg:py-28 xl:py-32",
        variantStyles[variant],
        className,
      )}
    >
      <Container className={cn("relative", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}
