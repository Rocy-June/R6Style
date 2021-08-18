<template>
  <i
    :class="{ iconfont: true, [type]: true }"
    :style="{ 'font-size': typeof size === 'string' ? size : size + 'px' }"
  ></i>
</template>

<script>
export default {
  name: "icon-font",
  props: {
    type: {
      type: String,
      default: "",
    },
    size: {
      type: [Number, String],
      default: 14,
    },
  },
};
</script>

<style lang="scss">
@import url(https://at.alicdn.com/t/font_2748460_uoyg3bida5p.css);
</style>