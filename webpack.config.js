const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    contentBase: [
      './build',
      path.join(__dirname, "node_modules/@salesforce-ux/design-system/assets"),
      path.join(__dirname, "./build/assets")]
  },
  module: {
    rules: [{
      test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          publicPath: '',
          emitFile: false
        }
      }]
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [{
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }],
        // use style-loader in development
        fallback: "style-loader"
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('assets/styles.css', {
      allChunks: true
    })
  ]
};
