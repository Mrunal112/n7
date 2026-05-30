/**
 * Central image paths for exported Figma assets (public/images).
 * Source exports live in public/images-1/ for reference.
 */
export const images = {
  hero: {
    composite: "/images/hero-composite.png",
    photo: "/images/hero-photo.png",
  },
  coreBanking: {
    laptopAml: "/images/laptop-aml.png",
    amlDashboard: "/images/aml-dashboard.png",
  },
  cb7: {
    dashboard: "/images/cb7-dashboard.png",
    weeklyDashboard: "/images/cb7-weekly-dashboard.png",
  },
  phones: {
    home: "/images/phone-home.png",
    analytics: "/images/phone-analytics.png",
    profile: "/images/phone-profile.png",
    promo: "/images/phones-promo.png",
  },
  insights: {
    featured: "/images/insight-featured.png",
    compact: "/images/insight-article-card.png",
  },
  brand: {
    logoN7: "/images/logo-n7.png",
    logoN7Large: "/images/logo-n7-large.png",
  },
  solutionIcons: {
    core: "/images/icon-core-banking.png",
    digital: "/images/icon-digital-banking.png",
    open: "/images/icon-open-banking.png",
    "loan-orig": "/images/icon-loan-orig.png",
    "loan-mgmt": "/images/icon-loan-mgmt.png",
  },
} as const;

export type SolutionIconKey = keyof typeof images.solutionIcons;
