<template>
  <div class="length-timer-task">耗时任务放到子组件:{{ reslut }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      reslut: 0
    };
  },
  created() {
    this.heavy();
  },
  computed: {
    base() {
      const length = 'wewrerewtret'.length
      return length;
    }
  },
  methods: {
    heavy() {
        // 1.合理利用局部变量
      const baseVariable = this.base;
      let reslut = this.reslut;
      for (let i = 0; i < 100000; i++) {
        // reslut += this.base;
        reslut += baseVariable;
      }
      this.reslut = reslut;
        setTimeout(() => {
          this.message = "子组件的耗时任务";
          this.reslut = 10;
        }, 2000);
    }
  }
};
</script>

<style></style>
