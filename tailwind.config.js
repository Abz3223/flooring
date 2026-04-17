/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 3.5rem)', { lineHeight: '1.15', fontWeight: '400' }],
        'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '400' }],
        'h2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
        'h3': ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.65' }],
      },
      spacing: {
        'section': '5rem',
        'section-lg': '7.5rem',
      },
      maxWidth: {
        'content': '720px',
        'wide': '1200px',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.06), 0 4px 16px 0 rgba(0,0,0,0.06)',
        'card-hover': '0 4px 6px 0 rgba(0,0,0,0.07), 0 12px 32px 0 rgba(0,0,0,0.10)',
        'header': '0 1px 0 0 #E5E3DF, 0 2px 8px 0 rgba(0,0,0,0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
