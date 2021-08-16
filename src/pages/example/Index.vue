<template>
  <div class="page">
    <!-- 'list' is for the Navs data -->
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
    >
      <!-- 'user' is for logged in user data -->
      <!-- 'list' is for other user data or something else -->
      <!-- 'name' is that user's name, default is 'name' -->
      <!-- 'img' is that user's custom picture, default is 'img' -->
      <user-bar
        :user="userData"
        :list="userList"
        name="name"
        img="img"
      ></user-bar>
      <lighting-box>
        <view class="setting-box">
          <icon-font class="icon-flip" type="icon-setting"></icon-font>
        </view>
      </lighting-box>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar";
import UserBar from "@/components/UserBar/UserBar";
import LightingBox from "@/components/LightingBox/LightingBox";

export default {
  name: "",
  components: { NavBar, UserBar, LightingBox },
  data() {
    return {
      navList: [
        { name: "HOME", url: "#" },
        { name: "OPERATORS", url: "#" },
        { name: "MATCHES", url: "#" },
        { name: "SHOP", url: "#" },
      ],
      userData: {},
      userList: [{ name: "", photo: "" }],
    };
  },
};
</script>

<style scoped lang="scss">
.page {
  .setting-box {
    padding: 10px;
    width: 45px;
    height: 45px;
    line-height: 45px;
    font-size: 20px;

    .icon-flip {
      transform: scaleX(-1);
    }
  }
}
</style>
