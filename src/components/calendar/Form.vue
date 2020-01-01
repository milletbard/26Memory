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
        <el-input
          type="number"
          placeholder="1"
          v-model.trim.number="form.list"
          onkeyup="value=value.replace(/[^\d]/g,'')"
        ></el-input>
      </el-form-item>
      <el-form-item label="List總數">
        <el-input
          type="number"
          placeholder="7"
          v-model.trim.number="form.listTotal"
          onkeyup="value=value.replace(/[^\d]/g,'')"
        ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="calendar-info-footer">
      <!-- <el-button @click="saveForm" type="primary">儲存</el-button> -->
      <el-button @click="reset">清除</el-button>
      <el-button @click="submit" type="primary">確定</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import moment from "moment";
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
    ...mapActions("calendar", ["setArchives"]),
    submit() {
      const { list, listTotal } = this.form;

      if (list && listTotal) {
        const { form } = this;
        let dateFormat = moment(form.date).format("YYYY-MM-DD");
        this.$emit("add-calendar", { ...form, date: dateFormat });
      } else {
        this.$message.error("錯了哦，List 數值不能為 0");
      }
    },
    reset() {
      this.form = {
        planName: "",
        listName: "",
        date: moment().format("YYYY-MM-DD"),
        list: null,
        listTotal: null
      };
    },
    saveForm() {
      const { form } = this;
      this.setArchives(form);
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
  margin-bottom: 8px;
  padding: 20px;
}

.calendar-info-footer {
  float: right;
}
</style>