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
        // Palette: Forest Green + Copper + Warm Cream.
        // Token names kept as `surface`/`charcoal`/`gold` so existing utility
        // classes don't need a sitewide rename — names describe role
        // (background / dark / accent), not literal color.
        surface: '#F5F1E8',           // warm cream page background
        charcoal: {
          DEFAULT: '#1F3A2E',         // deep forest green (primary dark)
          light: '#2D5240',           // forest light (lifted dark sections)
        },
        gold: {
          DEFAULT: '#A0522D',         // copper / sienna (accent / CTA)
          hover: '#8C4426',           // copper darker (hover)
          light: '#C66E45',           // copper light (highlights)
          muted: '#F4E4D6',           // pale copper tint (icon backgrounds)
          border: '#D9B898',          // copper border tone
        },
        stone: {
          50: '#FAFAF8',
          100: '#EFEAE0',             // warmed to harmonize with cream surface
          200: '#E0DACE',              // ditto, used for borders/dividers
          300: '#CCCAC6',
          400: '#A8A5A0',
          500: '#6B6B6B',
          600: '#4A4A4A',
          700: '#2E2E2E',
          800: '#1F3A2E',             // matches charcoal.DEFAULT (forest)
          900: '#111111',
        },
      },
      fontFamily: {
        // `serif` token now points at Montserrat (a sans-serif) — kept the
        // name for backward-compat with existing `font-serif` utility usage.
        serif: ['var(--font-serif)', 'Montserrat', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'Open Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Bolder defaults to match the new Montserrat-driven aesthetic.
        'display': ['clamp(2.5rem, 5vw, 3.5rem)', { lineHeight: '1.1', fontWeight: '800' }],
        'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', fontWeight: '800' }],
        'h2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.3', fontWeight: '700' }],
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
