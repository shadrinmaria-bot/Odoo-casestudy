import type { Config } from "tailwindcss";

/**
 * Design tokens — matched to the live Wix Studio site (dark theme with a
 * mint-green accent), read from reference screenshots. Adjust the hex
 * values here to fine-tune; every component reads from these tokens.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // page + surfaces (dark)
        paper: "#0C0C0E",
        surface: "#141418",
        "surface-alt": "#111114",
        // text
        ink: "#FFFFFF",
        muted: "#A6A6AE",
        faint: "#6C6C76",
        // mint-green accent from the reference (arrows, highlights, links)
        accent: {
          DEFAULT: "#5FE0B0",
          dark: "#43C795",
          soft: "rgba(95, 224, 176, 0.12)",
          on: "#08130E", // near-black text for use on top of the mint accent
        },
        // incident/badge states (tuned for dark surfaces)
        state: {
          danger: "#F87171",
          "danger-soft": "rgba(248, 113, 113, 0.14)",
          warning: "#FBBF24",
          "warning-soft": "rgba(251, 191, 36, 0.14)",
          success: "#34D399",
          "success-soft": "rgba(52, 211, 153, 0.14)",
        },
        line: "#26262C",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        badge: "999px",
      },
      maxWidth: {
        content: "80rem",
      },
    },
  },
  plugins: [],
};
export default config;
