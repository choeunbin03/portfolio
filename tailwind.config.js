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
          main: '#000070',
          dark: '#000050',
          reverse: '#ffff7f',
        },
      },
      keyframes: {
        // 100 % 시 왼쪽으로 정확히 절반(-50 %) 만큼 이동
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        // 20 s 동안 선형(linear)으로 반복
        'scroll-x': 'marquee 17s linear infinite',
      },
    },
  },
  plugins: [],
};
