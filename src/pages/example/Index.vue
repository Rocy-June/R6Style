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
      class="nav-bar"
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

      <!-- [level-block] is a module to show that user's level and exp. -->
      <!-- 'level' is the login user's level, default is 1 -->
      <!-- 'show-progress-bar' is used to control whether the module should display the [progress-bar] for exp, default is true -->
      <!-- 'progress-bar-min' is the [progress-bar]'s min value, default is 0. But when 'show-progress-bar' is false, this will not valid -->
      <!-- 'progress-bar-max' is the [progress-bar]'s max value, default is 100. But when 'show-progress-bar' is false, this will not valid  -->
      <!-- 'progress-bar-value' is the [progress-bar]'s value, default is 0. But when 'show-progress-bar' is false, this will not valid -->
      <level-block
        class="level-block"
        :level="userData.level"
        :show-progress-bar="true"
        :progress-bar-min="0"
        :progress-bar-max="100"
        :progress-bar-value="userData.exp % 100"
      ></level-block>

      <div class="coin-box">
        <div class="tickets">120</div>
        <div class="renown">26753</div>
      </div>

      <div class="setting-box">
        <!-- [lighting-box] is a module when mouse is hovering on, it will have a highlight animation. -->
        <!-- 'type' is where will show from for the halo, default is 'out' -->
        <!-- 'border-color' is the color of border in normal state, default is '#666' -->
        <!-- 'high-light' decides will show a light on hovering, default is false -->
        <lighting-box type="in" border-color="#666" :high-light="false">
          <div class="setting-content">
            <!-- [icon-font] is a module that can be easily to use icons, more on https://iconfont.cn/ -->
            <!-- 'type' is what this icon will show -->
            <!-- 'size', Hum..., as it implies... -->
            <icon-font type="icon-setting" :size="35"></icon-font>
          </div>
        </lighting-box>
      </div>
    </nav-bar>
    <information-bar :show="informationData.show" :type="informationData.type">
      <icon-font type="icon-arrow-right" :size="20"></icon-font>
      {{ informationData.content }}
    </information-bar>
    <div class="page-content">
      <div class="action-bar">
        <div class="classic-actions">
          <div class="action-line" v-if="!informationData.show">
            <div
              :class="{
                'action-box': true,
                'half-box': lastSelect != null,
                'menu-box': lastSelect != null,
              }"
            >
              <lighting-box
                border-color="rgba(50,58,67,0.5)"
                :high-light="true"
              >
                <!-- [slide-menu-button] is a module when mouse is hovering on, it will have a slide animation. -->
                <!-- 'name' is the conflict name, the same name will conflict with each other. When name is '', it will rollback at mouse nolonger hovering on it -->
                <!-- 'type' is the theme of this module, default is 'menu' -->
                <slide-menu-button name="" type="menu">
                  <div class="menu-block" @click="StartCustomMatch()">
                    <icon-font type="icon-menu" :size="48"></icon-font>
                    <span class="menu-text" v-if="lastSelect == null"
                      >MATCH</span
                    >
                  </div>
                </slide-menu-button>
              </lighting-box>
            </div>
            <div class="action-box match-box" v-if="lastSelect != null">
              <lighting-box
                border-color="rgba(50,58,67,0.5)"
                :high-light="true"
              >
                <div class="match-block" @click="StartCustomMatch()">
                  <div
                    :class="{
                      'title-line': true,
                      'full-line': !lastSelect.content,
                    }"
                  >
                    {{ lastSelect.title }}
                  </div>
                  <div class="content-line" v-if="lastSelect.content">
                    {{ lastSelect.content }}
                  </div>
                </div>
              </lighting-box>
            </div>
          </div>
          <div class="action-line" v-else>
            <div
              :class="{
                'action-box': true,
                'half-box': lastSelect != null,
                'menu-box': lastSelect != null,
              }"
            >
              <lighting-box
                border-color="rgba(50,58,67,0.5)"
                :high-light="true"
              >
                <slide-menu-button name="" type="ready">
                  <div class="menu-block" @click="ExitMatch()">
                    <icon-font type="icon-exit" :size="48"></icon-font>
                  </div>
                </slide-menu-button>
              </lighting-box>
            </div>
            <div class="action-box match-box" v-if="lastSelect != null">
              <lighting-box
                border-color="rgba(50,58,67,0.5)"
                :high-light="true"
              >
                <div class="match-block matching" @click="MatchStart()">
                  <div class="title-line">MATCHING</div>
                  <div class="content-line">
                    {{ lastSelect.content }}
                  </div>
                </div>
              </lighting-box>
            </div>
          </div>
          <div class="action-line">
            <div class="action-box half-box">
              <lighting-box
                border-color="rgba(50,58,67,0.5)"
                :high-light="true"
              >
                <div class="medium-block half-block">Alpha Pack Block</div>
              </lighting-box>
            </div>
            <div class="action-box half-box">
              <lighting-box
                border-color="rgba(50,58,67,0.5)"
                :high-light="true"
              >
                <div class="medium-block half-block">Always Zero Block</div>
              </lighting-box>
            </div>
          </div>
          <div class="action-line">
            <div class="action-box half-box">
              <lighting-box
                border-color="rgba(50,58,67,0.5)"
                :high-light="true"
              >
                <div class="medium-block half-block">Challenge Block</div>
              </lighting-box>
            </div>
            <div class="action-box half-box">
              <lighting-box
                border-color="rgba(50,58,67,0.5)"
                :high-light="true"
              >
                <div class="medium-block half-block">BUGSOFT CONNECT</div>
              </lighting-box>
            </div>
          </div>
          <div class="action-line">
            <div class="action-box">
              <lighting-box
                border-color="rgba(50,58,67,0.5)"
                :high-light="true"
              >
                <div class="huge-block full-block">Information Block</div>
              </lighting-box>
            </div>
          </div>
          <div class="action-line">
            <div class="action-box">
              <lighting-box border-color="rgba(50,58,67,0.5)">
                <div class="small-block full-block">Notice Block</div>
              </lighting-box>
            </div>
          </div>
        </div>
        <div class="event-actions">
          <lighting-box border-color="rgba(50,58,67,0.5)" :high-light="true">
            <div class="event-block full-block">Event Block</div>
          </lighting-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar";
