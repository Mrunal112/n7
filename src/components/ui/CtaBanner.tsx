import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { heroCtaOutline, heroCtaPrimary, ctaBannerDescription, ctaBannerTitle } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

type CtaBannerProps = {
  id?: string;
  watermark: "CB7" | "N7";
  title?: string;
  description?: string;
  className?: string;
  inset?: boolean;
  /** Card on light digital-banking band */
  embedded?: boolean;
  /** Flat layout on dark page canvas — no card (footer) */
  plain?: boolean;
};

export function CtaBanner({
  id,
  watermark,
  title = "Take the full advantage of going paper-less now.",
  description,
  className,
  inset = false,
  embedded = false,
  plain = false,
}: CtaBannerProps) {
  const defaultDescription =
    "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations";

  const titleContent =
    title === "Take the full advantage of going paper-less now." ? (
      <>
        Take the full advantage of
        <br />
        going paper-less now.
      </>
    ) : (
      title
    );

  const content = (
    <div
      className={cn(
        "relative z-10 flex flex-col justify-center gap-8 md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-16",
        !plain && "h-full",
      )}
    >
      <div className="min-w-0 md:max-w-[58%] lg:max-w-[55%]">
        <h2 className={ctaBannerTitle}>
          {titleContent}
        </h2>
        <p className={ctaBannerDescription}>
          {description ?? defaultDescription}
        </p>
      </div>

      <div className="relative z-20 flex shrink-0 items-center gap-4 sm:gap-5 md:ml-auto">
        <Button href="#contact" variant="outline" className={heroCtaOutline}>
          Contact us
        </Button>
        <Button href="#contact" variant="primary" className={heroCtaPrimary}>
          Request demo
        </Button>
      </div>
    </div>
  );

  if (plain) {
    return (
      <section
        id={id}
        className={cn("relative py-12 lg:py-16", className)}
      >
        <Container>
          <FadeIn>{content}</FadeIn>
        </Container>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={cn(
        "relative",
        embedded ? "py-8 lg:py-10" : "py-12 lg:py-16",
        inset && "px-5 sm:px-8 lg:px-12",
        className,
      )}
    >
      <Container className={cn(inset && "!px-0")}>
        <FadeIn>
          <div
            className="relative min-h-[200px] overflow-hidden rounded-[28px] px-8 py-10 sm:px-12 sm:py-11 lg:min-h-[212px] lg:px-14 lg:py-12 xl:px-16"
            style={{
              backgroundColor: "#050a0e",
              backgroundImage:
                "radial-gradient(ellipse 90% 130% at 6% 22%, rgba(18, 44, 78, 0.55) 0%, transparent 55%)",
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute right-[-4%] top-1/2 z-[1] -translate-y-[48%] select-none font-sans text-[clamp(13rem,28vw,22rem)] font-bold leading-none tracking-[-0.04em]"
              style={{
                WebkitTextStroke: "1.5px rgba(0,102,255,0.34)",
                color: "transparent",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, black 14%, black 52%, rgba(0,0,0,0.45) 72%, transparent 90%)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, black 14%, black 52%, rgba(0,0,0,0.45) 72%, transparent 90%)",
              }}
            >
              {watermark}
            </span>
            {content}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
