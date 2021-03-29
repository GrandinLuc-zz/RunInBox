const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
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
