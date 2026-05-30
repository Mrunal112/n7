import Image from "next/image";
import { PhoneMockup } from "@/components/mobile/PhoneMockup";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FadeIn } from "@/components/ui/FadeIn";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import { Container } from "@/components/ui/Container";
import { branchlessChecks, legacyChecks, regulatoryChecks } from "@/lib/data";
import { heroCtaPrimary } from "@/lib/section-styles";
import { images } from "@/lib/images";

/** Thin bracket lines that frame the top of the centre phone */
function PhoneFrameDecor() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -top-6 left-1/2 z-20 -translate-x-1/2 select-none"
      width="320"
      height="80"
      viewBox="0 0 320 80"
      fill="none"
    >
      <path
        d="M90 70 L90 10 L150 10"
        stroke="rgba(74,144,217,0.55)"
        strokeWidth="1.2"
      />
      <path
        d="M170 10 L230 10 L230 70"
        stroke="rgba(74,144,217,0.55)"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function FeatureCopy({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: readonly string[];
}) {
  return (
    <div>
      <h3 className="text-[1.1rem] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0f172a] lg:text-[1.2rem]">
        {title}
      </h3>
      <p className="mt-3 text-[13px] leading-[1.7] text-[#64748b] lg:text-[14px]">
        {description}
      </p>
      <CheckList items={items} className="mt-5 space-y-3" />
    </div>
  );
}

export function DigitalBankingSection() {
  return (
    <div className="light-section-flow">
      <section
        id="digital-banking"
        className="relative overflow-hidden py-16 text-[#0f172a] lg:py-20 xl:py-24"
      >
        {/* ── Decorative rings ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[28%] top-[10%] h-[780px] w-[780px] rounded-full border border-[rgba(0,102,255,0.13)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-[8%] -left-[4%] h-[380px] w-[380px] rounded-full border border-[rgba(0,102,255,0.09)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-[4%] -right-[6%] h-[320px] w-[320px] rounded-full border border-[rgba(0,102,255,0.09)]"
        />

        {/*
          N7 watermark — direct child of <section>, NOT inside any FadeIn.
          pt-* mirrors the section's py-* so it aligns with the grid top.
        */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center pt-8 lg:pt-10 xl:pt-12"
        >
          <span
            className="select-none font-sans font-bold leading-[0.85] tracking-[-0.05em] text-transparent"
            style={{
              fontSize: "clamp(16rem, 34vw, 28rem)",
              WebkitTextStroke: "2px rgba(74, 144, 217, 0.55)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 28%, black 55%, transparent 92%)",
              maskImage:
                "linear-gradient(to bottom, black 28%, black 55%, transparent 92%)",
            }}
          >
            N7
          </span>
        </div>

        <Container className="relative z-10">
          {/* ── ROW 1 — heading | home phone | regulatory ── */}
          <div className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-6">
            {/* Left */}
            <FadeIn className="lg:col-span-4">
              <h2 className="text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#0f172a] sm:text-[2.5rem] lg:text-[2.8rem]">
                Digital banking
                <br />
                out-of-the-box
              </h2>
              <p className="mt-4 max-w-[320px] text-[14px] leading-[1.65] text-[#64748b]">
                N7 helps your financial institution improve the client
                experience, automate and optimize procedures
              </p>
              <div className="mt-7 flex flex-col items-start gap-4">
                <Button
                  href="#contact"
                  variant="primary"
                  className={heroCtaPrimary}
                >
                  Request demo
                </Button>
                <LearnMoreLink
                  href="#digital-banking"
                  className="!text-[#2563eb]"
                />
              </div>
            </FadeIn>

            {/* Centre — phone with bracket decor */}
            <FadeIn
              delay={0.08}
              className="relative z-10 flex justify-center lg:col-span-4"
            >
              <PhoneFrameDecor />
              <PhoneMockup
                src={images.phones.home}
                alt="N7 home screen"
                size="hero"
                priority
              />
            </FadeIn>

            {/* Right */}
            <FadeIn delay={0.14} className="lg:col-span-4">
              <FeatureCopy
                title="Fully compliant with regulatory requirement"
                description="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures."
                items={regulatoryChecks}
              />
            </FadeIn>
          </div>

          {/* ── ROW 2 — legacy text | analytics phone ── */}
          <div className="mt-14 grid items-center gap-y-10 lg:mt-20 lg:grid-cols-12 lg:gap-x-6">
            <FadeIn className="lg:col-span-5">
              <FeatureCopy
                title="No legacy IT systems"
                description="Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance."
                items={legacyChecks}
              />
            </FadeIn>

            <FadeIn
              delay={0.08}
              className="flex justify-center lg:col-span-7 lg:justify-end"
            >
              <div className="w-[min(100%,280px)] sm:w-[300px] md:w-[320px] lg:w-[340px] xl:w-[360px]">
                <Image
                  src={images.phones.analytics}
                  alt="N7 analytics screen"
                  width={520}
                  height={1060}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 320px, 360px"
                />
              </div>
            </FadeIn>
          </div>

          {/* ── ROW 3 — profile phone | branchless text ── */}
          <div className="mt-14 grid items-center gap-y-10 lg:mt-20 lg:grid-cols-12 lg:gap-x-6">
            <FadeIn className="flex justify-center lg:col-span-6 lg:justify-start">
              <div className="w-[min(100%,260px)] sm:w-[280px] md:w-[300px] lg:w-[310px] xl:w-[320px]">
                <Image
                  src={images.phones.profile}
                  alt="N7 profile screen"
                  width={520}
                  height={1060}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 300px, 320px"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="lg:col-span-6">
              <FeatureCopy
                title="No traditional branches"
                description="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience."
                items={branchlessChecks}
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      <CtaBanner watermark="N7" embedded />
    </div>
  );
}
