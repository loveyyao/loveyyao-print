module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    libraryTarget: 'umd', //支持库的引入方式
    libraryExport: 'default',
    clean: true//默认导出
  }
}
