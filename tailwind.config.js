import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        choppi: {
          orange: "#FAA531", // Main orange color
          "red-orange": "#FD3B00", // Red-orange color
          green: "#365A26", // Veggie green color
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "1rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem",
          small: "1.25rem",
          medium: "1.5rem",
          large: "1.75rem",
        },
        radius: {
          small: "6px",
          medium: "8px",
          large: "12px",
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              50: "#FFF8EB",
              100: "#FEEFD0",
              200: "#FDDFA1",
              300: "#FCC973",
              400: "#FBB444",
              500: "#FAA531", // Main Choppi orange
              600: "#F99206",
              700: "#CA7605",
              800: "#9B5A04",
              900: "#6C3F03",
              DEFAULT: "#FAA531",
              foreground: "#FFFFFF",
            },
            secondary: {
              50: "#FFE9E2",
              100: "#FFCEC0",
              200: "#FF9D81",
              300: "#FF6C41",
              400: "#FF3B02",
              500: "#FD3B00", // Choppi red-orange
              600: "#CA2F00",
              700: "#972300",
              800: "#651800",
              900: "#320C00",
              DEFAULT: "#FD3B00",
              foreground: "#FFFFFF",
            },
            success: {
              50: "#EDF2E8",
              100: "#D4DFC8",
              200: "#B9CB9A",
              300: "#9EB86D",
              400: "#83A43F",
              500: "#365A26", // Choppi green
              600: "#2B481F",
              700: "#203617",
              800: "#162410",
              900: "#0B1208",
              DEFAULT: "#365A26",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
};
