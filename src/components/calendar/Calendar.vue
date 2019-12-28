<template>
  <div class="app-calendar box">
    <h1 class="has-text-grey-darker title is-3">{{calendarForm.planName |planNameFormat}}</h1>
    <el-calendar v-model="calendarForm.date"></el-calendar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app-calendar",

  filters: {
    planNameFormat(planName) {
      return planName ? planName : "26天背單字計畫表";
    }
  },
  computed: {
    ...mapState("calendar", ["calendarForm"])
  }
};
</script>

<style lang="scss"  >
.app-calendar {
  text-align: center;
}
</style>