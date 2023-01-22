/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    inset: {
      29: "29%",
    },
    animation: {
      "spin-slower": "spin 2.5s linear infinite",
    },
    fontFamily: {
      Harmattan: ["Harmattan"],
    },
    height: {
      50: "50%",
      70: "70%",
      90: "90%",
      full: "100%",

      12: "12vh",
      screen: "100vh",

      13: "0.813rem",
      42: "2.625rem",
      170: "10.625rem",
      180: "11.25rem",
      500: "31.25rem",
    },
    width: {
      30: "30%",
      50: "50%",
      60: "60%",
      70: "70%",

      full: "100%",

      116: "7.25rem",
      170: "10.625rem",
      180: "11.25rem",
      500: "31.25rem",

      screen: "100vw",
    },
    colors: {
      themeRed: "#F74565",
      themeYellow: "#F7EE60",
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
