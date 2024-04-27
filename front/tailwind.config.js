import {indigo, amber, success, primary, secondary} from "./src/Theme/colors";
import {THEME_CONST} from "./src/Theme/index.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // Extend palette to create primary, secondary, etc.
      colors: {
        primary: primary.main,
        primaryLight: primary.light,
        secondary: secondary.main,
        success: success.main,
      },
      // Rounding
      borderRadius: {
        "2xl" : THEME_CONST.borderRadius,
        "xl": THEME_CONST.borderRadius
      },
    },
  },
  plugins: [],
  important: true,
}

