import { sum } from "./js/math";
const { priceFormat } = require("./js/format");

import "./js/element";

if (module.hot) {
  module.hot.accept("./js/element.js", () => {
    console.log("element模块发生更新了，浏览器不刷新");
  });
}

console.log(sum(20, 30));
console.log(priceFormat());

//把Vue当成一个模块引入,所以需要在webpack中安装vue
//开发 生产阶段都有vue库，所以全局安装
// npm install vue@next
// vue的不同版本,运行时＋编译器
import { createApp } from "vue/dist/vue.esm-bundler";

import App from "./vue/App.vue";

const app = createApp(App);
app.mount("#app");

console.log("自动打包...热更新");

console.log("HMR 热替换");


import axios from "axios";
axios.get("");
