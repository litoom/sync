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

v-if和v-show
  v-if 为false，不渲染
  v-show 为false，渲染但不显示 display：none ，不能和v-else一起使用，且不支持template

v-for 遍历数组 对象 数字
    key的作用：
      VNode:Virtual Node 虚拟节点
      虚拟DOM：多个VNode组成虚拟DOM

    mount:挂载 div->真实DOM
    unmount卸载：
    
    
  VNode是一个类，可以生产不同类型的vnode实例，不同类型的实例表示不同类型的真实DOM。

  由于Vue.js对组件采用了虚拟DOM来更新视图，当属性发生变化时，整个组件都要进行重新渲染的操作，但组件内并不是所有的DOM节点都需要更新，所以将vnode缓存并将当前新生成的vnode和缓存的vnode作对比，只对需要更新的部分进行DOM操作可以提升很多的性能。

  vnode有很多类型，它们本质上都是Vnode实例化出的对象，其唯一区别是属性不同。


key的作用
  在我们上述diff算法中，通过isSameVNodeType方法判断，来判断key是否相等判断新老节点。
  在v-for循环中，key的作用是：通过判断newVnode和OldVnode的key是否相等，从而复用与新节点对应的老节点，节约性能的开销

计算属性
watch监听器

浅拷贝：
  Object.assign(); 只能拷贝一层
深拷贝：
  JSON.parse(JSON.stringify(info));
  Lodash

v-model
    可以绑定input textarea checkbox 多选框

webpack5 vite
  webpack依赖：node npm
  npm install webpack webpack-cli -g
   5.37.1   4.7.0
   一般不用全局的webpack

  package.json
    npm init 创建package.json文件
    npm install webpack webpack-cli 局部安装
        开发阶段：  --save-dev  简写-D
        生产阶段：  
   package-lock.json：
    记录真正的安装的版本号
  node_modules:
    安装webpack所依赖安装的包

  局部打包命令：
    ./node_moudles/.bin/webpack
    npx webpack
    或者在package.json的脚本中创建build命令 "build":"webpack"
        npm run build
      默认在当前所在目录下面的src里面的index.js开始打包

  指定入口和出口
    npx webpack --entry ./src/main.js --output-path ./build
