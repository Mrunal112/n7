import { SolutionWireIcon } from "@/components/icons/SolutionWireIcons";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import { Container } from "@/components/ui/Container";
import { PageSection } from "@/components/ui/PageSection";
import { solutions } from "@/lib/data";
import { spacing, solutionsRequestDemo } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

export function SolutionsSection() {
  return (
    <PageSection id="solutions" spacing="after-hero">
      <Container>
        <div
          className={cn(
            "flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-y-16",
            spacing.solutionsGutter,
          )}
        >
          <FadeIn className="shrink-0 lg:w-[min(100%,420px)] xl:max-w-[440px]">
            <h2 className="text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-white sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.65rem]">
              All of our solutions are tailor-made to your needs
            </h2>
            <div className="mt-10 lg:mt-12">
              <Button
                href="#contact"
                variant="outline"
                className={solutionsRequestDemo}
              >
                Request demo
              </Button>
            </div>
          </FadeIn>

          <div
            className={cn(
              "grid min-w-0 flex-1 grid-cols-1 sm:grid-cols-2",
              spacing.solutionsGrid,
            )}
          >
            {solutions.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.04}>
                <article
                  className={cn(
                    "group max-w-[360px] transition-transform duration-300 hover:-translate-y-1 lg:max-w-none",
                    spacing.solutionsCard,
                    index >= 2 && spacing.solutionsCardRow2,
                  )}
                >
                  <SolutionWireIcon
                    name={item.icon}
                    className="mb-5 transition-colors duration-300 group-hover:text-brand-cyan"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-medium leading-snug text-white sm:text-[17px]">
                      {item.title}
                    </h3>
                    {item.tag && (
                      <span className="shrink-0 pt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#6b7280]">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-[13px] leading-[1.65] text-[#94a3b8]">
                    {item.description}
                  </p>
                  <div className="mt-5">
                    <LearnMoreLink href={item.href} />
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
