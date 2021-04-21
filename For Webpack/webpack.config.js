const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 1000
  },
  mode: 'development', // Указываем режим (Разработка или продакшн)
  entry: './src/js/script.js', // Указываем точку входа
  devtool: 'source-map', // Чтобы можно было в инспекторе смотреть, откуда подтягиваются стили
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка, в которую будет собираться
    filename: 'bundle.js', // Файл, в который будет собираться
  },
  module: {
    rules: [
      { // Правила для подгрузки CSS через JS
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      { // Правила для подгрузки SCSS через JS
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, "css-loader", "sass-loader",
        ],
      },
      { // Правила для подгрузки изображений через JS
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
