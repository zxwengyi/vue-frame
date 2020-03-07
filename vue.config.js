const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const port = 8000;
const title = 'frame';

module.exports = {
    devServer:{
        port: port
    },
    chainWebpack: config => {
        if (process.env.use_analyzer) {     // 分析
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        }
    },
    configureWebpack:{
        name: title
    }
}