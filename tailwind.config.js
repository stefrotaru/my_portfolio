/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['montserrat', 'serif'],
      },
      animation: {
        tilt: 'tilt 5s infinite linear'
      },
      // keyframes: {
      //   tilt: {
      //     "0%, 50%, 100%": {
      //       transform: "rotate(0deg)",
      //     },
      //     "25%": {
      //       transform: "rotate(1.5deg)",
      //       opacity: 1,
      //     },
      //     "75%": {
      //       transform: "rotate(-1.5deg)",
      //       opacity: 1,
      //     },
      //   }
      // },
      animation: {
        flicker: 'flicker 10s infinite linear',
        titleLtoR: 'titleLtoR 5s ease infinite',
        titleGlow: 'titleGlow 1s ease-in-out infinite alternate',
      },
      keyframes: {
        flicker: {
          "0%, 50%, 100%": {
            opacity: 1,
          },
          "10%, 30%, 60%, 80%": {
            opacity: 0.65,
          },
          "20%, 40%, 70%, 90%": {
            opacity: 0.80,
          },
        },
        titleLtoR: {
          '0%, 100%': {
            'background-size': '600% 600%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        titleGlow: {
          from: {
            'text-shadow': '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073'
          },
          to: {
            'text-shadow': '0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6'
          }
        },
      },
    },
  },
  safelist: [
    'delay-0',
    'delay-1',
    'delay-2',
    'delay-3',
    'delay-4',
    'delay-5'
  ],
  plugins: [],
}

// background darkmode linear-gradient(176deg,rgb(18,24,27) 50%,rgb(25,33,49) 100%)