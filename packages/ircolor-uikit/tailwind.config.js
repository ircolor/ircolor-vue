/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./playground/**/*.{vue,js,ts,html}",
    "./src/**/*.{vue,js,ts}",
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
