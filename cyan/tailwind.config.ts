import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-peyda)", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
