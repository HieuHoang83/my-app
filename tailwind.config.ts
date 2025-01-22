import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  module: "jit",
  darkMode: "selector",
  content: [
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-login-main":
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      },
      spacing: {
        35: "35px",
        "50": "50px",
        "main-size": "100vh",
      },

      colors: {
        textPink: "rgb(255 120 120)",
      },
      fontFamily: {
        serif: ['"PT Serif"', "serif"],
        sans: ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".text-indent-50": {
          "text-indent": "50px", // Tạo lớp tuỳ chỉnh cho text-indent
        },
        ".text-indent-30": {
          "text-indent": "30px", // Tạo lớp tuỳ chỉnh cho text-indent
        },
      });
    },
    require("@tailwindcss/line-clamp"),
  ],
};

export default config;
