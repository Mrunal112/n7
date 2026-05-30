# N7 Landing Page — Technical Documentation

## 1. Overview

This project implements the **N7** marketing landing page from the Figma file **N7** (frame node `76-443`). The goal is a responsive, maintainable frontend that matches the design’s layout, typography, color system, and interaction patterns across desktop, tablet, and mobile.

**Stack**

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion |
| Font | Inter (Google Fonts) |

---

## 2. Design tokens

Tokens live in `tailwind.config.ts` and `src/app/globals.css`.

| Token | Value | Usage |
|-------|-------|--------|
| `navy` | `#05070A` | Page background |
| `navy-900` | `#020608` | Section backgrounds, CTA blocks |
| `brand-blue` | `#0066FF` | Primary actions, accents |
| `brand-cyan` | `#00AEEF` | Links, labels |
| `muted` | `#94A3B8` | Body on dark sections |
| `surface-light` | `#F4F9FF` | Light sections |
| `btn-primary` | Blue → purple gradient | Light-section CTA |
| `btn-demo` | Blue vertical gradient | Dark-section CTA |

**Effects**

- **Glass cards:** `glass-card` utility — `backdrop-blur`, semi-transparent border/background.
- **Watermarks:** `watermark-text` — outlined “CB7” / “N7” behind CTAs.
- **Glows:** `bg-hero-glow`, `bg-solutions-glow` radial gradients.

---

## 3. Responsive breakpoints

Tailwind defaults:

| Breakpoint | Min width | Typical layout |
|------------|-----------|----------------|
| (default) | &lt; 640px | Single column, hamburger nav |
| `sm` | 640px | Slightly larger type, 2-col grids start |
| `lg` | 1024px | Two-column heroes, full nav bar |
| `max-w-container` | 1280px | Content max width |

**Mobile-first patterns**

- Hero: text above image.
- Solutions: heading stacks above 1- then 2-column grid.
- Digital banking: text → phone → checklist per row.
- Footer: logo, offices, and links stack.

---

## 4. Component architecture

```
page.tsx
├── Header (fixed, blur on scroll, mobile menu)
├── HeroSection
├── SolutionsSection
├── CoreBankingSection
├── Cb7FeaturesSection → CtaBanner (CB7)
├── MarqueeBar
├── DigitalBankingSection
├── BranchlessSection → CtaBanner (N7, rounded)
├── InsightsSection
├── CaseStudiesSection (client carousel)
└── Footer
```

### Reusable UI (`src/components/ui/`)

| Component | Purpose |
|-----------|---------|
| `Button` | `primary`, `outline`, `ghost`, `gradient` variants |
| `Container` | Centered max-width wrapper with horizontal padding |
| `CheckList` | Blue checkmark bullets |
| `CtaBanner` | Reusable dark CTA with watermark |
| `FadeIn` | Scroll-triggered entrance (Framer Motion) |
| `LearnMoreLink` | Cyan link with arrow hover |

### Content data (`src/lib/data.ts`)

Navigation, solutions, feature lists, articles, case studies, and footer content are centralized for easy updates without touching layout code.

---

## 5. Animations & interactions

| Interaction | Implementation |
|-------------|----------------|
| Scroll fade-in | `FadeIn` + `whileInView` |
| Header | Background blur/shadow after 24px scroll |
| Marquee | CSS `animate-marquee` (28s loop) |
| Learn more | Arrow `translateX` on hover |
| Case studies | State-driven carousel, dot navigation |
| Buttons | `brightness-110` / border hover |

---

## 6. Assets & Figma workflow

All exported assets live in `public/images/` with stable filenames. Raw exports remain in `public/images-1/`. See `public/images/ASSETS.md` for the full rename map.

**Central registry:** `src/lib/images.ts` — update paths here when replacing files.

| Section | Image key | File |
|---------|-----------|------|
| Hero | `images.hero.composite` | `hero-composite.png` |
| Core Banking | `images.coreBanking.laptopAml` | `laptop-aml.png` |
| CB7 Features | `images.cb7.dashboard` | `cb7-dashboard.png` |
| Digital Banking | `images.phones.home` / `.analytics` | `phone-home.png`, `phone-analytics.png` |
| Branchless | `images.phones.profile` | `phone-profile.png` |
| Insights (grid) | `images.insights.articleCard` | `insight-article-card.png` |

**To replace an asset:** Export from Figma → overwrite the file in `public/images/` (keep the same name) → refresh the browser.

**Optional — Figma API (advanced):**  
[Personal access token](https://www.figma.com/developers/api#access-tokens) for programmatic specs.

---

## 7. Performance

- `next/image` for photos with `sizes` and priority on LCP hero image.
- Framer Motion animations use `viewport: { once: true }` to avoid repeat work.
- CSS mockups for phones avoid large image payloads until real exports exist.
- Static marketing page — no API routes; suitable for static export if needed.

---

## 8. Accessibility

- Semantic landmarks: `header`, `main`, `footer`, `section`, `nav`, `article`.
- Mobile menu: `aria-expanded`, `aria-label`.
- Carousel controls: labeled previous/next buttons.
- Focusable links and buttons; consider adding visible `:focus-visible` rings in a future pass.

---

## 9. Customization checklist

- [x] Figma exports integrated (`public/images/`)
- [ ] Wire `REQUEST DEMO` / `CONTACT US` to real forms or CRM URLs
- [ ] Add dropdown panels for Solutions / Resources nav items
- [ ] Connect Insights / Case Studies to CMS or markdown

---

## 10. Troubleshooting

| Issue | Fix |
|-------|-----|
| `npm install` engine warning | Upgrade to Node 18+ (`nvm install 18`) |
| Images blocked | Check `next.config.mjs` `remotePatterns` for external URLs |
| Build fails on types | Run `npm run build` and fix paths under `@/*` |

---

## 11. Contact & handoff

For design updates, re-export changed frames from Figma and note the section name (e.g. “Hero”, “Solutions”). Update `src/lib/data.ts` for copy changes and `tailwind.config.ts` if brand colors shift.
