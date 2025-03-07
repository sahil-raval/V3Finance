/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#008083",
        secondary: {
          100: "#249A90",
          200: "#4DB39C"
        },
        dark: "#111111",
      },
      fontFamily: {
        philosopher: ['Philosopher', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
