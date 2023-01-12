/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    width: {
      header: "100%",
      150: "150px",
      300: "300px",
      400: "400px",
      500: "500px",
      700: "700px",
      thousand: "1000px",
    },
    colors: {
      backdrop: "#000000bf",
      blue: "rgb(26, 130, 249)",
      green: "rgba(0, 255, 0)",
      black: "#28313B",
      pantone: "#fae6fa",
      white: "#FFFFF7",
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
