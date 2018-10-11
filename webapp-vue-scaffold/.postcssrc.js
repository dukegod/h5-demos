// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {
      browsers: ['ios >=4', 'android >=4', 'android 2.2', 'last 5 version'],
    },
    "postcss-px2rem": {remUnit: 37.5}
    // "postcss-px2rem": {remUnit: 75}
  }
}
