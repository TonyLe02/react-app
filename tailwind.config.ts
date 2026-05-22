import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      colors: {
        background: "#0a0a0a",
        surface: "#141414",
        "surface-hover": "#1f1f1f",
        border: "#2a2a2a",
        "border-hover": "#3a3a3a",
        primary: "#ffffff",
        "primary-hover": "#e5e5e5",
        secondary: "#f97316",
        success: "#22c55e",
        warning: "#f97316",
        danger: "#ef4444",
        muted: "#6b6b6b",
        "text-primary": "#ffffff",
        "text-secondary": "#a1a1a1",
        sunset: {
          gold: "#f5b400",
          amber: "#f97316",
          coral: "#ef4444",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        "sunset-gradient":
          "linear-gradient(to right, #f5b400, #f97316, #ef4444)",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.35)",
        "glass-lg": "0 12px 50px rgba(0, 0, 0, 0.45)",
        "sunset-glow": "0 0 40px rgba(249, 115, 22, 0.25)",
      },
      backdropBlur: {
        glass: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
