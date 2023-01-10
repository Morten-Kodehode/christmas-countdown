/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImg: "url('/assets/xmasPic.jpg')",
      },
      fontFamily: {
        xmas: ["Mountains of Christmas", "cursive"],
      },
    },
  },
  plugins: [],
};
