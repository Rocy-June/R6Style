<template>
  <div
    :class="{
      module: true,
      'slide-menu-button': true,
      [type]: true,
    }"
    @mouseenter="OnMouseEnter()"
    @mouseleave="OnMouseLeave()"
  >
    <input class="state-saver" type="radio" :name="name" ref="stateSaver" />
    <div class="slide-menu-button-bg">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "slide-menu-button",
  props: {
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "menu",
      validator(v) {
        return ["menu", "ready"].indexOf(v) >= 0;
      },
    },
  },
  methods: {
    OnMouseEnter() {
      this.$refs.stateSaver.checked = true;
    },
    OnMouseLeave() {
      if (!this.name) {
        this.$refs.stateSaver.checked = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.module.slide-menu-button {
  .state-saver {
    display: none;
  }

  .slide-menu-button-bg {
    background-color: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(#5cbdea);
    background-size: 10px 100%;
    background-repeat: no-repeat;
    transition: all 0.1s;
  }

  .state-saver:checked + .slide-menu-button-bg {
    background-size: 100% 100%;
  }

  &.menu {
    .slide-menu-button-bg {
      background-image: linear-gradient(#5cbdea);
    }
  }

  &.ready {
    .slide-menu-button-bg {
      background-image: linear-gradient(#f00);
    }
  }
}
</style>