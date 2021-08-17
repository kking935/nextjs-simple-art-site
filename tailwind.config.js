module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in-out forwards",
        fadeDark: "fadeDark 0.5s ease-out forwards",
        slideRight: "slideRight 2s ease-out forwards",
        slideLeft: "slideLeft 2s ease-out forwards",
        slideTop: "slideTop 2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeDark: {
          "0%": { backgroundColor: 'transparent' },
          "100%": { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
        },
        slideRight: {
          "0%": {
            transform: 'translateX(-100%)'
          },
          "100%": {
            transform: 'translateX(0%)'
          }
        },
        slideLeft: {
          "0%": {
            transform: 'translateX(100%)'
          },
          "100%": {
            transform: 'translateX(0%)'
          }
        },
        slideTop: {
          "0%": {
            transform: 'translateY(100%)'
          },
          "100%": {
            transform: 'translateY(0%)'
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
