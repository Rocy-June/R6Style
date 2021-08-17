<template>
  <img class="module user-image" :src="imgSrc" @error="onError" />
</template>

<script>
export default {
  name: "full-image",
  props: {
    src: {
      type: String,
      default: "",
    },
    onError: {
      type: Function,
      default() {
        console.log(this.src + " has cause an image error.");
      },
    },
  },
  data() {
    return {
      imgSrc: this.src,
    };
  },
  watch: {
    src(v) {
      this.imgSrc = v;
    },
  },
};
</script>

<style lang="scss" scoped>
.module.user-image {
  max-width: 100%;
}
</style>