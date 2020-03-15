<template>
  <div class="length-list">
    <div class="title">虚拟长列表，保证无限列表不会导致内存泄露</div>
    <virtual-list
      :size="size"
      :remain="10"
      :bench="0"
      :start="0"
      :totop="totop"
      :tobottom="tobottom"
    >
      <item v-for="item of items" :key="item.id" :height="size" :info="item" />
    </virtual-list>
  </div>
</template>
<script>
import item from "./item";
import virtualList from "vue-virtual-scroll-list";
const itemList = [];
for (let idx = 0; idx < 200; idx++) {
  itemList.push({
    index: idx
  });
}
export default {
  data() {
    return {
      items: itemList,
      size: 50
    };
  },
  components: { item, "virtual-list": virtualList },
  methods: {
    totop() {
      console.log("totop");
    },
    tobottom() {
      console.log("tobottom");
    }
  }
};
</script>
<style scoped lang="scss">
.title {
  font-size: 0.4rem;
  color:red;
}
</style>
