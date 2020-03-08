import axios from 'axios'
import { confige } from '@/utils/config'

import store from '@/store'

// 创建axios 实例
const service = axios.create({
  baseURL: confige.baseUrl, // api的base_url
  timeout: 10000 // 请求超时时间
})
// request 拦截器
service.interceptors.request.use(
  config => {
    const token = store.getters.token
    if (token) {
      config.headers['Authtimzation'] = 'Bareat ' + token
    }
    // 这里可以自定义一些config 配置
    return config
  },
  error => {
    // 这里处理一些请求出错的情况

    console.log(error)
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 这里处理一些response 正常放回时的逻辑
    if (res.code !== 1) {
    //   Message({
    //       message: res.message || 'Error'
    //   })
    }
    return res
  },
  error => {
    // 这里处理一些response 出错时的逻辑

    return Promise.reject(error)
  }
)

export default service
