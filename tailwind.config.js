/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'Open-Sans': ['Open Sans', 'sans-serif'],
      'Cormorant': ['Cormorant Upright', 'serif'],
    },

    backgroundImage: {
      'Masked-bg': "url('/Common Images/MaskedBG.png')",
    },

    animation: {
      'rotate': 'spinSlow 10s linear infinite',
    },

    keyframes: {
      spinSlow: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      }
    },

    extend: {},
  },
  plugins: [],
}