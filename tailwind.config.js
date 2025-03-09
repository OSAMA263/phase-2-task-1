/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Gray: "#545454",
        Dark: "#1F1F1F",
      },
    },
  },
  plugins: [],
};
