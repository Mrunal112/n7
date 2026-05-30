import { cn } from "@/lib/utils";

type CheckListProps = {
  items: readonly string[];
  className?: string;
  dark?: boolean;
};

export function CheckList({ items, className, dark = false }: CheckListProps) {
  return (
    <ul className={cn("space-y-4", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#2563eb]"
            aria-hidden
          >
            <svg
              width="9"
              height="7"
              viewBox="0 0 10 8"
              fill="none"
              className="text-white"
            >
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={cn(
              "text-[13px] leading-relaxed",
              dark ? "text-white/90" : "text-[#374151]",
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
