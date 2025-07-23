/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          b1: '#080808',
        },
        point: {
          basic: '#0BCDFE',
          hover: '#2A92FE',
          selected: '#495BFF',
          main: '#000080',
          dark: '#0a0a5c',
          reverse: '#ffff7f'
        },
      },
    },
  },
  plugins: [],
};
