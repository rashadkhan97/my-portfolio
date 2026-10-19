/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    // Navy + Gold palette: navy backgrounds, white text, gold only for thin accents
    colors: {
      transparent: "transparent", // needed for classes like lg:bg-transparent (custom colors replace the defaults)
      navy: "#060b18",
      navyLight: "#0f1d3a",
      line: "#22314f",
      gold: "#c9a85c",
      muted: "#8e9bb8",
      soft: "#c5cee2",
      white: "#ffffff",
    },
    extend: {},
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
      heading: ["Georgia", '"Times New Roman"', "serif"],
      code: ['"JetBrains Mono"', "ui-monospace", "Consolas", "monospace"], // skill pills in Skills.jsx
    },
  },
  plugins: [],
};
