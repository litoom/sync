import { sum } from "./js/math";
const { priceFormat } = require("./js/format");

import "./js/element";

console.log(sum(20, 30));
console.log(priceFormat());

//把Vue当成一个模块引入,所以需要在webpack中安装vue
//开发 生产阶段都有vue库，所以全局安装
// npm install vue@next
import { createApp } from "vue/dist/vue.esm-bundler";

const app = createApp({
  template: `<h2>我是vue渲染的</h2>`,
  data() {
    return {
      title: "hello,vue"
    }
  }
});
app.mount("#app");
