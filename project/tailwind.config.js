/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // Substitui os tons verdes e teal usados no projeto para o azul pedido
        green: {
          500: '#3599f6',
          600: '#3599f6',
          700: '#2a75bf',
        },
        teal: {
          600: '#3599f6',
          700: '#2a75bf',
        },
        // opcional: cor primária reutilizável
        primary: '#3599f6',
      },
    },
  },
  plugins: [],
};
