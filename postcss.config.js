/* eslint-disable */
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'advanced',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
}