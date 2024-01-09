/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#1c1917',
        'main-text': '#f2f2f2',
        'text-small': '#6c6a69',
        'button-color': '#ee1111',
        'button-hover': '#ee3d11',
        'button-text': '#fff1f2',
        'background-dark': '#0c0a09'
      },
    },
  },
  plugins: [],
}

