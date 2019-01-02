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
    parallel: require('os').cpus().length > 1,
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
    }, 
    // 第三方插件配置
    // pluginOptions: {},
    lintOnSave :false,
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
