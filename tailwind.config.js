/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    animation: {
      "spin-slower": "spin 2.5s linear infinite",
    },
    fontFamily: {
      Harmattan: ["Harmattan"],
    },
    height: {
      10: "10%",
      20: "20%",
      50: "50%",
      70: "70%",
      full: "100%",

      12: "12vh",
      fiftyVH: "50vh",
      75: "75vh",
      88: "88vh",
      screen: "100vh",

      13: "0.813rem",
      33: "2.063rem",
      42: "2.625rem",
      58: "3.625rem",
      120: "7.5rem",
      150: "9.375rem",
      170: "10.625rem",
      180: "11.25rem",
      300: "18.75rem",
      400: "25rem",
      500: "31.25rem",
      700: "43.75rem",
      1000: "62.5rem",
    },
    width: {
      fortyVW: "40vw",

      10: "10%",
      20: "20%",
      30: "30%",
      40: "40%",
      50: "50%",
      full: "100%",

      58: "3.625rem",
      105: "6.563rem",
      170: "10.625rem",
      180: "11.25rem",
      300: "18.75rem",
      400: "25rem",
      500: "31.25rem",
      600: "37.5rem",
      700: "43.75rem",
      721: "45.063rem",
      800: "50rem",
      screen: "100vw",
    },
    colors: {
      themeRed: "#F74565",
      themeBlue: "#77D2F7",
      textBlack: "#0D1112",
      backdrop: "#000000bf",
      errorRed: "#FF9494",
      background: "#f1f6f7",
      lightgray: "#AEAEAE",
      white: "#ffffff",
      inputTextColor: "#38494D",
      buttonBG: "#0D1112",
      buttonHoover: "#38494D",
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
