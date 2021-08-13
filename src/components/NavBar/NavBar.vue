<template>
  <div :class="{ module: true, 'nav-bg': isShowBg }">
    <div></div>
  </div>
</template>
<script>
export default {
  name: "nav-bar",
  props: {
    isShowBg: {
      type: Boolean,
      default: true,
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    current: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style lang="scss" scoped>
.module {
  display: flex;
}
</style>