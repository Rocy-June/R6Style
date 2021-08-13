<template>
  <div :class="{ module: true, 'nav-bg': isShowBg }">
    <div
      class="nav-box"
      :style="{ width: typeof width === 'string' ? width : width + 'px' }"
    >
      <div class="nav-tab" v-for="(item, index) in list" :key="index">
        <div :class="{ 'tab-content': true, active: current == index }">
          {{ item[name] }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-bar",
  props: {
    isShowBg: {
      type: Boolean,
      default: true,
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
    url: {
      type: String,
      default: "url",
    },
    current: {
      type: Number,
      default: 0,
    },
    width: {
      type: [String, Number],
      default: 1100,
    },
  },
};
</script>
<style lang="scss" scoped>
.module {
  padding: 75px 0 50px;

  &.nav-bg {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }

  .nav-box {
    display: flex;
    margin: auto;

    .tab-content {
      margin: 0 1rem;
      padding: 0.5rem 0.5rem;
      font-size: 32px;
      color: rgba(255, 255, 255, 0.5);
      transition: color 0.2s;
      cursor: pointer;
      user-select: none;

      &.active {
        color: #fff;
        border-bottom: 3px solid #fff;

        &:hover {
          color: #fff;
        }
      }

      &:hover {
        color: rgba(255, 255, 255, 0.75);
      }
    }
  }
}
</style>