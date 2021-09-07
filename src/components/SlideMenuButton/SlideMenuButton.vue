<template>
  <div class="module slide-menu-button" @mouseenter="OnMouseEnter()">
    <input
      class="state-saver"
      type="radio"
      :name="name"
      ref="stateSaver"
    />
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
      default: "slide-menu-button",
    },
  },
  methods: {
    OnMouseEnter() {
      this.$refs.stateSaver.checked = true;
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
    transition: all .2s;
  }

  .state-saver:checked + .slide-menu-button-bg {
    background-size: 100% 100%;
  }
}
</style>