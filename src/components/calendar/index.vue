<template>
  <div class="calendar">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="24">
        <calendar-table :planName="planName" />
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="10">
        <div class="right-content">
          <calendar-form @add-calendar="addCalendar" />
          <calendar-document />
        </div>
      </el-col>
    </el-row>
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
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.right-content {
  display: flex;
  flex-direction: column;
}
</style>