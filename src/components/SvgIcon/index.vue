
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="svgName"/>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    svgName() {
      // console.log('this.iconName' + this.iconName)
      return `#icon-${this.iconName}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style scoped>
  .svg-icon {
   width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  }
</style>
