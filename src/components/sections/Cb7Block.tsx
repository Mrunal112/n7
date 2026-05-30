import { CoreBankingSection } from "@/components/sections/CoreBankingSection";
import { Cb7FeaturesSection } from "@/components/sections/Cb7FeaturesSection";

/** Frame 74 — CB7 hero + features with shared watermark */
export function Cb7Block() {
  return (
    <div className="relative overflow-hidden">
      <span
        className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 select-none font-sans text-[clamp(10rem,32vw,22rem)] font-bold leading-none watermark-text opacity-[0.35]"
        aria-hidden
      >
        CB7
      </span>
      <CoreBankingSection />
      <Cb7FeaturesSection />
    </div>
  );
}
