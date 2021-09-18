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
    方法一：./node_moudles/.bin/webpack
    方法二：npx webpack
    方法三：或者在package.json的脚本中创建build命令 "build":"webpack"
        npm run build
      默认在当前所在目录下面的src里面的index.js开始打包

  指定入口和出口
    npx webpack --entry ./src/main.js --output-path ./build

  webpack.config.js
     webpack配置文件，设置打包入口和出口

  npm install 新项目安装依赖

  css-loader
    npm install css-loader -D
    loader配置 在webpack.config.js中配置
  style-loader
    npm install style-loader -D
    loader配置 在webpack.config.js中配置
  less sass
    npm install less -D 这个和webpack无关，本生就是个less->css 的工具
    npm install less-loader -D
    在webpack.config.js配置
  PostCSS
    autoprefixer插件
    postcss-preset-env插件 内置了autoprefixer

  file-loader
  url-loader 打包较小的文件，转成base64的uri

  asset module type
  字体 图片 css less sass 

  npx 是在node_modules、bin里面找某个命令的

  
  loader加载的是模块，css模块 less模块
  loader做不了的，又想在webpack中使用的是plugin

  CleanWebpackPlugin插件
    清理之前打包的文件夹
    1.npm install clean-webpack-plugin -D
    2.导入安装的插件
    const {CleanWebpackPlugin } = require("clean-webpack-plugin");
    3.plugins: [new CleanWebpackPlugin()]
  HtmlWebpackPlugin插件
    根目录下可以不需要index.html文件
    打包index.html文件到build文件夹内，同时可以设置打包html文件的模板等
  CopyWebpackPlugin
    从public文件夹里复制文件  类如 ico文件


  Mode配置  --方便debug
    mode:"development"
    devtool:"source-map"


  Babel
    Babel在命令行使用
      本身是一个独立的工具，和postcss一样.
      @babel/core  核心代码 必须安装
      @babel/cli   可以在命令行使用babel
      npm install @babel/plugin-transform-arrow-functions -D
      npx babel demo.js --out-file test.js--plugins=@babel/             plugin-transform-arrow-functions,
      @babel/plugin-transform-block-scoping

    Babel的预设preset
      安装 @babel/preset-env
      使用 npx babel demo.js --out-file test.js --presets=@babel/preset-env

  在webpack中使用Babel：
    babel-loader 也需安装babel/core


Vue源码的Webpack的打包
  .vue文件的loader
    1.安装  vue-loader@next   
    2.安装  @vue/compiler-sfc  不需要use设置,vue-loader自动调用这个库
    3.导入  const {VueLoaderPlugin} = require("vue-loader/dist/index")
    4.设置plugin  new VueLoaderPlugin()


SFC 单文件组件  .vue文件



dev-server
  方法一：webpack watch模式
      package.json配置"build": "webpack --watch"
  方法二：webpack-dev-server
      1. npm install webpack-dev-server -D
      2. package.json"server": "webpack server" 生成build空文件夹
      3. webpack.config.js devServer:{
        contentBase更新为static：
        statci的作用：在开发阶段，public文件里有大量静态资源 如视频文件，如果使用copywebpackplugin，在会浪费大量时间进行拷贝，所以可以设置使用statci
        在打包阶段，还是需要使用copywebpackplugin，把所有资源进行打包
   }
