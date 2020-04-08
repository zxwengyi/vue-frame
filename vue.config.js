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
  publicPath: "/public",
  devServer: {
    port: port,
    open: true,
    proxy: {
      "/api": {
        target: "http://xxxx/device/", // 对应自己的接口
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    modules: false,
    sourceMap: IS_DEV,
    loaderOptions: {},
  },
  chainWebpack: (config) => {
    if (IS_DEV) {
      // 开发环境
      config.plugin("html").tap((args) => {
        args[0].isProd = false;
        return args;
      });
    } else {
      // 生产环境
      config.plugin("html").tap((args) => {
        args[0].isProd = true;
        return args;
      });
      // // 使用cdn加载插件
      // config.set("externals", {
      //   vue: "vue",
      //   axios: "axios",
      //   "vue-router": "VueRouter"
      // }),
      // 移除 prefetch 插件
      config.plugins.delete("prefetch");
      // 移除 preload 插件
      config.plugins.delete("preload");
      // 压缩代码
      config.optimization.minimize(true);
      // 分割代码
      config.optimization.splitChunks({
        // cacheGroups: {
        //   commons: {
        //     test: /[\\/]node_modules[\\/]/,
        //     // cacheGroupKey here is `commons` as the key of the cacheGroup
        //     name(module, chunks, cacheGroupKey) {
        //       const moduleFileName = module
        //         .identifier()
        //         .split("/")
        //         .reduceRight((item) => item);
        //       const allChunksNames = chunks.map((item) => item.name).join("~");
        //       return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
        //     },
        //     chunks: "all",
        //   },
        // },
        chunks: "all",
        cacheGroups: {
          vue_chunk: {
            name: "vue_chunk",
            test: /[\\/]node_modules[\\/]vue[\\/]/,
            chunks: "all",
            priority: 50,
            reuseExistingChunk: true,
            enforce: true
          },
          vuex_chunk: {
            name: "vuex_chunk",
            test: /[\\/]node_modules[\\/]_?vuex[\\/]/,
            chunks: "all",
            priority: 40,
            reuseExistingChunk: true,
            enforce: true
          },
          axios_chunk: {
            name: "axios_chunk",
            test: /[\\/]node_modules[\\/]_?axios[\\/]/,
            chunks: "all",
            priority: 30,
            reuseExistingChunk: true,
            enforce: true
          },
          vue_router_chunk: {
            name: "vue_router_chunk",
            test: /[\\/]node_modules[\\/]_?vue-router[\\/]/,
            chunks: "all",
            priority: 20,
            reuseExistingChunk: true,
            enforce: true
          },
          commons: {
            name: "chunk-commons",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
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
        symbolId: "icon-[name]",
      });
  },
  configureWebpack: {
    name: title,
  },
  productionSourceMap: IS_DEV ? true : false,
};
