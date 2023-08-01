/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', 'system-ui'],
      },
      boxShadow: {
        wrap: '4px 4px #000',
      },
    },
  },
  plugins: [],
}
