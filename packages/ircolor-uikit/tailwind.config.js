/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Peyda','Open Sans', 'sans-serif'],
        serif: ['Peyda','Merriweather', 'serif'],
      },
      colors:{
        'primary' : '#95E1D3',
        'warning' : '#FCE38A',
        'danger' : '#F38181',
      }
    }
  },
  plugins: []
}
