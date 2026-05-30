"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InsightGraphic } from "@/components/icons/ServiceIcons";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import { PageSection } from "@/components/ui/PageSection";
import { caseStudies } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CASE_STUDY_CARD_HEIGHT =
  "h-[360px] sm:h-[380px] lg:h-[400px]";

const SLIDE_OFFSET = 72;

const slideTransition = {
  duration: 0.48,
  ease: [0.22, 1, 0.36, 1] as const,
};

const centerSlideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? SLIDE_OFFSET : -SLIDE_OFFSET,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -SLIDE_OFFSET : SLIDE_OFFSET,
    opacity: 0,
    scale: 0.97,
  }),
};

const sideSlideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? -28 : 28,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? 28 : -28,
    opacity: 0,
  }),
};

function CaseStudyCard({
  study,
  className,
  inactive = false,
}: {
  study: (typeof caseStudies)[number];
  className?: string;
  inactive?: boolean;
}) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(10,16,24,0.55)] backdrop-blur-sm",
        CASE_STUDY_CARD_HEIGHT,
        inactive && "pointer-events-none",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-full flex-col transition-[transform,opacity] duration-500 sm:flex-row",
          inactive && "scale-[0.92] opacity-35 blur-[1px]",
        )}
      >
        <div className="h-[180px] shrink-0 sm:h-full sm:w-[42%]">
          <InsightGraphic className="h-full min-h-0" />
        </div>
        <div className="flex min-h-0 flex-1 flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div className="min-h-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-cyan">
              {study.category}
            </p>
            <h3 className="mt-4 line-clamp-2 min-h-[3.5rem] text-xl font-medium leading-snug text-white lg:min-h-[4.5rem] lg:text-2xl">
              {study.title}
            </h3>
            <p className="mt-4 flex items-center gap-2 text-sm text-[#94a3b8]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/20 text-xs">
                ⚡
              </span>
              {study.client}
            </p>
          </div>
          {inactive ? (
            <div className="mt-8 h-10 shrink-0" aria-hidden />
          ) : (
            <Link
              href="#case-studies"
              className="mt-8 inline-flex h-10 w-full shrink-0 items-center justify-center rounded-sm border border-white/30 text-[10px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-white/[0.06] sm:w-auto sm:min-w-[140px]"
            >
              Read more
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function CarouselViewport({
  activeIndex,
  direction,
  className,
}: {
  activeIndex: number;
  direction: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        CASE_STUDY_CARD_HEIGHT,
        className,
      )}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={centerSlideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          className="absolute inset-0 h-full w-full will-change-transform"
        >
          <CaseStudyCard study={caseStudies[activeIndex]} className="h-full" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function SidePreviewCard({
  studyIndex,
  direction,
}: {
  studyIndex: number;
  direction: number;
}) {
  return (
    <div
      className={cn("relative overflow-hidden", CASE_STUDY_CARD_HEIGHT)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={studyIndex}
          custom={direction}
          variants={sideSlideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ ...slideTransition, duration: 0.42 }}
          className="absolute inset-0 will-change-transform"
        >
          <CaseStudyCard study={caseStudies[studyIndex]} inactive />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function CaseStudiesSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = caseStudies.length;

  const goTo = (index: number) => {
    if (index === active) return;
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const prev = () => goTo((active - 1 + total) % total);
  const next = () => goTo((active + 1) % total);

  const prevIndex = (active - 1 + total) % total;
  const nextIndex = (active + 1) % total;

  return (
    <PageSection id="case-studies">
      <Container>
        <FadeIn>
          <h2 className="text-center text-[2rem] font-medium tracking-[-0.02em] text-white sm:text-[2.35rem] lg:text-[2.5rem]">
            Our Case Studies
          </h2>
        </FadeIn>

        <div className="mt-12 lg:mt-14">
          <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,48rem)_minmax(0,1fr)] lg:items-stretch lg:gap-6">
            <SidePreviewCard studyIndex={prevIndex} direction={direction} />
            <CarouselViewport activeIndex={active} direction={direction} />
            <SidePreviewCard studyIndex={nextIndex} direction={direction} />
          </div>

          <div className="lg:hidden">
            <CarouselViewport activeIndex={active} direction={direction} />
          </div>

          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-lg text-white transition hover:border-brand-cyan hover:bg-white/5"
              aria-label="Previous case study"
            >
              ←
            </button>
            <div className="flex gap-2.5">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full border border-brand-cyan transition",
                    i === active ? "bg-brand-cyan" : "bg-transparent",
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-lg text-white transition hover:border-brand-cyan hover:bg-white/5"
              aria-label="Next case study"
            >
              →
            </button>
          </div>

          <div className="mt-8 flex justify-end">
            <LearnMoreLink href="#case-studies">View all →</LearnMoreLink>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
