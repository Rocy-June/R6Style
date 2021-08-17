<template>
  <div :class="{ module: true, 'nav-bar': true, 'nav-bg': isShowBg }">
    <div
      class="nav-box"
      :style="{ width: typeof width === 'string' ? width : width + 'px' }"
    >
      <div class="nav-content">
        <div class="nav-tab" v-for="(item, index) in list" :key="index">
          <a
            :href="item[url]"
            :class="{ 'tab-content': true, active: current == index }"
          >
            {{ item[name] }}
          </a>
        </div>
      </div>
      <div class="nav-right">
        <slot></slot>
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
.module.nav-bar {
  padding: 75px 0 50px;

  &.nav-bg {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }

  .nav-box {
    display: flex;
    justify-content: space-between;
    margin: auto;

    .nav-content {
      display: flex;

      .tab-content {
        position: relative;
        display: block;
        margin: 0 0.25em;
        padding: 0em 0.5em;
        font-size: 32px;
        line-height: 1.5em;
        color: rgba(255, 255, 255, 0.5);
        background-image: radial-gradient(
          #fff 0,
          rgba(255, 255, 255, 0.5) 25%,
          rgba(255, 255, 255, 0) 70%
        );
        background-size: 60px 2em;
        background-position: 50% 1.5em;
        background-repeat: no-repeat;
        transition: color 0.2s, background 0.2s;
        text-decoration: none;
        cursor: pointer;
        user-select: none;

        &.active {
          color: #fff;
          border-bottom: 3px solid #fff;

          &:hover {
            color: #fff;
            border-bottom: 3px solid #fff;
          }
        }

        &:hover {
          color: rgba(255, 255, 255, 0.8);
          border-bottom: 3px solid rgba(255, 255, 255, 0.75);
          background-size: 75px 2.5em;
          background-position: 50% 0.5em;
        }
      }
    }

    .nav-right {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>