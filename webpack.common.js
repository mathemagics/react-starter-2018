const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: { extensions: ['.js', '.jsx'] },
  context: process.cwd(),
  node: {
    __filename: true,
  },
  output: {
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
