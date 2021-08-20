<template>
  <lighting-box class="module user-bar" type="in">
    <div class="user-bar-content">
      <div
        class="user-icon-box user-none"
        v-for="(item, index) in 4 - list.length"
        :key="4 - list.length - index"
      >
        <icon-font type="icon-plus"></icon-font>
      </div>
      <div class="user-icon-box" v-for="(item, index) in list" :key="4 - index">
        <user-image :src="item[img]" />
      </div>
      <div class="user-icon-box user-self">
        <user-image :src="user[img]" />
      </div>
      <div class="user-icon-box user-ranking">
        <img :src="getRankImage(user[rank])" />
      </div>
    </div>
  </lighting-box>
</template>

<script>
import LightingBox from "@/components/LightingBox/LightingBox";
import UserImage from "@/components/UserImage/UserImage";

export default {
  components: { LightingBox, UserImage },
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
    rank: {
      type: String,
      default: "rank",
    },
    level: {
      type: String,
      default: "level",
    },
  },
  methods: {
    // This icon data is from R6Tracker. (https://r6.tracker.network/)
    getRankImage(rank) {
      if (typeof rank === "number") {
        if (rank < 0 || (rank > 20 && rank != 23)) {
          rank = 0;
        }
        if (rank >= 0 && rank <= 20) {
          return `https://trackercdn.com/cdn/r6.tracker.network/ranks/svg/hd-rank${rank}.svg`;
        } else {
          return "https://trackercdn.com/cdn/r6.tracker.network/ranks/svg/s15/hd-rank23.svg";
        }
      }
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
      overflow: hidden;

      &:not(:last-child) {
        margin-right: 10px;
      }

      &.user-none {
        width: 41px;
        height: 41px;
        font-size: 20px;
        line-height: 41px;
        text-align: center;
        border: 2px dashed #666;
        color: #666;
      }

      &.user-self {
        border-left: 1px solid #666;
        padding-left: 10px;
      }
    }

    .user-ranking {
      img {
        max-width: 100%;
      }
    }
  }
}
</style>