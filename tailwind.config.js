/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f3f7fa",
        secondary: "#656565",
        orange: {
          1: "#ff6d01",
          2: "#ff8125",
        },
        blue: {
          1: "#3da4f4",
          2: "#f1fcff",
        },
      },
    },
  },
  plugins: [],
};
