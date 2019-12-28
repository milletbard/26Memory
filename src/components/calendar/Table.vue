<template>
  <div class="calendar-table box">
    <h1 class="has-text-grey-darker">{{planName |planNameFormat}}</h1>
  </div>
</template>

<script>
export default {
  name: "calendar-table",
  props: ["planName"],
  filters: {
    planNameFormat(planName) {
      return planName ? planName : "26天背單字計畫表";
    }
  }
};
</script>

<style lang="scss" >
.calendar-table {
  text-align: center;
}
</style>