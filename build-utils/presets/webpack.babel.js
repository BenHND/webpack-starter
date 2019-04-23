module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components|swiper|xhr)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
});
