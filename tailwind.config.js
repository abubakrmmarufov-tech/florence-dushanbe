/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        florence: {
          50: '#F2F7F4',
          100: '#E2ECE6',
          200: '#C2D9CD',
          300: '#9EBFB0',
          400: '#5F8F79',
          500: '#3D735C',
          600: '#2A5844',
          700: '#1B4332',
          800: '#133326',
          900: '#0B2219',
          950: '#06150F',
        },
        cream: {
          50: '#FAF8F5',
          100: '#F4EFEA',
          200: '#EBE4DB',
          300: '#DDD4C7',
          400: '#C4B8A5',
        },
        gold: {
          400: '#D6BE97',
          500: '#C5A880',
          600: '#AD8D63',
          700: '#8C6F49',
        },
        charcoal: {
          900: '#171A19',
          800: '#262B28',
          700: '#3D4440',
          500: '#68726C',
          400: '#949F98',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.18em',
        'wider-luxury': '0.28em',
      }
    },
  },
  plugins: [],
}
