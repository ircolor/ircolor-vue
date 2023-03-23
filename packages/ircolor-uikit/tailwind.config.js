/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Peyda', 'Open Sans', 'sans-serif'],
        serif: ['Peyda', 'Merriweather', 'serif']
      },
      colors: {
        primary: '#95E1D3',
        warning: '#FCE38A',
        danger: '#F38181'
      }
    }
  },
  plugins: []
}
