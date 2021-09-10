<template>
  <div
    :class="{
      module: true,
      'lighting-box': true,
      [type]: true,
      hover: hovering,
      'high-light': highLight,
    }"
  >
    <div class="box" :style="{ 'border-color': borderColor }">
      <div
        class="content"
        @mouseenter="OnMouseEnter()"
        @mouseleave="OnMouseLeave()"
      >
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
    highLight: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hovering: false,
    };
  },
  methods: {
    OnMouseEnter() {
      this.hovering = true;
    },
    OnMouseLeave() {
      this.hovering = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.module.lighting-box {
  display: inline-block;
  transition: all 0.2s;
  overflow: hidden;

  &.out {
    position: relative;
    border: 2px solid rgba(255, 255, 255, 0);
    padding: 5px;
    margin: -7px;

    &.hover {
      padding: 0;
      margin: -2px;
    }
  }

  &.in {
    border: 2px solid rgba(255, 255, 255, 0);
    margin: -2px;
  }

  &.hover {
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

  &.high-light {
    &::after {
      content: "";
      position: absolute;
      top: -50vw;
      left: -200px;
      width: 200px;
      height: 100vw;
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0)
      );
      background-size: 100% 100%;
      background-repeat: no-repeat;
      transform: rotate(20deg);
      pointer-events: none;
    }

    &:hover::after {
      transition: all .5s;
      left: 150%;
    }
  }
}
</style>