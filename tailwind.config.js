/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
      },
      colors: {
        customBlack: '#181818',
        customGray: '#B2B2B2',
        customGray1: '#F2F2F2',
        customGray2: '#636363',
        customWhite: '#FAFAFA',
        customViolet: '#A6A6F7',
        customBeige: '#F9DEC9',
        customOrange: '#8A4F40',
        customGray3:'#D9D9D9',
      },

    },
    plugins: [],
  }
}