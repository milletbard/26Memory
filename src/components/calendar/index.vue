<template>
  <div class="calendar">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="24">
        <app-calendar />
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
import AppCalendar from "./Calendar";
import CalendarForm from "./Form";
import CalendarDocument from "./Document";
import { mapState, mapMutations } from "vuex";
export default {
  name: "calendar",
  components: {
    AppCalendar,
    CalendarForm,
    CalendarDocument
  },

  methods: {
    ...mapMutations("calendar", ["ADD_NEW_CALENDAR"]),
    addCalendar(form) {
      this.ADD_NEW_CALENDAR(form);
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