import Image from "next/image";
import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Slightly larger hero phone in the top row */
  size?: "default" | "hero";
};

const sizeClasses = {
  default:
    "w-[min(100%,220px)] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px]",
  hero: "w-[min(100%,240px)] sm:w-[260px] md:w-[280px] lg:w-[300px] xl:w-[320px]",
};

export function PhoneMockup({
  src,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 240px, 300px",
  size = "default",
}: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto", sizeClasses[size], className)}>
      <Image
        src={src}
        alt={alt}
        width={520}
        height={1060}
        className="h-auto w-full"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
