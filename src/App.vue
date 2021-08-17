<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url(@/assets/scss/r6-font.scss);

body {
  margin: 0;
  padding: 0;
  background-color: #bcdef4;
  /* color: #fff; */
  font-family: "R6Font", Arial, Helvetica, sans-serif;
}
</style>
