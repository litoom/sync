import "../css/style.css";
// 内联使用css-loader
// import "css-loader!../css/style.css";

import "../css/title.less";
import "../css/image.css";

import zqImg from "../img/2.png";

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "xxxxx";

// 设置背景图片
const bgDivEl = document.createElement("div");
bgDivEl.className = "image-bg";

// 设置img元素的src,需要当成一个模块使用
const imgEl = document.createElement("img");
// imgEl.src = "../img/zq.jpeg";
imgEl.src = zqImg;

document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
