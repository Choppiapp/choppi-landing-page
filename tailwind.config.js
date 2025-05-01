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
      colors: {
        choppi: {
          orange: "#F7931E",
          black: "#1A1A1A",
          gray: "#F5F5F5",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#FFF5E6",
              100: "#FFEACC",
              200: "#FFD699",
              300: "#FFC166",
              400: "#FFAD33",
              500: "#E9A84C",
              600: "#E67E00",
              700: "#B36200",
              800: "#804600",
              900: "#4D2A00",
              DEFAULT: "#E9A84C",
              foreground: "#FFFFFF"
            },
          }
        }
      }
    })
  ],
};