<template>
  <div class="container-main">
    <calendar-navbar />
    <github-corner />
    <div class="layout-main">
      <transition name="el-fade-in-linear">
        <router-view></router-view>
      </transition>
      <calendar-footer />
    </div>
  </div>
</template>

<script>
import CalendarNavbar from "@/components/navbar";
import GithubCorner from "@/components/GithubCorner";
import CalendarFooter from "@/components/footer";

export default {
  name: "app",
  components: {
    CalendarNavbar,
    CalendarFooter,
    GithubCorner
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "jf-openhuninn";
  src: url("../assets/fonts/jf-openhuninn-1.0.ttf");
}

* {
  // 處理input type = number時的上下箭頭
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
}
html {
  height: 100%;
}
body {
  height: 100%;
}

.container-main {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  font-family: "jf-openhuninn", Helvetica, Arial, sans-serif !important;
}

.layout-main {
  margin-top: 60px;
}

.box {
  margin: 12px;
}

.columns {
  margin: 0 !important;
}

.column {
  padding: 0;
}

html,
body {
  margin: 0;
  height: 100%;
  padding: 0px !important;
  //修正 element date-picker 的文字位置
  .el-picker-panel {
    .el-picker-panel__body-wrapper {
      .el-picker-panel__body {
        .el-picker-panel__content {
          .el-date-table {
            .el-date-table__row {
              td {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
