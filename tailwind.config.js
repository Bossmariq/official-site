/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#876445",
        primary2: "#785536",
        secondary: "#CA965C",
        secondary2: "#EEC373",
        tertiary: "#F4DFBA",
      },
    },
  },
  plugins: [],
};
