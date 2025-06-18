/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A1929',
          light: '#132F4C',
          lighter: '#173A5E',
        },
        primary: {
          DEFAULT: '#3399FF',
          hover: '#66B2FF',
        },
        secondary: {
          DEFAULT: '#00A0E3',
          hover: '#33B3E8',
        },
        accent: {
          DEFAULT: '#00D5FF',
          hover: '#33DDFF',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B2BAC2',
          muted: '#6F7E8C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-300px 0' },
          '100%': { backgroundPosition: '300px 0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px 0px rgba(51, 153, 255, 0.3)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(51, 153, 255, 0.6)' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        fadeUp: 'fadeUp 0.7s ease-out forwards'
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      boxShadow: {
        'glow': '0 0 15px 5px rgba(51, 153, 255, 0.3)',
        'glow-secondary': '0 0 15px 5px rgba(0, 160, 227, 0.3)',
        'glow-accent': '0 0 15px 5px rgba(0, 213, 255, 0.3)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};