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
  banner: true,
  output: {
    extractCSS: false,
    minify: true,
    format: ['cjs', 'esm', 'umd'],
    moduleName: 'simple-ui'
  },
  plugins: {
    babel: {
      runtimeHelpers: true
    },
    vue: {
      css: true,
      style: {
        postcssPlugins: [
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
    },
    copy: {
      assets: [
        'src/assets/images',
        'src/assets/sounds',
        'src/assets/webfonts',
        'src/assets/css/simple-ui.css'
      ],
      targets: [
        { src: 'src/assets/images', dest: 'dist/assets' },
        { src: 'src/assets/sounds', dest: 'dist/assets' },
        { src: 'src/assets/webfonts', dest: 'dist/assets' },
        {
          src: 'src/assets/css/simple-ui.css',
          dest: 'dist/assets/css'
        }
      ]
    }
  }
}
