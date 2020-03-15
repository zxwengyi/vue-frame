<template>
  <div class="item" :style="itemStyle">{{ info.index }}</div>
</template>
<script>
export default {
  name: "Item",
  props: {
      height: {
      type: Number,
      default: 0
    },
    info: {
      type: Object,
      default: () => ({
        index: ""
      })
    }
  },
  computed: {
    itemStyle() {
      return {
        height: `${this.height}px`,
        "line-height": `${this.height}px`
      };
    }
  }
};
</script>

<style scoped lang="scss">
.item {
  height: 1rem;
  align-content: center;
  border-bottom: solid 1px #cccccc;
}
</style>
