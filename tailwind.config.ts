import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef9ee',
          100: '#fdf0d3',
          200: '#f9dfa5',
          300: '#f5c76d',
          400: '#f0a932',
          500: '#ec8f0f',
          600: '#dd7109',
          700: '#b7540b',
          800: '#924210',
          900: '#773812',
          950: '#401b05',
        }
      }
    }
  },
  plugins: [],
}
export default config
