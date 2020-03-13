<template>
  <div class="box" v-if="isShow">
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(() => {this.hide()}, this.duration)
    },
    hide(){
        this.isShow = false
        this.remove()
    }
  }
};
</script>

<style>
 .box{
   position: fixed;
   width: 80%;
   height: 200px;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   display: flex;
   background: #cccccc;
   flex-direction: column;
   justify-content: space-around;
   text-align: center;
 }
</style>
