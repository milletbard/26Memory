<template>
  <div class="app-calendar box">
    <h1 class="has-text-grey-darker title is-3">{{form.planName |planNameFormat}}</h1>
    <el-calendar v-model="form.date"></el-calendar>
  </div>
</template>

<script>
export default {
  name: "app-calendar",

  props: {
    form: {
      type: Object,
      required: true
    }
  },
  filters: {
    planNameFormat(planName) {
      return planName ? planName : "26天背單字計畫表";
    }
  }
};
</script>

<style lang="scss"  >
.app-calendar {
  text-align: center;
}
</style>