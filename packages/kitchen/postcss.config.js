const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.html', './src/**/*.vue'],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-_/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('postcss-nested-ancestors'),
    require('postcss-nested'),
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer')(),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    require('cssnano')({
      preset: 'default'
    })
  ]
}
