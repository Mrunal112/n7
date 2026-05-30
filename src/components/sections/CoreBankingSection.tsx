import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import { Container } from "@/components/ui/Container";
import { PageSection } from "@/components/ui/PageSection";
import { heroCtaPrimary } from "@/lib/section-styles";
import { images } from "@/lib/images";

export function CoreBankingSection() {
  return (
    <PageSection id="cb7" spacing="compact-bottom" className="overflow-visible">
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-12">
          <FadeIn className="lg:max-w-[520px]">
            <h2 className="text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-white sm:text-[2.35rem] lg:text-[2.65rem]">
              A complete cloud-based core banking.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#94a3b8]">
              Faster time to market with our cloud-based core banking services
            </p>
            <div className="mt-9 flex flex-col items-start gap-5">
              <Button
                href="#contact"
                variant="primary"
                className={heroCtaPrimary}
              >
                Request demo
              </Button>
              <LearnMoreLink href="#cb7-features" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="relative lg:-mr-6 xl:-mr-10">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-[4/3] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.22)_0%,transparent_68%)] blur-[40px]"
              aria-hidden
            />
            <Image
              src={images.coreBanking.laptopAml}
              alt="CB7 AML dashboard displayed on MacBook Pro"
              width={960}
              height={640}
              className="relative z-10 h-auto w-full max-w-none object-contain lg:scale-[1.02] lg:origin-center"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </FadeIn>
        </div>
      </Container>
    </PageSection>
  );
}
