/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          from: {
            opacity: 0,
            transform: "translateY(20px)",
          },
          spin: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
          spin: 'spin 1s linear infinite',
        },

      },
      animation: {
        "fade-in-up": "fadeInUp 0.30s ease-out forwards",
      },
    },
  },
  plugins: [],
});
