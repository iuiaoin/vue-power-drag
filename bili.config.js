const pkg = require('./package.json');

module.exports = {
  input: './src/components/drag/drag.vue',
  output: {
    format: 'umd',
    moduleName: 'power-drag',
    minify: true,
    fileName: 'power-drag.min.js',
    extractCSS: false,
    sourceMap: false
  },
  plugins: {
    vue: true
  }
}