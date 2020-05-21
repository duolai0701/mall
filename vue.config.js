module.exports = {
  // lintOnSave: false
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    },
    disableHostCheck:true //webpack4.0 开启热更新
  }
}