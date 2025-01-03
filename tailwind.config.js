const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d'
      }
      // columns: {
      //   '7xl': ''
      // },
      // spacing: {

      // }
    }
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          // maxWidth: theme('columns.7xl'),
          // marginLeft: 'auto',
          // marginRight: 'auto',
          // paddingLeft: theme('spacing.4')
        }
      })
    })
  ]
}
