<template>
  <div>
    <p v-loading="isloading">page{{ name }}</p>
    <svg-icon icon-name="setting" class-name="set" />
    <svg-icon icon-name="message" />
    <p>{{ number }}</p>
    <div @click="addEnd">add</div>
    <button @click="toPath('about')">to abaout</button>
    <button @click="toPath('login')">to login</button>
    <section class="btn">
      <van-button type="default">默认按钮</van-button>
      <van-button type="primary" @click="update">loading directtive</van-button>
      <van-button type="info" @click="showNotice">notice</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Notice from "../components/notice";
export default {
  name: "Home",
  data() {
    return {
      name: "Home",
      isloading: false
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
     const notice = this.$createNotice(Notice, {title: '标题', message: '消息内容', duration: 2000});
     notice.show()
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
