var webpack = require("webpack") ;
const express=require("express");
const app=express();
const jsonServer=require("json-server");
const apiServer = jsonServer.create();
const apiRouter = jsonServer.router('./mock/db.json');
var middlewares = jsonServer.defaults(); 
apiServer.use(middlewares);
apiServer.use(apiRouter);
apiServer.listen(3000)

module.exports = {
    baseUrl: '/',
    // 输出文件目录
    outputDir: 'dist',
    lintOnSave: true,
    chainWebpack: () => {},
    configureWebpack: () => {},
    productionSourceMap: true,
    css: {
     extract: true,
     sourceMap: false,
     loaderOptions: {},
     modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
     open: process.platform === 'darwin',
     host: '0.0.0.0',
     port: 8080,
     https: false,
     hotOnly: false,
     proxy: {
         "/api":{
             target:"http://localhost:3000",
             changeOrigin: true,
             pathRewrite: {
                '^/api': '/'
            }
         }
     },
     before: app => {
       
     },
    }, 
    // 第三方插件配置
    pluginOptions: {
        
    },
    lintOnSave :false,
    // 多页面
    // pages:{
    //     app:{
    //         entry:'src/main.js'
    //     },
    //     // buy:{
    //     //     entry:'./src/pages/buy/buy.js'
    //     // },
    //     detail:{
    //         entry:'./src/pages/detail/detail.js',
    //         template:'src/pages/detail/detail.html',
    //         filename:'detail.html'
    //     },
    //     subpage:'src/main.js'
    // }
}
