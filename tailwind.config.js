/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "first-color": "#c4c1e0",
        "first-color-hover": "#CECBEA",
        "second-color": "#ffe9e3",
        "second-color-hover": "#FFF3ED",
        "third-color": "#fafafa",
        "fourth-color": "#7c73e6",
        "fourth-color-hover": "#867DF0",
      },
    },
  },
  plugins: [],
};
