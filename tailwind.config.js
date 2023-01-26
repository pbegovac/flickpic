/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        52: "3.25rem",
      },
      aspectRatio: {
        "2/3": "2 / 3",
        "3/4": "3 / 4",
        "4/5": "4 / 5",
        "1/2": "1 / 2",
        "3/2": "3 / 2",
        "4/3": "4 / 3",
        "2/1": "2 / 1",
      },
      inset: {
        0: "0%",
        29: "29%",
      },
      animation: {
        "spin-slower": "spin 2.5s linear infinite",
      },
      fontFamily: {
        Harmattan: ["Harmattan"],
      },
      height: {
        30: "30%",
        40: "40%",
        50: "50%",
        60: "60%",
        70: "70%",
        80: "80%",

        90: "90%",
        full: "100%",

        12: "12vh",
        screen: "100vh",

        13: "0.813rem",
        42: "2.625rem",
        170: "10.625rem",
        180: "11.25rem",

        250: "15.625rem",
        300: "18.75rem",
        500: "31.25rem",
      },
      width: {
        20: "20%",
        30: "30%",
        40: "40%",
        55: "55%",

        50: "50%",
        60: "60%",
        70: "70%",
        80: "80%",

        90: "90%",
        full: "100%",

        116: "7.25rem",
        170: "10.625rem",
        180: "11.25rem",
        200: "15rem",
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
        transparent: "transparent",
      },
      screens: {
        xs: "0px",

        sm: "480px",

        md: "547px",

        lg: "768px",

        xl: "1024px",

        xxl: "1280px",
      },
    },
  },
  plugins: [],
};
