/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      'primary':"#CC2D4A",
      'secondary':"#8FA206",
      'tertiary':"#61AEC9",
    },
    fontFamily: { 
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
    },
  },
  variants:{
    extend: {
      padding: ['hover'],
    },
  },
  plugins: [],
}
