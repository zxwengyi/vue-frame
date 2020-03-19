import Vue from "vue";
// 引入自定义组件js
import createNotice from "../utils/createCompont";
Vue.prototype.$createNotice = createNotice;
// 6.自定义指令
Vue.directive("loading", function update(el, binding) {
    // console.log(el, binding, vnode);
    if (binding.value) {
      const html = document.createElement("div");
      html.innerText = "loading...";
      html.setAttribute("id", "loading");
      html.style.position = "fixed";
      html.style.left = 0;
      html.style.top = 0;
      html.style.width = "100%";
      html.style.height = "100%";
      html.style.display = "flex";
      html.style.justifyContent = "center";
      html.style.alignItems = "center";
      html.style.color = "white";
      html.style.background = "rgba(0,0,0,.7)";
      document.body.append(html);
    } else {
      const loading = document.getElementById("loading");
      loading && document.body.removeChild(loading)
    }
  }
);

