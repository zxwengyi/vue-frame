<template>
  <div>
    <p>page{{ name }}</p>
    <svg-icon icon-name="setting" class-name="set" />
    <svg-icon icon-name="message" />
    <p>{{ number }}</p>
    <div @click="addEnd">add</div>
    <button @click="toPath('about')">to abaout</button>
    <button @click="toPath('login')">to login</button>
    <section class="btn">
      <van-button type="default">默认按钮</van-button>
      <!-- 自定义指令，方便使用 -->
      <van-button type="primary" v-loading="isloading" @click="update">loading directtive</van-button>
      <!-- 以函数形式创建全局弹窗组件，减少侵入式引用 -->
      <van-button type="info" @click="showNotice">notice</van-button>
      <!-- 虚拟长列表，保证无限列表不会导致内存泄露 -->
      <van-button type="danger" @click="toPath('scroll')">虚拟列表</van-button>
      <!-- 使用图片懒加载组件 -->
      <van-button type="warning" @click="toPath('lazy')">图片懒加载</van-button>
      <!-- 展示形的组件使用函数式组件 -->
      <Functional :message="message"></Functional>
      <!-- 耗时任务放在子组件 -->
      <length-time-lask></length-time-lask>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Notice from "../components/notice";
import Functional from "./functionalComp";
import LengthTimeLask from "./lengthTimeLask";
export default {
  name: "Home",
  components: { Functional,LengthTimeLask},
  data() {
    return {
      name: "Home",
      isloading: false,
      message: "简单显示内容，使用函数式组件，提高渲染效率",
      list: [{
        name: '1',
        id: 1
      }]
    };
  },
  computed: {
    ...mapGetters({
      number: "number"
    })
  },
  methods: {
    ...mapActions("app", {
      add: "Add"
    }),
    addEnd() {
      // let a = 1;
      this.add({ number: 1 });
    },
    toPath(path) {
      this.$router.push({ name: path });
    },
    // 使用自定义指令
    update() {
      this.isloading = true;
      setTimeout(() => {
        this.isloading = false;
      }, 2000);
    },
    // 使用动态组件
    showNotice() {
      const notice = this.$createNotice(Notice, {
        title: "标题",
        message: "消息内容",
        duration: 2000
      });
      notice.show();
    }
  }
};
</script>
<style scoped lang="scss">
$maimClore: rgb(49, 148, 110);
.svg-icon.set {
  width: 750px;
  height: 1rem;
  color: $maimClore;
}
.btn {
  display: flex;
  flex-direction: column;
}
</style>
