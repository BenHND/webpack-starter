const MiniCssExtractPugin = require('mini-css-extract-plugin');

module.exports = () => ({
  output: {
    filename: './themes/sopra/js/bundle.[chunkhash:4].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPugin.loader,
            options: {
              publicPath: '../../../../',
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')({
                  browsers: ['last 2 versions', 'ie >= 11'],
                }),
                require('cssnano')(),
              ],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPugin.loader,
            options: {
              publicPath: '../../../../',
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              publicPath: '../',
              plugins: () => [
                require('autoprefixer')({
                  browsers: ['last 2 versions', 'ie >= 11'],
                }),
                require('cssnano')(),
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './themes/mytheme/fonts/',
              publicPath: '../fonts',
              name: '[name].[hash:7].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: './themes/mytheme/images',
              name: '[name].[hash:7].[ext]',
              limit: 5000,
            },
          },
          {
            loader: 'img-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPugin(
      {
        filename: './themes/mytheme/css/[name].[hash].css',
      },
    ),
  ],
});
