/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        neutral: {
          50: '#F5F2ED',
          100: '#E8E4DF',
          200: '#D1CCC4',
          300: '#B9B3A9',
          400: '#A19A8F',
          500: '#857D73',
          600: '#6A635C',
          700: '#504A45',
          800: '#35322E',
          900: '#0F0F0F',
        },
      },
    },
  },
  plugins: [],
};