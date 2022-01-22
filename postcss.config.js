const path = require('path')

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
      selectorBlackList: [
        'html'
      ]
    },
    autoprefixer: {
      overrideBrowserslist: ["Android 4.1", "iOS 7.1"],
      grid: true,
    },
  },
};
