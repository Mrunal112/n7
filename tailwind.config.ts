import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#050A0E",
          900: "#0A1018",
          800: "#0B0E14",
          700: "#050A0E",
        },
        brand: {
          blue: "#0066FF",
          cyan: "#00AEEF",
          "cyan-light": "#00D2FF",
          "blue-dark": "#0052D4",
        },
        muted: {
          DEFAULT: "#94A3B8",
          light: "#A1A1AA",
          dark: "#4B5563",
        },
        surface: {
          light: "#F4F9FF",
          glass: "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "monospace",
        ],
      },
      maxWidth: {
        container: "1320px",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 60% 70% at 70% 50%, rgba(0, 102, 255, 0.35) 0%, transparent 70%)",
        "solutions-glow":
          "radial-gradient(circle at 100% 100%, rgba(0, 174, 239, 0.18) 0%, transparent 55%)",
        "btn-primary":
          "linear-gradient(90deg, #2D60FF 0%, #4B7FFF 40%, #6B5CFF 100%)",
        "btn-demo":
          "linear-gradient(90deg, #3B8BFF 0%, #0066FF 55%, #0052D4 100%)",
        "logo-gradient":
          "linear-gradient(180deg, #00D2FF 0%, #0066FF 50%, #0052D4 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.24)",
        nav: "0 4px 24px rgba(0, 0, 0, 0.4)",
        card: "0 4px 40px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
