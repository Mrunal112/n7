import Image from "next/image";
import { images, type SolutionIconKey } from "@/lib/images";
import { cn } from "@/lib/utils";

type IconProps = { className?: string };

export function SolutionIcon({
  name,
  className,
}: {
  name: SolutionIconKey;
  className?: string;
}) {
  return (
    <Image
      src={images.solutionIcons[name]}
      alt=""
      width={56}
      height={56}
      className={cn("h-12 w-12 object-contain", className)}
      aria-hidden
    />
  );
}

/**
 * Decorative blue 2x2 "X" pattern used as the featured insight / case-study
 * card image. Matches the Figma design tile.
 */
export function InsightGraphic({ className }: IconProps) {
  return (
    <div
      className={cn(
        "relative flex h-full min-h-[200px] w-full items-center justify-center overflow-hidden bg-[#091830]",
        className,
      )}
    >
      <div className="grid grid-cols-2 gap-4 p-8 sm:gap-5 sm:p-10">
        {[0, 1, 2, 3].map((i) => (
          <svg
            key={i}
            width="64"
            height="64"
            viewBox="0 0 64 64"
            className="h-14 w-14 sm:h-16 sm:w-16"
            fill="none"
            aria-hidden
          >
            <path
              d="M16 6 C 24 16, 24 16, 32 16 C 40 16, 40 16, 48 6 L 58 16 C 48 24, 48 24, 48 32 C 48 40, 48 40, 58 48 L 48 58 C 40 48, 40 48, 32 48 C 24 48, 24 48, 16 58 L 6 48 C 16 40, 16 40, 16 32 C 16 24, 16 24, 6 16 Z"
              fill="#1E9CFF"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
