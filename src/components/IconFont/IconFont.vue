<template>
  <i :class="{ iconfont: true, [type]: true }"></i>
</template>

<script>
export default {
  name: "icon-font",
  props: {
    type: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import url(https://at.alicdn.com/t/font_2748460_067edli3gvj9.css);
</style>