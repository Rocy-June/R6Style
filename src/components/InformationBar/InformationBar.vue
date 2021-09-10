<template>
  <div
    :class="{
      module: true,
      'information-bar': true,
      [type]: true,
      active: show,
    }"
  >
    <div class="page-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "information-bar",
  props: {
    type: {
      type: String,
      default: "info",
      validator(v) {
        return ["info", "error", "success"].indexOf(v) >= 0;
      },
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.module.information-bar {
  color: rgba(255, 255, 255, 0);
  font-size: 24px;
  line-height: 1.5em;
  transition: all 0.3s;

  .page-content {
    padding-left: 50px;
    transition: all 0.3s;
  }

  &.active {
    &.info {
      background-color: rgba(50, 50, 50, 0.6);
    }

    &.error {
      background-color: rgba(180, 0, 0, 0.8);
    }

    &.success {
      background-color: #5cbdea;
    }

    .page-content {
      animation: reset 0.3s;
      animation-fill-mode: forwards;

      @keyframes reset {
        40% {
          padding-left: 50px;
          color: rgba(255, 255, 255, 0);
        }

        100% {
          padding-left: 0;
          color: #fff;
        }
      }
    }
  }
}
</style>