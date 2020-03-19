import Vue from "vue";
export default function createNotice(Compontent, props) {
  // 先实例化vm
  const vm = new Vue({
    render(h) {
      return h(Compontent, {props});
    }
  }).$mount();
  //  手动挂载到body上
  document.body.appendChild(vm.$el);
  //  编写销毁的方法
  const comp = vm.$children[0];
  comp.remove = function() {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  };
  return comp
}
