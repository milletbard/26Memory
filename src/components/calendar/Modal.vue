<template>
  <div class="calendar-modal">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
        <el-dialog
          title="載入"
          v-if="modalOpen"
          width="80%"
          :visible.sync="modalOpen"
          :before-close="closeCalendarModal"
        >
          <el-table :data="arcgives" height="370" style="width: 100%">
            <el-table-column prop="planName" align="center" label="計劃名稱" min-width="120"></el-table-column>

            <el-table-column align="center" label="載入" width="60px">
              <template slot-scope="scope">
                <el-button icon="el-icon-check" circle @click="updateCalendar(scope.row.id)"></el-button>
              </template>
            </el-table-column>
            <el-table-column align="center" label="刪除" width="60px">
              <template slot-scope="scope">
                <el-button icon="el-icon-delete" circle @click="deleteCalendar(scope.row.id)"></el-button>
              </template>
            </el-table-column>
          </el-table>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="closeCalendarModal">關 閉</el-button>
          </span>
        </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getArchives } from "@/utils/saveload";
import moment from "moment";
import { findIndex, filter } from "lodash";
import { setArchives } from "@/utils/saveload";
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
    },
    updateArchives() {
      let arcgives = getArchives();
      this.arcgives = arcgives;
    },
    deleteCalendar(id) {
      this.$confirm("確定刪除？")
        .then(async () => {
          const { arcgives } = this;
          const filterArcgives = filter(arcgives, item => item.id != id);
          setArchives(filterArcgives);

          await this.updateArchives();
          this.$message({
            message: "刪除成功！",
            type: "success"
          });
        })
        .catch(() => {});
    }
  },
  created() {
    this.updateArchives();
  }
};
</script>
