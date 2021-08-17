<template>
  <div class="module level-block">
    <div :class="{ 'level-content': true, 'has-progress': showProgressBar }">
      {{ level }}
    </div>
    <div class="progress-content">
      <progress-bar :min="progressBarMin" :max="progressBarMax" :value="progressBarValue" />
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar/ProgressBar";

export default {
  name: "level-block",
  components: { ProgressBar },
  props: {
    level: {
      type: Number,
      default: 1,
    },
    showProgressBar: {
      type: Boolean,
      default: true,
    },
    progressBarMin: {
      type: Number,
      default: 0,
    },
    progressBarMax: {
      type: Number,
      default: 100,
    },
    progressBarValue: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.module.level-block {
  width: 65px;
  height: 65px;

  .level-content {
    width: 100%;
    height: 100%;
    background-image: url(~@/assets/img/level-background.png);
    background-size: 65px;
    background-repeat: no-repeat;
    background-position: 50%;
    font-size: 20px;
    line-height: 65px;
    color: #fff;
    text-align: center;

    &.has-progress {
      height: 60px;
      background-size: 60px;
      line-height: 60px;
    }
  }

  .progress-content {
    height: 5px;
  }
}
</style>