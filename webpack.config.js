const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // This makes sure that Webpack serves files from the root
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Handle TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the output directory before each build
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template HTML file
      filename: 'index.html', // Output filename
    }),
    new BundleAnalyzerPlugin(), // Bundle analyzer plugin
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve content from the dist folder
    },
    port: 9000, // Specify the port you want the server to run on
    historyApiFallback: true, // Useful for single-page applications
  },
};
