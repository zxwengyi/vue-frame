<template>
  <div>
    <p>page{{ name }}</p>
    <svg-icon icon-name="setting" class-name="set" />
    <svg-icon icon-name="message" />
    <p>{{ number }}</p>
    <div @click="addEnd">add</div>
    <button @click="toPath">to abaout</button>
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
    toPath(){
        this.$router.push({name: "about"})
    }
  }
};
</script>
<style scoped lang="scss">
$maimClore: rgb(49, 148, 110);
.svg-icon.set {
  width: 40px;
  height: 40px;
  color: $maimClore;
}
</style>
