module.exports = {
  plugins: [
    require('postcss-nested-ancestors'),
    require('postcss-nested'),
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer')(),
    require('cssnano')({
      preset: 'default'
    })
  ]
}
