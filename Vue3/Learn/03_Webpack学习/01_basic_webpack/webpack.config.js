
// webpack.config.js 设置打包入口和出口

const path = require("path");


// 只能用CommonJS的导出方式
module.exports = {
  entry:"./src/main.js",
  output:{
    //绝对路径
    path: path.resolve(__dirname,"./build"),
    filename:"bundle.js"
  }
}
