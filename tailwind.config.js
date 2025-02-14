/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobileL: { min: "424px", max: "767px" },
        tablet: { min: "768px", max: "1023px" },
        laptopS: { min: "1024px", max: "1280px" },
        laptopL: { min: "1281px", max: "1536px" },
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: 0,
            transform: "translateY(5px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slideDown: {
          from: {
            opacity: 0,
            transform: "translateY(-20px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "border-expand": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(20px)" },
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Segoe UI", "sans-serif"],
        display: [
          "Nunito",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
       
      },
      animation: {
        "fade-in-up": "fadeInUp 0.60s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out",
        "border-expand": "border-expand 0.5s ease-in-out forwards",
        "fade-in": "fadeIn 0.60s ease-in-out forwards",
        "fade-out": "fadeOut 0.60s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
