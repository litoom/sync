Vue3的引入
  1.CDN
  2.本地引入

{
template:``
data:function(){}
methods:{}
}

template
  Vue需要帮我们渲染的模板信息
  两种写法

data
  Vue3需要data是一个函数，该函数返回一个对象

methods
  用this访问data中返回的对象的属性


阅读Vue3源码
  package.json 
  "dev": "node scripts/dev.js --sourcemap",
      --sourcemap  代码映射到具体的文件

v-once v-text v-html v-pre v-cloak

v-bind
  <a v-bind:href="link">click</a>
  语法糖:<a :href="link">click</a>

v-bind动态绑定class
  对象语法
