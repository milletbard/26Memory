<template>
  <div class="calendar-modal">
    <el-dialog
      title="載入"
      width="80%"
      v-if="modalOpen"
      :visible.sync="modalOpen"
      :before-close="closeCalendarModal"
    >
      <el-table :data="arcgives" style="width: 100%">
        <el-table-column prop="planName" align="center" label="計劃名稱" min-width="120"></el-table-column>
        <el-table-column prop="listName" align="center" label="List 名稱" min-width="120"></el-table-column>
        <el-table-column prop="date" align="center" label="開始時間" min-width="120">
          <template slot-scope="scope">{{scope.row.date | dateFilters}}</template>
        </el-table-column>
        <el-table-column prop="list" align="center" label="List / 日"></el-table-column>
        <el-table-column prop="listTotal" align="center" label="List總數"></el-table-column>
        <el-table-column align="center" label="載入">
          <template slot-scope="scope">
            <el-button icon="el-icon-check" circle @click="updateCalendar(scope.row.id)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { getArchives } from "@/utils/saveload";
import moment from "moment";
import { findIndex } from "lodash";
export default {
  name: "calendarModal",
  data: () => ({
    arcgives: []
  }),
  props: {
    modalOpen: { type: Boolean, required: true }
  },
  filters: {
    dateFilters(date) {
      return moment(date).format("YYYY-MM-DD");
    }
  },
  methods: {
    closeCalendarModal() {
      this.$emit("close-calendar-modal");
    },
    updateCalendar(id) {
      const { arcgives } = this;
      let index = findIndex(arcgives, { id: id });
      let form = arcgives[index];

      this.$emit("update-calendar", form);
    }
  },
  created() {
    let arcgives = getArchives();
    this.arcgives = arcgives;
  }
};
</script>
