/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customLink: 'rgb(204, 51, 102)',
      },
      backgroundImage: {
        'background-lines': "url('./src/images/Background.svg')",
      },
    },
  },
  plugins: [],
};
