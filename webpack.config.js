const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    contentBase: ['./build', path.join(__dirname, "node_modules/@salesforce-ux/design-system/assets")]
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
        // ,
        // options: {
        //   includePaths: ["absolute/path/a", "absolute/path/b"]
        // }
      }]
    }]
  }
};
