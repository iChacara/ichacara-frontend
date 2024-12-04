import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/theme");

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        light: {
          primary: "#006A66",
          "on-primary-container": "#00201F",
        },
        dark: {
          primary: "#80D5D0",
        },
      },
      boxShadow: {
        "3xl": "0 -20px 60px -15px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
