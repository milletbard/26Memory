<template>
  <div id="app" class="has-background-link">
    <transition name="el-fade-in-linear" mode="out-in">
      <calendar />
    </transition>
  </div>
</template>

<script>
import Calendar from "@/components/calendar";
export default {
  name: "app",
  components: {
    Calendar
  }
};
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
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
}
html,
body {
  margin: 0;
  height: 100%;

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
  background-color: #f9fafc;
}
</style>
