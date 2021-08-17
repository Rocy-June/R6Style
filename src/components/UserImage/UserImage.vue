<template>
  <full-image class="module user-image" :src="imgSrc" :onError="onImageError" />
</template>

<script>
import FullImage from "@/components/FullImage/FullImage";

import ErrorImage from "@/assets/img/user-img-error.png";

export default {
  name: "user-image",
  components: { FullImage, ErrorImage },
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      imgSrc: this.src,
    };
  },
  methods: {
    onImageError() {
      this.imgSrc = ErrorImage;
    },
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