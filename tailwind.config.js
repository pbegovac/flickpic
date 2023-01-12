/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    width: {
      150: "150px",
      300: "300px",
      400: "400px",
      500: "500px",
      700: "700px",
      1000: "1000px",
    },
    colors: {
      backdrop: "#000000bf",
      maastrichtBlue: "#001B40",
      nightTurquoise: "#004034",
      pantone: "#fae6fa",
      lightwhite: "#FFFFF7",
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
