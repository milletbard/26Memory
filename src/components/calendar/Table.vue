<template>
  <div class="calendar-table box">
    <h1 class="is-size-1">{{planName}}</h1>
  </div>
</template>

<script>
export default {
  name: "calendar-table",
  props: ["planName"]
};
</script>

<style lang="scss" scoped>
.calendar-table {
  width: 800px;
  height: 800px;
  border: 0.8px solid gray;
}
</style>