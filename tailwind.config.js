/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    width: {
      header: "100%",
      150: "150px",
      500: "500px",
      700: "700px",
    },
    colors: {
      blue: "rgb(26, 130, 249)",
      green: "rgba(0, 255, 0)",
      fossil: "#787276",
      black: "#28313B",
      gray: "#485461",
      darkgreen: "#306844",
      darkergreen: "#2c4c3b",
      lightgold: "#a3850e",
      darkgold: "#6d590a",
      darkblue: "#000075",
      darkergold: "#362c05",
      violet: "#CF9FFF",
      pantone: "#fae6fa",
      transparent: "transparent",
      white: "#fff",
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    screens: {
      sm: "480px",

      md: "547px",

      lg: "768px",

      xl: "1024px",

      xxl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
