<template>
  <div class="module slide-menu-button">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.module.slide-menu-button {
  background-color: rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(#5CBDEA);
  background-size: 10% 100%;
  background-repeat: no-repeat;
}
</style>