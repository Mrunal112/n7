import Image from "next/image";
import { TrustedByLogos } from "@/components/hero/TrustedByLogos";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";
import {
  heroCtaOutline,
  heroCtaPrimary,
  spacing,
} from "@/lib/section-styles";

export function HeroSection() {
  return (
    <section className="relative pt-[var(--header-height)]">
      <Container className={spacing.heroTop}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <FadeIn className="z-10 lg:max-w-[540px]">
            <h1 className="text-[2.35rem] font-medium leading-[1.08] tracking-[-0.025em] text-white sm:text-[2.75rem] lg:text-[3.15rem] xl:text-[3.35rem]">
              <span className="block">The new foundation</span>
              <span className="block">of modern banking</span>
            </h1>
            <p className="mt-5 max-w-[400px] text-[15px] leading-[1.65] text-[#9ca3af] sm:text-base lg:mt-6">
              We drive innovation and growth, provide seamless customer
              experience and operational excellence
            </p>
            <div
              className={`flex flex-wrap items-center gap-4 ${spacing.heroCtaTop}`}
            >
              <Button
                href="#contact"
                variant="primary"
                className={heroCtaPrimary}
              >
                Request demo
              </Button>
              <Button
                href="#contact"
                variant="outline"
                className={heroCtaOutline}
              >
                Contact us
              </Button>
            </div>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="relative z-10 mx-auto w-full max-w-[500px] lg:max-w-none lg:justify-self-end"
          >
            <div className="relative isolate">
              <div
                className="pointer-events-none absolute left-1/2 top-[50%] -z-10 aspect-square w-[125%] max-w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.45)_0%,rgba(0,70,200,0.1)_48%,transparent_72%)] blur-[56px]"
                aria-hidden
              />
              <Image
                src={images.hero.composite}
                alt="Banking customer using mobile app with account overview and recent activity"
                width={920}
                height={1120}
                className="relative z-10 h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 48vw"
                priority
              />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className={spacing.trustedByTop}>
          <TrustedByLogos />
        </FadeIn>
      </Container>
    </section>
  );
}
