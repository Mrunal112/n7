# N7 Banking Landing Page

Pixel-responsive marketing site for **N7** / **CB7**, implemented from the Figma design ([N7 – Figma](https://www.figma.com/design/ktuyhOppLLgLFCZwzQCOBk/N7?node-id=76-443)) using **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Quick start

**Requirements:** Node.js **18+** recommended (Node 16 may work with Next 14).

```bash
cd /Users/mrunal.munjamkar@iqvia.com/Desktop/Interm
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # ESLint
```

## What’s included

| Section | Description |
|--------|-------------|
| Hero | Headline, CTAs, glassmorphism cards, trusted-by logos |
| Solutions | 5 product cards with icons and learn-more links |
| Core Banking | CB7 hero + AML dashboard laptop mockup |
| CB7 Features | Dashboard image + checklist + CTA |
| Marquee | Animated brand ticker |
| Digital Banking | Light theme, phone mockups, compliance lists |
| Branchless | Profile screen + N7 CTA banner |
| Insights | Article grid |
| Case Studies | Carousel with prev/next |
| Footer | Offices, link columns, legal |

## Documentation

See **[docs/DOCUMENTATION.md](./docs/DOCUMENTATION.md)** for architecture, design tokens, breakpoints, and how to swap Figma assets.

## Project structure

```
src/
├── app/              # Next.js App Router (layout, page, globals)
├── components/
│   ├── hero/         # Hero + floating cards
│   ├── layout/       # Header, Footer
│   ├── mobile/       # Phone mockup UI
│   ├── sections/     # Page sections
│   └── ui/           # Button, Container, FadeIn, etc.
└── lib/              # Data + utilities
public/images/        # Reference screenshots from Figma
```

## Assets

Figma exports are wired in `public/images/` (see `public/images/ASSETS.md` and `src/lib/images.ts`). Raw exports are archived in `public/images-1/`.

## License

Private / internal — Linktia Infosystems Limited.
