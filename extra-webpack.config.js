const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin')

const glob = require('glob');

module.exports = {
  plugins: [

    new PurgeCSSPlugin({
      paths: glob.sync('./src/**/*', { nodir: true }),
      fontFace: true,
      keyframes: true,
      variables: true,
      safelist: {
        standard: ['fas', 'fab', 'fa-npm', 'fa-github', 'fa-envelope', 'fa-twitter', 'fa-linkedin']
      }
    }),

    new BrotliPlugin({
      asset: '[fileWithoutExt].[ext].br',
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
      threshold: 10240,
      minRatio: 0.7
    }),
    new CompressionPlugin({
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
      threshold: 10240,
      minRatio: 0.7,
      filename: '[path][base].gz',
    }),
  ],
};
