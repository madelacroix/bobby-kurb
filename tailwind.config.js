/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "comfortaa": ["Comfortaa", "sans-serif"]
      },
      backgroundImage: {
        "comingsoon": "url('./src/assets/comingsoon-bg.png')"
      }
    },
  },
  plugins: [],
}