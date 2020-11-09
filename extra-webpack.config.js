const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  plugins: [
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
