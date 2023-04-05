/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html","./app.js","./style.css","./history.html","./schedule.html","./tours.html"],
  theme: {
    extend: {
      colors:{
        linkcolor: '#3366CE'
      }
    },
  },
  plugins: [],
}