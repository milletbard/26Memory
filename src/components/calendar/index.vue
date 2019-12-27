<template>
  <div class="calendar">
    <calendar-table :planName="planName" />
    <div class="right-content">
      <calendar-form @add-calendar="addCalendar" />
      <calendar-document />
    </div>
  </div>
</template>

<script>
import calendarTable from "./Table";
import calendarForm from "./Form";
import calendarDocument from "./Document";

export default {
  name: "calendar",
  data: () => ({
    planName: ""
  }),
  components: {
    calendarTable,
    calendarForm,
    calendarDocument
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
.right-content {
  display: flex;
  flex-direction: column;
  height: 500px;
}
</style>