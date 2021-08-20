<template>
  <div class="module progress-bar">
    <div
      class="progress-block"
      :style="{ width: ((value - min) / (max - min)) * 100 + '%' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "progress-bar",
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.module.progress-bar {
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border: 1px solid #666;
  background-color: #000;

  .progress-block {
    height: 100%;
    background-color: #fff;
  }
}
</style>