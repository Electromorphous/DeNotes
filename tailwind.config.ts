import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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

export default config;
