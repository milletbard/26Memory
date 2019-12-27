<template>
  <div class="calendar has-text-centered">
    <calendar-table :planName="planName" />
    <calendar-form @add-calendar="addCalendar" />
  </div>
</template>

<script>
import calendarTable from "./Table";
import calendarForm from "./Form";

export default {
  name: "calendar",
  data: () => ({
    planName: ""
  }),
  components: {
    calendarTable,
    calendarForm
  },
  methods: {
    addCalendar(form) {
      const { planName } = form;
      this.planName = planName;
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
</style>