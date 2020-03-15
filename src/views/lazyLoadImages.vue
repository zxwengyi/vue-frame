<template>
  <div class="lazy-load-image">
    <ul id="container">
      <li v-for="(img, index) in list" :key="index">
        <img v-lazy="img" />
        <p>{{index+1}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "http://hilongjw.github.io/vue-lazyload/dist/avatar/test1.jpg",
        "http://hilongjw.github.io/vue-lazyload/dist/avatar/test2.jpg",
        "http://hilongjw.github.io/vue-lazyload/dist/avatar/test3.jpg",
        "http://hilongjw.github.io/vue-lazyload/dist/avatar/test4.jpg",
        "http://hilongjw.github.io/vue-lazyload/dist/avatar/test5.jpg",
        "http://hilongjw.github.io/vue-lazyload/dist/avatar/test6.jpg",
        "http://hilongjw.github.io/vue-lazyload/dist/avatar/test7.jpg",
        "http://hilongjw.github.io/vue-lazyload/dist/avatar/test8.jpg",
        "http://hilongjw.github.io/vue-lazyload/dist/avatar/test9.jpg",
        "http://hilongjw.github.io/vue-lazyload/dist/avatar/test10.jpg",
        "http://hilongjw.github.io/vue-lazyload/dist/avatar/test11.jpg",
        "http://hilongjw.github.io/vue-lazyload/dist/avatar/test12.jpg",
        "http://hilongjw.github.io/vue-lazyload/dist/avatar/test13.jpg",
      ]
    };
  }
};
</script>

<style></style>
