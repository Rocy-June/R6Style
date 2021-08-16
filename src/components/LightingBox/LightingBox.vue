<template>
  <div class="module lighting-box">
    <div class="box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "lighting-box",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.module.lighting-box {
  display: inline-block;
  border: 2px solid rgba(255, 255, 255, 0);
  padding: 3px;
  margin: -3px;
  transition: all 0.2s;

  &:hover {
    border: 2px solid #fff;
    padding: 0;
    margin: 0;

    .box {
      border: 1px solid #fff;
    }
  }

  .box {
    padding: 0;
    border: 1px solid #ccc;
  }
}
</style>