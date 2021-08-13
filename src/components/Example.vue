<template>
  <div class="page">
    <!-- 'list' is for the Navs Data -->
    <!-- 'name' is what to show on the tab, default is 'name' -->
    <!-- 'url' is link for where will go to when user clicks the tab, default is 'url' -->
    <!-- 'isShowBg' decides whether the background needs to be displayed, default is ture -->
    <!-- 'current' decides which tab will high-light, default is 0 -->
    <!-- 'width' is the width of module, it could be 'String' and 'Number'(px), default is 1100(px) -->
    <nav-bar
      :list="navList"
      name="name"
      url="url"
      :isShowBg="true"
      :current="0"
      :width="1100"
    ></nav-bar>

    <!-- <user-bar :list="userList"></user-bar> -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";

export default {
  name: "",
  components: { NavBar },
  data() {
    return {
      navList: [
        { name: "HOME", url: "#" },
        { name: "OPERATORS", url: "#" },
        { name: "MATCHES", url: "#" },
        { name: "SHOP", url: "#" },
      ],
      userList: [{ name: "", photo: "" }],
    };
  },
};
</script>

<style scoped lang="scss">
.page {
}
</style>
