module.exports = {
  plugins: [
    // eslint-disable-next-line global-require
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('autoprefixer'),

    // eslint-disable-next-line global-require
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('cssnano')({ // подключили cssnano
      preset: 'default', // выбрали настройки по умолчанию
    }),
  ],
};
