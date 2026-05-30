/**
 * Frame 74 — one continuous page: shared base + soft glow layers.
 * Sections stay transparent; no per-section background swaps.
 */
export function PageCanvas({ children }: { children: React.ReactNode }) {
  return (
    <main className="page-canvas relative min-h-screen">
      <div
        className="pointer-events-none absolute inset-0 min-h-full overflow-hidden"
        aria-hidden
      >
        {/* Hero — right */}
        <div className="absolute right-[-8%] top-[4%] h-[min(70vh,640px)] w-[min(65vw,720px)] rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.42)_0%,rgba(0,70,200,0.12)_45%,transparent_72%)] blur-[72px]" />
        {/* Solutions / upper-mid */}
        <div className="absolute left-[-12%] top-[22%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(0,90,200,0.14)_0%,transparent_70%)] blur-[64px]" />
        {/* Core banking — right */}
        <div className="absolute right-[-5%] top-[38%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.22)_0%,transparent_68%)] blur-[80px]" />
        {/* CB7 features — left */}
        <div className="absolute left-[5%] top-[52%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,80,180,0.1)_0%,transparent_70%)] blur-[56px]" />
        {/* Insights / case studies — lower */}
        <div className="absolute right-[10%] top-[72%] h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.16)_0%,transparent_70%)] blur-[72px]" />
        <div className="absolute left-[-8%] top-[82%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(0,70,160,0.08)_0%,transparent_70%)] blur-[56px]" />
      </div>

      <div className="relative z-10">{children}</div>
    </main>
  );
}
