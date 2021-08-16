<template>
  <lighting-box class="module user-bar">
    <div class="user-bar-content">
      <div
        class="user-icon-box user-none"
        v-for="(item, index) in 4 - list.length"
        :key="4 - list.length - index"
      >
        <icon-font type="icon-plus"></icon-font>
      </div>
      <div class="user-icon-box" v-for="(item, index) in list" :key="4 - index">
        user-{{ index }}
      </div>
      <div class="user-icon-box user-self">user-self</div>
      <div class="user-ranking">ranking-img</div>
    </div>
  </lighting-box>
</template>

<script>
import LightingBox from "@/components/LightingBox/LightingBox.vue";

export default {
  components: { LightingBox },
  props: {
    user: {
      type: Object,
      default() {
        return {
          name: "Guest",
          img: "",
        };
      },
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    name: {
      type: String,
      default: "name",
    },
    img: {
      type: String,
      default: "img",
    },
  },
};
</script>

<style lang="scss" scoped>
.module.user-bar {
  .user-bar-content {
    display: flex;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);

    .user-icon-box {
      width: 45px;
      height: 45px;
      margin-right: 10px;
      overflow: hidden;

      &.user-none {
        width: 41px;
        height: 41px;
        font-size: 20px;
        line-height: 41px;
        text-align: center;
        border: 2px dashed #ccc;
        color: #ccc;
      }

      &.user-self {
        border-left: 1px solid #ccc;
        padding-left: 10px;
      }
    }
  }
}
</style>