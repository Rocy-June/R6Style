<template>
  <div :class="{ module: true, 'lighting-box': true, [type]: true }">
    <div class="box" :style="{ 'border-color': borderColor }">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lighting-box",
  props: {
    type: {
      type: String,
      default: "out",
      validator(v) {
        return ["in", "out"].indexOf(v) >= 0;
      },
    },
    borderColor: {
      type: String,
      default: "#666",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.module.lighting-box {
  display: inline-block;
  transition: all 0.2s;

  &.out {
    border: 2px solid rgba(255, 255, 255, 0);
    padding: 3px;
    margin: -5px;

    &:hover {
      padding: 0;
      margin: -2px;
    }
  }

  &.in {
    border: 2px solid rgba(255, 255, 255, 0);
    margin: -2px;
  }

  &:hover {
    border: 2px solid #fff;

    .box {
      border: 1px solid #fff !important;
    }
  }

  .box {
    padding: 0;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;

    .content {
      margin: -1px;
    }
  }
}
</style>