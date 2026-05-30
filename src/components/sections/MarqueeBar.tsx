const segments = [
  { type: "logo" as const, label: "N7" },
  { type: "star" as const },
  { type: "text" as const, label: "Say 👋 to the new way of banking" },
  { type: "star" as const },
  { type: "logo" as const, label: "CB7" },
  { type: "star" as const },
  { type: "text" as const, label: "Say 👋 to the new way of banking" },
];

function MarqueeTrack() {
  return (
    <>
      {segments.map((seg, i) => (
        <span
          key={i}
          className="mx-8 inline-flex shrink-0 items-center gap-2 text-xl font-medium sm:text-2xl"
        >
          {seg.type === "logo" ? (
            <span className="font-bold text-brand-blue">{seg.label}</span>
          ) : seg.type === "star" ? (
            <span className="text-slate-400">★</span>
          ) : (
            <span className="text-slate-900">{seg.label}</span>
          )}
        </span>
      ))}
    </>
  );
}

export function MarqueeBar() {
  return (
    <div className="relative py-2">
      {/* Fade from dark into marquee */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-16 h-16 bg-gradient-to-b from-[var(--page-bg)] to-transparent"
        aria-hidden
      />
      <div className="overflow-hidden bg-white/95 py-5 shadow-[0_0_80px_rgba(0,102,255,0.06)] sm:py-6">
        <div className="marquee-pause flex w-max animate-marquee items-center">
          <div className="flex shrink-0 items-center">
            <MarqueeTrack />
          </div>
          <div className="flex shrink-0 items-center" aria-hidden>
            <MarqueeTrack />
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-20 h-20 bg-gradient-to-t from-[#eaf3fb] to-transparent"
        aria-hidden
      />
    </div>
  );
}
