import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class", // Toggle dark mode with a class
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#0179FE",
        "primary-dark": "#175CD3",
        secondary: "#4893FF",
        success: "#039855",
        danger: "#EF4444",
        background: "#F9FAFB",
        dark: {
          bg: "#0F172A",
          card: "#1E293B",
          text: "#E2E8F0",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      backgroundImage: {
        "bank-gradient": "linear-gradient(90deg, #0179FE 0%, #4893FF 100%)",
        "green-gradient": "linear-gradient(90deg, #01797A 0%, #489399 100%)",
        mesh: "url('/icons/gradient-mesh.svg')",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["IBM Plex Serif", "serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.05)",
        hover: "0 6px 24px rgba(0, 0, 0, 0.08)",
        inset: "inset 0 1px 2px rgba(0,0,0,0.06)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-in",
        "slide-up": "slide-up 0.4s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
