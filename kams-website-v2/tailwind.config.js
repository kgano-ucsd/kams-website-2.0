/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        kameronpalette: {
          primary: "#404E7C",
          secondary: "#E9E3E6",
          accent: "#8789C0",
          neutral: "#FAF9F6",
          "base-100": "#FFFFFF",
          info: "#D5D5D5",
          success: "#48DB72",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Rubik"', "sans-serif"],
      body: ["Rubik", "sans-serif"],
      display: ["Rubik", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};