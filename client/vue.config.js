module.exports = {
  devServer: {
    proxy: {
      '^/server': {
        target: 'http://localhost:4000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
