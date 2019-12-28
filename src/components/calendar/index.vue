<template>
  <div class="calendar">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="24">
        <app-calendar :form="form" />
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
import { mapState } from "vuex";
export default {
  name: "calendar",
  data: () => ({
    form: {}
  }),
  components: {
    AppCalendar,
    CalendarForm,
    CalendarDocument
  },
  
  methods: {
    addCalendar(form) {
      this.form = form;
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