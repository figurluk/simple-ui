module.exports = {
  theme: {
    extend: {
      inset: {
        '0': 0,
        '3': '0.75rem'
      },

      spacing: {
        '6': '1.5rem'
      },

      backgroundColor: theme => ({
        ...theme('colors'),
        'sui-loader': 'rgba(255, 255, 255, 0.5)'
      })
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
