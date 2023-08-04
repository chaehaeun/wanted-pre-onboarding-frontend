/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', 'system-ui'],
      },
      colors: {
        modalBackDrop: 'rgba(0, 0, 0, 0.5)',
      },
      boxShadow: {
        wrap: '4px 4px #000',
        'wrap-sm': '2px 2px #000',
      },
    },
  },
  plugins: [],
}
