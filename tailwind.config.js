/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#09090b",
          secondary: "#27272a",
        },
        light: {
          primary: "#e4e4e7",
          secondary: "#d4d4d8",
        },
      },
    },
  },
  plugins: [],
};
