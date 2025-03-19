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
        "comingsoon": "url('./assets/comingsoon-bg.png')",
        "contact": "url('./assets/liquorice.png')",
        "hero-img": "url('./assets/landinghero.jpg')",
        "art-feature-two": "url('./assets/epiphany.jpg')"
      },
      colors: {
        "custom-grey": "#ECECEC",
        "custom-black": "#1C1E1D",
        "custom-dark-grey": "#767676"
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
    screens: {
      // Maximum Medium Query
      'max-lg': { max: '1400px' },
      'max-md': { max: '1200px' },
      'max-lm': { max: '1000px' },
      'max-sm': { max: '800px' },
      'max-xs': { max: '600px' },
      'max-xxs': { max: '400px' },

      // Fixed Medium Query
      'fixed-xs': { max: '600px', max: '800px' },
      'fixed-sm': { min: '480px', max: '575px' },
      'fixed-lm': { min: '1000px', max: '1200px' },
      'fixed-md': { min: '1200px', max: '1400px' },
      'fixed-lg': { min: '992px', max: '1199px' },

      // Minimum Medium Query
      xxs: '400px',
      xs: '600px',
      sm: '800px',
      lm: '1000px',
      md: '1200px',
      lg: '1400px',
      xl: '1600px',
      xxl: '1800px'
    },
  },
  plugins: [],
}