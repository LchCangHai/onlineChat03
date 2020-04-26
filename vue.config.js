module.exports = {
  devServer: {
    proxy: {
      '/foo': {
        target: 'http://chatroom.mr-lin.site',
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/foo': ''
        }
      }
    }
  }
}
