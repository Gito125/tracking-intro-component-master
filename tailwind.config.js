/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        Barlow_Condensed: "'Barlow Condensed', sans-serif",
        Barlow: "'Barlow', sans-serif"
      },
      colors: {
        primary: 'hsl(0, 100%, 68%)',
        d_Blue: 'hsl(230, 29%, 20%)',
        d_GrayishBlue: 'hsl(230, 11%, 40%)',
        grayishBlue: 'hsl(231, 7%, 65%)',
        l_grayishBlue: 'hsl(207, 33%, 95%)'
      }
    },
  },
  plugins: [],
}
