import { cn } from "@/lib/utils";
import { spacing } from "@/lib/section-styles";

type LogoMarkProps = { className?: string };

/** Concentric circles — shell / target */
function ShellsMark({ className }: LogoMarkProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <circle cx="10" cy="10" r="7.5" strokeWidth="1.25" />
      <circle cx="10" cy="10" r="5" strokeWidth="1.25" />
      <circle cx="10" cy="10" r="2.5" strokeWidth="1.25" />
      <circle cx="10" cy="10" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Shield with inner facet */
function SmartFinderMark({ className }: LogoMarkProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path d="M10 2.5 15.5 5.2v4.8c0 3.2-2.8 6.2-5.5 7.5-2.7-1.3-5.5-4.3-5.5-7.5V5.2L10 2.5z" />
      <path
        d="M10 6.5 12.8 8v3.2L10 12.5 7.2 11.2V8L10 6.5z"
        opacity="0.35"
      />
    </svg>
  );
}

/** Circle with lightning bolt */
function ZoomerrMark({ className }: LogoMarkProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <circle
        cx="10"
        cy="10"
        r="7.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M11.2 5.5 8.2 10.2h2.4l-.8 4.3 4.2-5.5H11l.2-3.5z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Three parallel diagonal bars */
function ArtVenueMark({ className }: LogoMarkProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <rect x="4" y="3" width="3" height="14" rx="0.5" transform="rotate(-18 5.5 10)" />
      <rect x="8.5" y="3" width="3" height="14" rx="0.5" transform="rotate(-18 10 10)" />
      <rect x="13" y="3" width="3" height="14" rx="0.5" transform="rotate(-18 14.5 10)" />
    </svg>
  );
}

/** Vertical bar + left semicircle (D shape) */
function KontrastrMark({ className }: LogoMarkProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path d="M6 4h2.5v12H6V4z" />
      <path d="M8.5 4c3.3 0 6 2.7 6 6s-2.7 6-6 6V4z" />
    </svg>
  );
}

/** Vertical bars — wave / equalizer */
function WavesMarathonMark({ className }: LogoMarkProps) {
  return (
    <svg
      className={className}
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="currentColor"
      aria-hidden
    >
      <rect x="1" y="8" width="2" height="9" rx="0.5" />
      <rect x="4.5" y="5" width="2" height="12" rx="0.5" />
      <rect x="8" y="3" width="2" height="14" rx="0.5" />
      <rect x="11.5" y="6" width="2" height="11" rx="0.5" />
      <rect x="15" y="4" width="2" height="13" rx="0.5" />
      <rect x="18.5" y="7" width="2" height="10" rx="0.5" />
    </svg>
  );
}

const partners = [
  {
    name: "SHELLS",
    Mark: ShellsMark,
    className: "text-[12px] font-semibold uppercase tracking-wide",
  },
  {
    name: "SmartFinder",
    Mark: SmartFinderMark,
    className: "text-[12px] font-semibold",
  },
  {
    name: "Zoomerr",
    Mark: ZoomerrMark,
    className: "text-[12px] font-semibold",
  },
  {
    name: "ArtVenue",
    Mark: ArtVenueMark,
    className: "text-[12px] font-semibold",
  },
  {
    name: "kontrastr",
    Mark: KontrastrMark,
    className: "text-[12px] font-semibold lowercase",
  },
  {
    name: "WAVESMARATHON",
    Mark: WavesMarathonMark,
    className: "text-[12px] font-semibold uppercase tracking-wide",
  },
] as const;

export function TrustedByLogos({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      <p className="shrink-0 text-[12px] font-normal leading-none text-[#6b7280]">
        Trusted By:
      </p>
      <ul
        className={cn(
          "flex flex-wrap items-center",
          spacing.trustedByLogos,
        )}
      >
        {partners.map(({ name, Mark, className: nameClass }) => (
          <li key={name}>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 text-slate-400 transition hover:text-slate-300",
                nameClass,
              )}
            >
              <Mark className="h-[18px] w-[18px] shrink-0" />
              {name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
