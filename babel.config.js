const plugins = []
if (process.env.NODE_ENV === 'production') {
  // 移除console.log
  plugins.push('transform-remove-console')
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}
