import { sum } from "./js/math";
const { priceFormat } = require("./js/format");

import "./js/element";

console.log(sum(20, 30));
console.log(priceFormat());

//把Vue当成一个模块引入,所以需要在webpack中安装vue
//开发 生产阶段都有vue库，所以全局安装
// npm install vue@next
// vue的不同版本,运行时＋编译器
import { createApp } from "vue/dist/vue.esm-bundler";

import App from "./vue/App.vue";

// const app = createApp({
//   template: "#my-app",
//   data() {
//     return {
//       title: "hello,vue",
//       message:"xxx"
//     }
//   }
// });
const app = createApp(App);
app.mount("#app");
