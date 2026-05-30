"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Figma: 716.46×47, radius 12, padding 9/10, 160px after logo, top 31 */
const NAV_WIDTH = 716.4559326171875;
const NAV_HEIGHT = 47;
const NAV_TOP = 31;
function NavChevron() {
  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      className="ml-1 shrink-0 opacity-90"
      aria-hidden
    >
      <path
        d="M1 1L4 3.5L7 1"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-[padding] duration-300"
      style={{ paddingTop: scrolled ? Math.max(NAV_TOP - 14, 12) : NAV_TOP }}
    >
      {/* Desktop — matches Figma: logo (Inter) | 160px | nav + CTA (mono) */}
      <nav
        className={cn(
          "relative hidden box-border w-full items-center rounded-[12px]",
          "border border-white/20 bg-[#1c1c1c]/95 backdrop-blur-md",
          "px-[10px] py-[9px] lg:flex",
          "transition-shadow duration-300",
          scrolled
            ? "shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
            : "shadow-[0_8px_32px_rgba(0,0,0,0.35)]",
        )}
        style={{
          maxWidth: NAV_WIDTH,
          height: NAV_HEIGHT,
        }}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="shrink-0 font-sans text-[22px] font-bold leading-none tracking-[-0.02em] text-white"
        >
          N7
        </Link>

        <div
          className="flex min-w-0 flex-1 items-center justify-between"
          style={{ marginLeft: 160 }}
        >
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group flex items-center font-sans text-[11px] font-medium uppercase leading-none tracking-[0.14em] text-white transition hover:text-white/80"
                >
                  {link.label}
                  {link.hasDropdown && <NavChevron />}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className={cn(
              "inline-flex h-[29px] shrink-0 items-center justify-center rounded-[8px]",
              "border border-white bg-transparent px-[14px]",
              "font-sans text-[10px] font-medium uppercase leading-none tracking-[0.14em] text-white",
              "transition hover:bg-white/[0.06]",
            )}
          >
            Request demo
          </Link>
        </div>
      </nav>

      {/* Mobile */}
      <div
        className={cn(
          "flex w-full max-w-[716px] items-center justify-between rounded-[12px] border lg:hidden",
          "px-4 py-2.5 transition-all duration-300",
          scrolled || menuOpen
            ? "border-white/10 bg-[#0a0e14]/55 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-lg"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="/" className="font-sans text-xl font-bold text-white">
          N7
        </Link>
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/25"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={cn(
                "h-0.5 w-full bg-white transition",
                menuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-white transition",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-white transition",
                menuOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute left-4 right-4 top-[calc(31px+47px+8px)] origin-top animate-[fadeIn_.18s_ease-out] rounded-[12px] border border-white/15 bg-[#1c1c1c]/98 p-6 backdrop-blur-xl lg:hidden">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block font-sans text-sm font-medium uppercase tracking-[0.14em] text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button
              href="#contact"
              variant="outline"
              className="w-full !rounded-[8px] !px-[14px] !py-2 !text-[10px] !font-medium !tracking-[0.14em]"
            >
              Request demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
