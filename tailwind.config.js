/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['montserrat', 'serif'],
      },
    },
  },
  plugins: [],
}

// background darkmode linear-gradient(176deg,rgb(18,24,27) 50%,rgb(25,33,49) 100%)