import { cn } from "@/lib/utils";
import type { SolutionIconKey } from "@/lib/images";

type IconProps = { className?: string };

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

/** Circular swirling motif */
function CoreBankingIcon({ className }: IconProps) {
  return (
    <svg className={className} width="44" height="44" viewBox="0 0 44 44" aria-hidden>
      <path
        {...strokeProps}
        d="M22 8c-4 0-7 3.2-7 7.2 0 2.5 1.2 4.8 3 6.2-0.5 1-0.8 2.1-0.8 3.3 0 3.8 3.1 6.8 6.8 6.8s6.8-3 6.8-6.8c0-1.2-0.3-2.3-0.8-3.3 1.8-1.4 3-3.7 3-6.2C29 11.2 26 8 22 8z"
      />
      <path {...strokeProps} d="M22 14v16M14 22h16" opacity="0.5" />
    </svg>
  );
}

/** Four-lobed cross / clover */
function DigitalBankingIcon({ className }: IconProps) {
  return (
    <svg className={className} width="44" height="44" viewBox="0 0 44 44" aria-hidden>
      <path
        {...strokeProps}
        d="M22 6 C28 14, 28 14, 30 16 C32 18, 32 18, 38 22 C32 26, 32 26, 30 28 C28 30, 28 30, 22 38 C16 30, 16 30, 14 28 C12 26, 12 26, 6 22 C12 18, 12 18, 14 16 C16 14, 16 14, 22 6 Z"
      />
    </svg>
  );
}

/** Overlapping diamond outlines */
function OpenBankingIcon({ className }: IconProps) {
  return (
    <svg className={className} width="44" height="44" viewBox="0 0 44 44" aria-hidden>
      <rect
        {...strokeProps}
        x="10"
        y="10"
        width="18"
        height="18"
        rx="2"
        transform="rotate(45 19 19)"
      />
      <rect
        {...strokeProps}
        x="16"
        y="16"
        width="18"
        height="18"
        rx="2"
        transform="rotate(45 25 25)"
      />
    </svg>
  );
}

/** Four chevrons pointing inward */
function LoanOrigIcon({ className }: IconProps) {
  return (
    <svg className={className} width="44" height="44" viewBox="0 0 44 44" aria-hidden>
      <path {...strokeProps} d="M22 8 L26 18 L22 14 L18 18 Z" />
      <path {...strokeProps} d="M36 22 L26 26 L30 22 L26 18 Z" />
      <path {...strokeProps} d="M22 36 L18 26 L22 30 L26 26 Z" />
      <path {...strokeProps} d="M8 22 L18 18 L14 22 L18 26 Z" />
    </svg>
  );
}

/** Double-lined cross shape */
function LoanMgmtIcon({ className }: IconProps) {
  return (
    <svg className={className} width="44" height="44" viewBox="0 0 44 44" aria-hidden>
      <path
        {...strokeProps}
        d="M14 8 C20 16, 20 16, 22 16 C24 16, 24 16, 30 8 L36 14 C28 20, 28 20, 28 22 C28 24, 28 24, 36 30 L30 36 C24 28, 24 28, 22 28 C20 28, 20 28, 14 36 L8 30 C16 24, 16 24, 16 22 C16 20, 16 20, 8 14 Z"
      />
    </svg>
  );
}

const wireIcons: Record<
  SolutionIconKey,
  (props: IconProps) => JSX.Element
> = {
  core: CoreBankingIcon,
  digital: DigitalBankingIcon,
  open: OpenBankingIcon,
  "loan-orig": LoanOrigIcon,
  "loan-mgmt": LoanMgmtIcon,
};

export function SolutionWireIcon({
  name,
  className,
}: {
  name: SolutionIconKey;
  className?: string;
}) {
  const Icon = wireIcons[name];
  return (
    <Icon className={cn("h-11 w-11 shrink-0 text-white/85", className)} />
  );
}
