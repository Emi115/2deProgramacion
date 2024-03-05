/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'light-red': 'hsl(0, 100%, 67%)',
        'orangey-yellow': 'hsl(39, 100%, 56%)',
        'green-tail': 'hsl(166, 100%, 37%)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',
        'slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal': 'hsl(241, 81%, 54%)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavander': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
        'circltop': 'rgb(73,35,201)'
      },
      fontFamily: {
        grotesk: 'Hanken Grotesk',
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}