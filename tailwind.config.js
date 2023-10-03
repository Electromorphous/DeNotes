/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InclusiveSans", "system-ui", "sans-serif"],
      },
      colors: {
        dark: {
          primary: "#09090b",
          secondary: "#27272a",
          notebg: "#18181b",
        },
        light: {
          primary: "#e4e4e7",
          secondary: "#d4d4d8",
          notebg: "#f4f4f5",
        },
      },
    },
  },
  plugins: [],
};
