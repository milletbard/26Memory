<template>
  <div id="app" class>
    <calendar-navbar />

    <transition name="el-fade-in-linear">
      <calendar />
    </transition>

    <calendar-footer />
  </div>
</template>

<script>
import Calendar from "@/components/calendar";
import CalendarNavbar from "@/components/navbar";
import CalendarFooter from "@/components/footer";

export default {
  name: "app",
  components: {
    Calendar,
    CalendarNavbar,
    CalendarFooter
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
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

  .calendar {
    .el-calendar {
      .el-calendar__button-group {
        display: none;
      }
    }
  }
}

html,
body {
  margin: 0;
  height: 100%;

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

.box {
  margin: 24px;
  border: 0.5px solid gray;
}

.el-row {
  width: 100%;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
}
</style>
