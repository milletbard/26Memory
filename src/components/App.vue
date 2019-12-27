<template>
  <section id="app" class="hero is-info is-fullheight">
    <calendar />
  </section>
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
  border: 0.8px solid gray;
}
</style>
