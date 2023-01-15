/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    height: {
      10: "10%",
      20: "20%",
      50: "50%",
      full: "100%",

      15: "15vh",
      75: "75vh",
      85: "85vh",
      screen: "100vh",

      40: "2.5rem",
      120: "7.5rem",
      150: "9.375rem",
      170: "10.625rem",
      300: "18.75rem",
      400: "25rem",
      500: "31.25rem",
      700: "43.75rem",
      1000: "62.5rem",
    },
    width: {
      150: "9.375rem",
      300: "18.75rem",
      400: "25rem",
      500: "31.25rem",
      700: "43.75rem",
      800: "50rem",
      1000: "62.5rem",
      screen: "100vw",
      full: "100%",
    },
    colors: {
      backdrop: "#000000bf",
      maastrichtBlue: "#001B40",
      nightTurquoise: "#004034",
      white: "#ffffff",
      errorRed: "#FF9494",
      red: "#FF0000",
      lightgray: "#AEAEAE",
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
