
// webpack.config.js 设置打包入口和出口

const path = require("path");


// 只能用CommonJS的导出方式
module.exports = {
  entry: "./src/main.js",
  output: {
    //绝对路径
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    // module.rules允许配置多个loader
    rules: [{
      test: /\.css$/,             //正则表达式,匹配到css结尾的使用css-loader
      //1.loader的写法一，语法糖
      // loader:"css-loader"

      //2.loader的写法二 完整写法
      // use: [{ loader: "css-loader" }]
      use: ["style-loader", "css-loader", "postcss-loader"
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
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"]
    },
    // 奇怪奇怪真奇怪
    {
      test: /\.(jpg|gif|svg|jpeg|png)$/,
      use: {
        // loader: "file-loader",
        loader: "url-loader",
        options: {
          //outputPath:"img",//可省略写到下面
          name: "img/[name]_[hash:6].[ext]",
          // webpack5以上，允许使用资源文件，无需配置额外的loader，
          // webpack5本身已经内置了asset资源模块来处理
          // 解决办法：将asset的模块类型设置为type: 'javascript/auto'

          // 关闭es6语法规范
          esModule: false,
          // limit是url-loader的option
          limit: 1000 * 1024
        }
      },
      type: 'javascript/auto'
    },
      //在webpack5，不需要上述的url-loader fail-loader
      // {
      //  test: /\.png$/,
      //  type:"asset",
      // generator:{
      //   filename:"img/[name]_[hash:6][ext]"
      // }
      //  parser:{
      //    dataUrlCondition:{
      //      maxSize: 1000 * 1024
      //  }
      //  }
      // }

      // 字体配置方式一:
      // {
      //   test:/\.eot|ttf|woff/,
      //   use:{
      //     loader:"file-loader",
      //     options:{
      //       name:"font/[name]_[hash:6].[ext]",
      //       esModule: false,
      //     }
      //   },
      //   type: 'javascript/auto'
      // }
      //字体配置方式二： asset
      {
        test:/\.ttf|eot|woff2$/,
        // asset/resource对应的就是file-loader
        type:"asset/resource",
        generator:{
          filename:"font/[name]_[hash:6][ext]"
        }
      }
    ]
  }
}
