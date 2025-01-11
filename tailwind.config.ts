import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      NanumSquare: ["var(--nanumSquare)"],
      Spoqa: ["var(--font-Spoqa)"],
    },
    extend: {
      colors: {
        primary: "#4CAF50",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
