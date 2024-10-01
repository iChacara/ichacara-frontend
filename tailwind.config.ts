import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
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
    },
  },
  plugins: [],
};
export default config;
