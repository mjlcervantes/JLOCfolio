module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('@tailwindcss/postcss7-compat'),
    require('autoprefixer')({
      flexbox: 'no-2009',
    }),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
  ],
}