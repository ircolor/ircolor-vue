/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
    "./playground/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#95E1D3',
        warning: '#FCE38A',
        danger: '#F38181'
      }
    }
  },
  plugins: []
}
