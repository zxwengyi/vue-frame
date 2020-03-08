<template>
  <div>
    <p>page{{ name }}</p>
    <svg-icon icon-name="setting" class-name="set" />
    <svg-icon icon-name="message" />
    <p>{{ number }}</p>
    <div @click="addEnd">add</div>
    <button @click="toPath('about')">to abaout</button>
    <button @click="toPath('login')">to login</button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      name: "Home"
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
      this.add({ number: 1 });
    },
    toPath(path) {
      this.$router.push({ name: path });
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
</style>
