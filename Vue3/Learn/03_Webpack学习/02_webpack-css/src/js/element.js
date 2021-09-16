import "../css/style.css";
// 内联使用css-loader
// import "css-loader!../css/style.css";

import "../css/title.less"

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "xxxxx";

document.body.appendChild(divEl);
