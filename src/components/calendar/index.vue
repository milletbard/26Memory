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
        <ins
          class="adsbygoogle"
          style="display:block; margin-top: 16px;"
          data-ad-client="ca-pub-9294451936713089"
          data-ad-slot="5914380239"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <app-calendar />
        <ins
          class="adsbygoogle"
          style="display:block; margin-top: 16px;"
          data-ad-client="ca-pub-9294451936713089"
          data-ad-slot="5914380239"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
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
  data: () => ({ adsbygoogle: "" }),
  components: {
    AppCalendar,
    CalendarForm,
    CalendarModal,
    CalendarDocument
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
  },
  mounted() {
    // eslint-disable-next-line no-undef
    (adsbygoogle = window.adsbygoogle || []).push({});
    // eslint-disable-next-line no-undef
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
};
</script>

<style lang="scss" scoped>
.calendar {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
.right-content {
  display: flex;
  flex-direction: column;
}
</style>