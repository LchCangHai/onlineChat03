module.exports = {
  devServer: {
    proxy: {
      '/foo': {
        target: 'http://chatroom.mr-lin.site',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/foo': ''
        }
      }
    }
  }
}
