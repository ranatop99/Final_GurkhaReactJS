/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-color": "#1d5c23",
      "secondary-color": "#3c763d",
      "background-color": "#101c10",
      "white-color": "#fdfdfd",
      "dark-green": "#112111",
      "light-green-color": "#ebf7ec",
      "green-color": "#38b143",
      "highlight-green": "#67cb69",
      "black-color": "#000000",
    },
    extend: {
      fontFamily: {
        signature: ["Roboto"],
      },
    },
  },
  plugins: [],
};
