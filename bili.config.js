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
      css: true
    }
  }
}
