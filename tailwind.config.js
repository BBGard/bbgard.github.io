// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Menlo", "monospace"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
