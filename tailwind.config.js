const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/ui'),
  ],
}
