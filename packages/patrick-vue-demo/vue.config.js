const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            exclude: /node_modules/,
            propList: ['*'],
            rootValue: 100
          }),
          require('autoprefixer')
        ]
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, '../shares/styles/variables.less'),
        path.resolve(__dirname, '../shares/styles/mixins.less')
      ]
    }
  },
  chainWebpack: config => {
    config.devServer.port('8000')
    config.resolve.alias.set('@', resolve('src'))
  }
}
