/** @type {import('tailwindcss').Config} */

const themeConfig = {
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#fff",
      secondary: "#000",
      text: "#cc67cc",
      link: "#feaf22",
    },
    fontFamily: {
      title: "Yanone Kaffeesatz, sans-serif",
      body: "Nanum Myeongjo, sans-serif",
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
