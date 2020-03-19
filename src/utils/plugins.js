import Vue from 'vue'
import 'lib-flexible'
import { Button } from 'vant';
// 按需引入UI组件
Vue.use(Button);

import VueLazyload from 'vue-lazyload'
// 使用图片懒加载插件
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/images/lost.jpg'),   //请求失败后显示的图片
  loading: require('@/assets/images/loading.gif'),   //加载的loading过渡图片
  attempt: 3,     // 加载错误后最大尝试次数
  listenEvents: ['scroll']
})
