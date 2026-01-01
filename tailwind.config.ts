import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Strawberry-inspired pastel palette
        fresa: {
          50: '#fef7f7',
          100: '#fdeeed',
          200: '#fbd5d3',
          300: '#f7aca8',
          400: '#f28077',
          500: '#e85a4f', // Primary strawberry red
          600: '#d43d32',
          700: '#b22d24',
          800: '#932822',
          900: '#7a2622',
        },
        cream: {
          50: '#fffdf9',
          100: '#fefbf3',
          200: '#fdf6e3',
          300: '#fbefc8',
          400: '#f7e3a3',
          500: '#f2d47c',
        },
        leaf: {
          50: '#f4f9f4',
          100: '#e6f2e6',
          200: '#cee5ce',
          300: '#a8d1a8',
          400: '#7ab87a', // Primary leaf green
          500: '#5a9d5a',
          600: '#467f46',
          700: '#3a663a',
          800: '#325232',
          900: '#2b442b',
        },
        sand: {
          50: '#fdfcfb',
          100: '#faf7f4',
          200: '#f5efe8',
          300: '#ede3d5',
          400: '#e2d2bc',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cabinet)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'strawberry-gradient': 'linear-gradient(135deg, #fef7f7 0%, #fdeeed 50%, #f7aca8 100%)',
      },
    },
  },
  plugins: [],
}

export default config
