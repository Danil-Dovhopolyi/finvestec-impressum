/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customLink: 'rgb(42,42,71)',
      },
      backgroundImage: {
        'background-lines': "url('./images/Background.svg')",
      },
    },
  },
  plugins: [],
};
