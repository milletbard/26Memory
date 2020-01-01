<template>
  <div class="calendar">
    <calendar-modal
      v-if="modalOpen"
      :modalOpen="modalOpen"
      @close-calendar-modal="closeCalendarModal"
      @update-calendar="updateCalendarForm"
    ></calendar-modal>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
        <app-calendar />
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
        <div class="right-content">
          <calendar-form @update-calendar="updateCalendarForm" />
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
import CalendarModal from "./Modal";
import { mapMutations, mapState } from "vuex";

export default {
  name: "calendar",
  components: {
    AppCalendar,
    CalendarForm,
    CalendarDocument,
    CalendarModal
  },
  computed: {
    ...mapState("calendar", ["modalOpen"])
  },
  methods: {
    ...mapMutations("calendar", [
      "CLOSE_MODAL",
      "UPDATE_CALENDAR",
      "ADD_NEW_CALENDAR"
    ]),
    updateCalendarForm(form) {
      this.UPDATE_CALENDAR(form);
    },
    closeCalendarModal() {
      this.CLOSE_MODAL();
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