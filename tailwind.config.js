/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // для Vite — основной HTML
    "./src/**/*.{js,ts,jsx,tsx}",  // все JS/TS/JSX/TSX файлы в src
  ],
  theme: {
    extend: {

    },  // здесь можно добавлять свои кастомные цвета, шрифты и т.д.
  },
  plugins: [],
}