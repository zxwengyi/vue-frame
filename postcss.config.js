
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 75, //结果为：设计稿元素尺寸/75，比如元素宽750px,最终页面会换算成 10rem
      propList: ['*']
    }
  }
}