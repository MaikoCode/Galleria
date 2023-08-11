/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        'full': '100%',
      },
      screens: {
        'laptop': '1024px',
      },

      fontFamily: {
        primary: ["Libre Baskerville"]
      },

      colors: {
        "black": "#000000",
        "gray": "#7D7D7D",
        "black-gray": "#E5E5E5",
        "white-gray": "#F3F3F3",
        "white": "#FFFFFF"

      }
    },
  },
  plugins: [],
}

