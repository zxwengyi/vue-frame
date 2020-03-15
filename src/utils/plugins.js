import Vue from 'vue'
import 'lib-flexible'
import { Button } from 'vant';
import VueLazyload from 'vue-lazyload'


Vue.use(Button);
 
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/images/01.png'),   //请求失败后显示的图片
  loading: require('@/assets/images/02.png'),   //加载的loading过渡图片
  attempt: 3,     // 加载错误后最大尝试次数
  listenEvents: ['scroll']
})