import UserBar from "@/components/UserBar/UserBar";
import LightingBox from "@/components/LightingBox/LightingBox";
import LevelBlock from "@/components/LevelBlock/LevelBlock";
import SlideMenuButton from "@/components/SlideMenuButton/SlideMenuButton";
import InformationBar from "@/components/InformationBar/InformationBar";

export default {
  components: {
    NavBar,
    UserBar,
    LightingBox,
    LevelBlock,
    SlideMenuButton,
    InformationBar,
  },
  data() {
    return {
      navList: [
        { name: "HOME", url: "#" },
        { name: "OPERATORS", url: "#" },
        { name: "WATCH", url: "#" },
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
      informationData: {
        show: false,
        type: "info",
        content: "",
      },
      lastSelect: {
        title: "CUSTOM MATCH",
        content: "",
        method: () => {},
      },
      matchInterval: null,
    };
  },
  methods: {
    StartCustomMatch() {
      var time = 1800;
      this.matchInterval = setInterval(() => {
        --time;
        setInfo();
      }, 1000);

      var text = "CREATEING A CUSTOM MATCH... ";

      var setInfo = () => {
        this.informationData = {
          show: true,
          type: "info",
          content:
            text + parseInt(time / 60) + ":" + ("0" + (time % 60)).substr(-2),
        };
      };

      setInfo();
    },
    ExitMatch() {
      this.informationData.show = false;
      clearInterval(this.matchInterval);
    },
    MatchStart() {
      clearInterval(this.matchInterval);
      
      this.informationData = {
        show: true,
        type: "success",
        content: "MATCH START",
      };

      setTimeout(() => {
        this.informationData = {
          show: false,
          type: "info",
          content: "",
        };
      }, 5000);
    },
  },
};
</script>

<style scoped lang="scss">
.page {
  color: #fff;
  user-select: none;

  .nav-bar {
    .level-block {
      margin-left: 40px;
    }

    .coin-box {
      margin-left: 40px;
      font-size: 18px;

      .tickets {
        color: #fc0;
      }
    }

    .setting-box {
      margin-left: 40px;

      .setting-content {
        padding: 5px;
        width: 35px;
        height: 35px;
        line-height: 30px;
        background-color: rgba(0, 0, 0, 0.5);
        transform: scaleX(-1);
      }
    }
  }

  .page-content {
    margin-top: calc(100vh - 870px);

    .action-bar {
      display: flex;

      .classic-actions,
      .event-actions {
        width: 525px;
        font-size: 0;
      }

      .classic-actions {
        margin-right: 15px;
      }

      .action-line {
        display: flex;
        margin-bottom: 15px;

        .action-box.half-box:not(:last-child) {
          margin-right: 15px;
        }
      }

      .small-block,
      .medium-block,
      .huge-block,
      .event-block {
        font-size: 24px;
        background-color: rgba(0, 0, 0, 0.5);
      }

      .small-block {
        height: 60px;
      }

      .medium-block,
      .menu-block,
      .match-block {
        height: 105px;
      }

      .huge-block {
        height: 265px;
      }

      .menu-box {
        .menu-block {
          width: 125px;
        }
      }

      .menu-block {
        display: flex;
        justify-content: center;
        width: 525px;
        line-height: 105px;
        font-size: 64px;
        text-align: center;

        .menu-text {
          line-height: 98px;
          margin-left: 10px;
        }
      }

      .match-block {
        width: 385px;
        text-align: center;
        background-color: #5cbdea;

        &.matching {
          background-color: rgba(0, 0, 0, 0.5);
        }

        .title-line,
        .content-line {
          line-height: 1em;
        }

        .title-line {
          font-size: 48px;
          padding: 10px 0 5px;

          &.full-line {
            line-height: 1.75em;
          }
        }

        .content-line {
          font-size: 32px;
        }
      }

      .event-block {
        height: 700px;
      }

      .half-block {
        width: 255px;
      }

      .full-block {
        width: 525px;
      }
    }
  }
}
</style>
