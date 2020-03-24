const path = require("path");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
// const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}
const IS_DEV = process.env.VUE_APP_CURRENTMODE === "dev" ? true : false;

const port = 8000;
const title = "frame";

module.exports = {
  devServer: {
    port: port,
    open: true,
    proxy: {
      "/api": {
        target: "http://xxxx/device/", // 对应自己的接口
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },

  chainWebpack: config => {
    if (IS_DEV) { // 开发环境
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    } else { // 生产环境
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
      // 使用cdn加载插件
      config.set("externals", {
        vue: "vue",
        axios: "axios",
        "vue-router": "VueRouter"
      }),
        // 移除 prefetch 插件
        config.plugins.delete("prefetch");
      // 移除 preload 插件
      config.plugins.delete("preload");
      // 压缩代码
      config.optimization.minimize(true);
      // 分割代码
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial" // only package third parties that are initially dependent
          },
          vantUI: {
            name: "chunk-vantUI", // split vantUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?vant(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      });
      if (process.env.use_analyzer) {
        // 分析
        config
          .plugin("webpack-bundle-analyzer")
          .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
      }
    }
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();

    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });
  },
  configureWebpack: {
    name: title
  },
  productionSourceMap: IS_DEV ? true : false
};
