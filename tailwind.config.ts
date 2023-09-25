import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Media Sans Semicondensed", "Impact", "sans-serif"],
        content: ["Sfprodisplay", "Arial", "sans-serif"],
      },
      colors: {
        "custom-black": "#1b1b1b",
        "custom-grey": "#333333",
        "accent-color-red": "#fc3e6b",
        "accent-color-blue": "#1daafc",
        "accent-color-yellow": "#fda632"
      },
      backgroundColor: {
        "custom-black": "#1b1b1b",
        "custom-grey": "#333333",
        "accent-color-red": "#fc3e6b",
        "accent-color-blue": "#1daafc",
        "accent-color-yellow": "#fda632"
      }
    },
  },
  plugins: [],
};
export default config;
