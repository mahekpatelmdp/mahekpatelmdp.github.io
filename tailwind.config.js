/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#080b0d',
          900: '#12181c',
          800: '#1a2226',
          700: '#222b30',
          600: '#2b363c',
        },
        gold: {
          300: '#a8f0e4',
          400: '#45ddc7',
          500: '#2dd4bf',
          600: '#22a396',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
