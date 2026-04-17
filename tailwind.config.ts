import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#FAFAF8',
        charcoal: {
          DEFAULT: '#1C1C1E',
          light: '#2A2A2C',
        },
        gold: {
          DEFAULT: '#B8860B',
          hover: '#9A7209',
          light: '#D4A850',
          muted: '#F7EDD6',
          border: '#E8D5A3',
        },
        stone: {
          50: '#FAFAF8',
          100: '#F5F3F0',
          200: '#E5E3DF',
          300: '#CCCAC6',
          400: '#A8A5A0',
          500: '#6B6B6B',
          600: '#4A4A4A',
          700: '#2E2E2E',
          800: '#1C1C1E',
          900: '#111111',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'DM Serif Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.06), 0 4px 16px 0 rgba(0,0,0,0.06)',
        'card-hover': '0 4px 6px 0 rgba(0,0,0,0.07), 0 12px 32px 0 rgba(0,0,0,0.10)',
        'header': '0 1px 0 0 #E5E3DF, 0 2px 8px 0 rgba(0,0,0,0.06)',
      },
    }
  },
  plugins: [],
}
export default config
