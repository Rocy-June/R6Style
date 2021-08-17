<template>
  <div class="page">
    <!-- [nav-bar] is a module to show multiple tabs. -->
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
      :width="1300"
    >
      <!-- [user-bar] is a module to show who you "invited", and login user's info. -->
      <!-- 'user' is for logged in user data -->
      <!-- 'list' is for other user data -->
      <!-- 'name' is that user's name, default is 'name' -->
      <!-- 'img' is that user's custom picture, default is 'img' -->
      <!-- 'rank' is that user's rank, default is 'rank', that value can be Number of [0-20(small ranks) and 23(champion)] or String for a custom image url -->
      <!-- 'level' is that user's level, default is 'level' -->
      <user-bar
        :user="userData"
        :list="userList"
        name="name"
        img="img"
        rank="rank"
        level="level"
      ></user-bar>

      <level-block
        class="level-block"
        :level="userData.level"
        :show-progress-bar="true"
        :progress-bar-value="userData.exp % 100"
      ></level-block>

      <!-- [lighting-box] is a module when mouse is hovering on, it will have a highlight animation. -->
      <lighting-box>
        <div class="setting-box">
          <!-- [icon-font] is a module that can be easily to use icons, more on https://iconfont.cn/ -->
          <!-- 'type' is what this icon will show -->
          <!-- 'size', Hum..., as it implies... -->
          <icon-font type="icon-setting" :size="35"></icon-font>
        </div>
      </lighting-box>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar";
import UserBar from "@/components/UserBar/UserBar";
import LightingBox from "@/components/LightingBox/LightingBox";
import LevelBlock from "@/components/LevelBlock/LevelBlock";

export default {
  components: { NavBar, UserBar, LightingBox, LevelBlock },
  data() {
    return {
      navList: [
        { name: "HOME", url: "#" },
        { name: "OPERATORS", url: "#" },
        { name: "MATCHES", url: "#" },
        { name: "SHOP", url: "#" },
      ],
      userData: {
        name: "Rocy_CN",
        img: "https://ubisoft-avatars.akamaized.net/1582d1d3-effe-4580-8c0f-7606cffe9fc3/default_256_256.png",
        rank: 0,
        level: 148,
        exp: 14875,
      },
      userList: [{ name: "Test_User", img: "", rank: 0, level: 0 }],
    };
  },
};
</script>

<style scoped lang="scss">
.page {
  .level-block{
    margin: 0 20px;
  }

  .setting-box {
    padding: 5px;
    width: 35px;
    height: 35px;
    line-height: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    transform: scaleX(-1);
    color: #fff;
  }
}
</style>
