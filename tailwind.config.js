/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./types.ts",
    "./constants.ts",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#171717",
        primary: "#3b82f6",
        secondary: "#6366f1",
        text: "#ededed",
        muted: "#a1a1aa",
        accent: "#a3e635", // Lime green for the handwriting effect
        "design-purple": "#8b5cf6",
        "design-blue": "#3b82f6",
        "design-green": "#4ade80",
        "design-yellow": "#facc15",
        "design-pink": "#f472b6",
        "design-orange": "#ff4500", // Added for the About Me section
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        script: ['"La Belle Aurore"', "cursive"],
        display: ['"Fredoka"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
