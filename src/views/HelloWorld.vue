<template>
  <div class="hello">
    <svg-icon icon-name="setting" class-name="set" />
    <svg-icon icon-name="message" />
    <p>{{ number }}</p>
    <div @click="addEnd">add</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    ...mapGetters({
      number: 'number'
    })
  },
  methods: {
    ...mapActions("app", {
      add: "Add"
    }),
    addEnd() {
      this.add({ number:  1});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$maimClore: rgb(60, 119, 119);
.svg-icon.set {
  width: 40px;
  height: 40px;
  color: $maimClore;
}
</style>
