import type { Config } from "tailwindcss";

/**
 * Design tokens.
 *
 * NOTE: the original Wix Studio site could not be fetched from this
 * environment (network policy), so these values are documented
 * assumptions chosen to fit an Odoo-themed case study. Adjust the hex
 * values here to match the original site exactly — every component
 * reads from these tokens.
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
        // page + surfaces
        paper: "#FAFAF8",
        surface: "#FFFFFF",
        "surface-alt": "#F4F1EF",
        // text
        ink: "#1C1A19",
        muted: "#6E6862",
        faint: "#9C948D",
        // Odoo brand purple as the primary accent
        accent: {
          DEFAULT: "#714B67",
          dark: "#5B3C53",
          soft: "#F1EAEF",
        },
        // incident/badge states
        state: {
          danger: "#D64545",
          "danger-soft": "#FBEAEA",
          warning: "#E19A2E",
          "warning-soft": "#FBF1DF",
          success: "#3E9B6B",
          "success-soft": "#E7F3ED",
        },
        line: "#E7E2DD",
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
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
