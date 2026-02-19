/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B263B',
          dark: '#0D1321',
          light: '#2D3E5F',
        },
        oak: {
          DEFAULT: '#C59B6D',
          light: '#D4B28A',
          dark: '#A67C4F',
        },
        background: '#F7F7F7',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
