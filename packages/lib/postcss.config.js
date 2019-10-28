const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/config.stub.js',
    'tailwind.config.js'
  ],

  whitelist: [
    'html',
    'body',
    '*',
    ':before',
    ':after',
    'fade-enter-active',
    'fade-leave-active',
    'fade-enter',
    'fade-leave-to',
    'fade-fast-enter-active',
    'fade-fast-leave-active',
    'fade-fast-enter',
    'fade-fast-leave-to',
    'slide-fade-enter-active',
    'slide-fade-leave-active',
    'slide-fade-enter',
    'slide-fade-leave-to'
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-_/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('postcss-nested-ancestors'),
    require('postcss-nested'),
    require('tailwindcss')('tailwind.config.js'),
    require('postcss-import'),
    require('autoprefixer')(),
    purgecss,
    require('cssnano')({
      preset: 'default'
    })
  ]
}
