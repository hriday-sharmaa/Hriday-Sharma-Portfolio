import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#171717",
          50: "#262626",
          100: "#202020",
          200: "#1a1a1a",
          300: "#171717",
          400: "#121212",
          900: "#0a0a0a",
        },
        ivory: {
          DEFAULT: "#F5F3EE",
          muted: "#E0DDD5",
          dim: "#C4C1B9",
        },
        lime: {
          DEFAULT: "#C6F36B",
          hover: "#d2f884",
          muted: "#9ec94c",
          glow: "rgba(198, 243, 107, 0.18)",
        },
        softgrey: {
          DEFAULT: "#A5A5A5",
          light: "#BFBFBF",
          dark: "#666666",
          border: "rgba(245, 243, 238, 0.08)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        editorial: "0.22em",
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "float-gentle": "floatGentle 7s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        floatGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
