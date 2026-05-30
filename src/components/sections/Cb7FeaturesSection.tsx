import Image from "next/image";
import { CheckList } from "@/components/ui/CheckList";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { PageSection } from "@/components/ui/PageSection";
import { cb7Features } from "@/lib/data";
import { images } from "@/lib/images";

/** Left column: first 5 features. Right column: remaining 4 (Frame 74). */
const featureColumns = [cb7Features.slice(0, 5), cb7Features.slice(5)] as const;

export function Cb7FeaturesSection() {
  return (
    <>
      <PageSection id="cb7-features" spacing="after-cb7-hero">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
            <FadeIn className="relative lg:-ml-6 xl:-ml-10">
              <Image
                src={images.cb7.dashboard}
                alt="CB7 CKYC core banking dashboard with customer records"
                width={1200}
                height={800}
                className="relative z-10 h-auto w-full object-contain lg:scale-[1.02] lg:origin-left"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
            </FadeIn>

            <FadeIn delay={0.08} className="lg:max-w-[540px] lg:justify-self-end">
              <h2 className="text-[1.65rem] font-medium leading-[1.2] tracking-[-0.02em] text-white sm:text-[1.85rem] lg:text-[2rem] xl:text-[2.1rem]">
                Run a more efficient, flexible, and digitally connected
                corebanking system
              </h2>
              <p className="mt-6 text-sm font-medium text-white">
                What you will get:
              </p>
              <div className="mt-5 grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:gap-x-10">
                <CheckList items={featureColumns[0]} dark className="space-y-3.5" />
                <CheckList items={featureColumns[1]} dark className="space-y-3.5" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </PageSection>

      <CtaBanner watermark="CB7" />
    </>
  );
}
