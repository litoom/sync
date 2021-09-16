
// webpack.config.js 设置打包入口和出口

const path = require("path");


// 只能用CommonJS的导出方式
module.exports = {
  entry: "./src/main.js",
  output: {
    //绝对路径
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    // module.rules允许配置多个loader
    rules: [{
      test: /\.css$/,             //正则表达式,匹配到css结尾的使用css-loader
      //1.loader的写法一，语法糖
      // loader:"css-loader"

      //2.loader的写法二 完整写法
      // use: [{ loader: "css-loader" }]
      use:["style-loader","css-loader","postcss-loader"
      //postcss的配置信息可以抽取到postcss.config.js文件中      
      // {
      //   loader:"postcss-loader",
      //   options:{
      //     postcssOptions:{
      //       plugins:[
      //         require("autoprefixer")
      //       ]
      //     }
      //   }
      // }
    ]
      // use的顺序是从右到左
    },
  {
    test:/\.less$/,
    use:["style-loader","css-loader","less-loader"]
  }]
  }
}
