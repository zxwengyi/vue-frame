const confige = {}
let baseUrl = '';


const currentMode = process.env.VUE_APP_CURRENTMODE
if (currentMode == 'dev') {
  baseUrl = `https://easy-mock.com/mock/5d672a8e8fe5585a2803432f/vueAdmin`; // 开发环境地址
} else if (currentMode == 'prod') {
  baseUrl = `https://api.xxxxxx.cn`; // 生产环境地址
} else if (currentMode == 'test') {
  baseUrl = `https://api.xxxxxx.cn`; // 测试环境地址
}
confige.baseUrl = baseUrl
export {
  confige
}
