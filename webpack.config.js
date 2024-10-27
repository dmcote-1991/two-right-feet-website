const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack'); // Import webpack to use the DefinePlugin

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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL || ''),
      // Define other environment variables as needed
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve content from the public folder
    },
    port: 9000, // Specify the port you want the server to run on
    historyApiFallback: true, // Useful for single-page applications
  },
};
