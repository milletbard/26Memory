<template>
  <div class="calendar-info box" id="calendar-info">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="計畫名稱">
        <el-input v-model="form.planName" placeholder="想個計畫名稱"></el-input>
      </el-form-item>
      <el-form-item label="List名稱">
        <el-input v-model="form.listName" placeholder="L"></el-input>
      </el-form-item>
      <el-form-item label="開始時間">
        <el-date-picker
          style="width: 100%;"
          v-model="form.date"
          :picker-options="datePickerOptions"
          type="date"
          placeholder="選擇開始時間"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="List / 日">
        <el-input type="number" placeholder="1" v-model.trim.number="form.list"></el-input>
      </el-form-item>
      <el-form-item label="List總數">
        <el-input type="number" placeholder="7" v-model.trim.number="form.listTotal"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="calendar-info-footer">
      <el-button @click="reset">清除</el-button>
      <el-button @click="saveForm" type="primary" plain>儲存</el-button>
      <el-button @click="updateCalendar" type="primary" plain>確定</el-button>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { setLocalStorage } from "@/utils/saveload";
export default {
  name: "calendar-info",
  data: () => ({
    form: {
      planName: "",
      listName: "",
      date: moment(),
      list: null,
      listTotal: null
    },
    datePickerOptions: {}
  }),
  methods: {
    reset() {
      this.form = {
        planName: "",
        listName: "",
        date: moment().format("YYYY-MM-DD"),
        list: null,
        listTotal: null
      };
    },
    async saveForm() {
      const { form } = this;
      let planName = form.planName ? form.planName : "讀書計畫";
      await setLocalStorage({ ...form, planName: planName });
      this.$message({
        message: "儲存成功！",
        type: "success",
        center: true
      });
    },
    updateCalendar() {
      const { list, listTotal } = this.form;

      if (list && listTotal) {
        const { form } = this;
        let dateFormat = moment(form.date).format("YYYY-MM-DD");
        this.$emit("update-calendar", { ...form, date: dateFormat });
      } else {
        this.$message.error("錯了哦，List 數值不能為 0");
      }
    }
  },
  created() {
    this.datePickerOptions = {
      disabledDate(time) {
        return time.getTime() < Date.now() - 8.64e7;
      }
    };
  }
};
</script>

<style lang="scss" >
#calendar-info {
  min-height: 400px;
  .el-button {
    cursor: pointer;
  }
  .el-form-item__label {
    font-weight: bold;
  }
}

.calendar-info-footer {
  float: right;
}
</style>