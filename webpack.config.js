const VueLoaderPlugin = require('vue-loader/lib/plugin');

const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.base'), {
  context: __dirname,

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'vuetify-loader',
    libraryTarget: 'umd',
  },

  plugins: [
    new VueLoaderPlugin()
  ],

  externals: {
    vue: 'vue',
  },
});