/** Frame 74 — shared page chrome & spacing rhythm */
export const pageBg = "#050a0e" as const;

/** Vertical spacing tokens (matches Frame 74 mockup) */
export const spacing = {
  /** Header → hero headline */
  heroTop: "pt-12 sm:pt-14 lg:pt-16 xl:pt-20",
  /** Subcopy → CTAs */
  heroCtaTop: "mt-8 lg:mt-9",
  /** CTAs → Trusted By (large gap in mockup) */
  trustedByTop: "mt-16 sm:mt-20 lg:mt-24 xl:mt-28",
  /** Trusted By → Solutions heading */
  solutionsTop: "pt-16 sm:pt-20 lg:pt-20 xl:pt-24",
  /** Solutions left ↔ right grid gutter */
  solutionsGutter: "lg:gap-x-24 xl:gap-x-32",
  /** Solutions card grid */
  solutionsGrid: "gap-x-14 gap-y-16 sm:gap-x-16 lg:gap-y-20",
  /** Top padding inside each solution card */
  solutionsCard: "pt-5 sm:pt-6 lg:pt-7",
  solutionsCardRow2: "sm:pt-10 lg:pt-12",
  /** Trusted By logo row */
  trustedByLogos: "gap-x-6 gap-y-3 sm:gap-x-8 lg:gap-x-10",
} as const;

export const heroCtaPrimary =
  "!min-h-[48px] !rounded-[12px] !border-transparent !bg-[linear-gradient(90deg,#5BA3FF_0%,#2D7BFF_42%,#0066FF_100%)] !px-9 !py-3.5 !text-[11px] !font-semibold !shadow-[0_4px_32px_rgba(0,102,255,0.45)] hover:!brightness-105";

export const heroCtaOutline =
  "!min-h-[48px] !rounded-[12px] !border !border-white !bg-transparent !px-9 !py-3.5 !text-[11px] !font-semibold hover:!bg-white/[0.06]";

export const viewAllButton =
  "inline-flex h-10 items-center justify-center rounded-sm border border-white bg-transparent px-6 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition hover:bg-white/[0.06]";

/** Solutions left column — rectangular outline CTA */
export const solutionsRequestDemo =
  "!min-h-[44px] !rounded-[12px] !border !border-white !bg-transparent !px-8 !py-3 !text-[11px] !font-semibold !tracking-[0.14em] hover:!bg-white/[0.06]";

/** CTA banner — Frame 74 paper-less block */
export const ctaBannerTitle =
  "max-w-[520px] font-medium leading-[1.22] tracking-[-0.025em] text-white text-[1.875rem] sm:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem]";

export const ctaBannerDescription =
  "mt-4 max-w-[540px] text-[15px] font-normal leading-[1.65] text-[#94a3b8] lg:text-[16px]";
