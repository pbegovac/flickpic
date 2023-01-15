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

      40: "40px",
      120: "120px",
      150: "150px",
      170: "170px",
      300: "300px",
      400: "400px",
      500: "500px",
      700: "700px",
      1000: "1000px",
    },
    width: {
      150: "150px",
      300: "300px",
      400: "400px",
      500: "500px",
      700: "700px",
      800: "800px",
      1000: "1000px",
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
