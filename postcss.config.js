module.exports = {
    plugins: [
      require('autoprefixer'), // Adds vendor prefixes
      require('postcss-pxtorem')({ // Converts px to rem
        rootValue: 16, // Base font size (16px = 1rem)
        propList: ['*'], // Apply to all properties
      }),
      require('cssnano')({ preset: 'default' }) // Minifies CSS
    ]
  };