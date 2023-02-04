/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"],
      },
      colors: {
        primary: "#F48C5C",
        secondary: "#2C2D36",
        dark: {
          300: "#2C2D36",
          350: "#8A898E",
          400: "#232323",
          450: "#1E2532",
          500: "#1A1A1A",
          550: "#262837",
        },
        accent: "#384E77",
        neutral: "#A8A8A8",
      },
      fontSize: {
        sm: "1.125rem",
        base: "1rem",
        md: "1.5rem",
        lg: "1.875rem",
        xl: "2rem",
        "2xl": "3.125rem",
        "3xl": ["3.75rem", "5.625rem"],
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
