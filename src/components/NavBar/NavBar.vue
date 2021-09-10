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
            :style="{ width: item[name].length * 16 + 'px' }"
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
  padding-top: 5px;

  &.nav-bg {
    background-color: rgba(0, 0, 0, 0.75);
  }

  .nav-box {
    display: flex;
    justify-content: space-between;
    margin: auto;

    .nav-content {
      display: flex;

      .nav-tab {
        align-self: flex-end;

        .tab-content {
          position: relative;
          display: block;
          padding: 0em 32px;
          font-size: 32px;
          line-height: 1.5em;
          text-align: center;
          color: rgba(255, 255, 255, 0.5);
          background-image: linear-gradient(
            0deg,
            rgba(80, 238, 231, 0.75),
            rgba(80, 238, 231, 0)
          );
          border-bottom: 5px solid rgba(80, 238, 231, 0);
          background-size: 100% calc(0.75em + 10px);
          background-position: 50% calc(1.5em + 10px);
          background-repeat: no-repeat;
          transition: all 0.2s;
          text-decoration: none;
          cursor: pointer;
          user-select: none;

          &.active {
            font-size: 38px;
            color: #fff;
            border-bottom: 5px solid #50eee7;

            &:hover {
              color: #fff;
            }
          }

          &:hover {
            font-size: 38px;
            color: rgba(255, 255, 255, 0.8);
            background-position: 50% 1em;
          }
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