import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          black: "#05060a",
          void: "#0a0c14",
          midnight: "#0e1430",
          nebula: "#6d5ef0",
          purple: "#8b5cf6",
          cyan: "#38e1ff",
          soft: "#a5b4fc",
        },
        lego: {
          red: "#e3350d",
          yellow: "#ffcf00",
          blue: "#0d69b4",
          green: "#00af4d",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 50% 0%, rgba(109,94,240,0.18), transparent 55%)",
        "aurora":
          "linear-gradient(120deg, #38e1ff 0%, #8b5cf6 40%, #6d5ef0 70%, #38e1ff 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        "pulse-ring": "pulse-ring 2.6s ease-out infinite",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(109,94,240,0.55)",
        "glow-cyan": "0 0 40px -8px rgba(56,225,255,0.5)",
        glass: "0 8px 40px -12px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
