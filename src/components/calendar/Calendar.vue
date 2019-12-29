<template>
  <div class="app-calendar box">
    <h1
      class="has-text-grey title is-3 has-text-centered"
    >{{calendarForm.planName | planNameFormat}}</h1>
    <el-calendar :value="calendarForm.date" id="calendar" :range="getStartRange(calendarForm.date)">
      <template slot="dateCell" slot-scope="{date, data}">
        <div class="calendar-day">{{ data.day.split('-').slice(1).join('/') }}</div>
        <br />
        <div :key="item.id" v-for="item in calendarData">
          <div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!=-1">
            <div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
              <el-tag type="success" size="mini" :hit="true" effect="plain">{{item.things}}</el-tag>
            </div>
          </div>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
export default {
  name: "app-calendar",
  data: () => ({
    calendarData: [
      // test only, remove later
      { months: ["03"], days: ["04"], things: "coding", id: 54 },
      { months: ["12"], days: ["26"], things: "coding", id: 55 },
      { months: ["12"], days: ["26"], things: "coding", id: 10 },
      { months: ["12"], days: ["26"], things: "coding", id: 64 },
      { months: ["12"], days: ["27"], things: "coding", id: 20 },
      { months: ["12"], days: ["27"], things: "coding", id: 21 },
      { months: ["12"], days: ["27"], things: "coding", id: 22 },
      { months: ["12"], days: ["28"], things: "coding", id: 80 },
      { months: ["12"], days: ["28"], things: "coding", id: 11 },
      { months: ["12"], days: ["28"], things: "coding", id: 12 },
      { months: ["12"], days: ["29"], things: "coding", id: 1 },
      { months: ["12"], days: ["29"], things: "coding", id: 2 },
      { months: ["12"], days: ["29"], things: "coding", id: 3 },
      { months: ["12"], days: ["29"], things: "coding", id: 7 },
      { months: ["12"], days: ["29"], things: "coding", id: 6 }
    ]
  }),
  filters: {
    planNameFormat(planName) {
      return planName ? planName : "26天背單字計畫表";
    }
  },
  computed: {
    ...mapState("calendar", ["calendarForm"])
  },
  methods: {
    getStartRange(date) {
      let dateRange = [
        moment(date)
          .subtract(1, "days")
          .day(1)
          .format("YYYY-MM-DD"),
        moment(date)
          .add(1, "months")
          .day(7) 
          .format("YYYY-MM-DD")
      ];
      return dateRange;
    }
  }
};
</script>

<style lang="scss"  >
.calendar {
  .el-calendar {
    .el-calendar__button-group {
      display: none;
    }
  }
}

#calendar {
  .el-calendar__body {
    padding: 0px;
    .el-calendar-table .el-calendar-day {
      padding: 0px;
    }
    .el-calendar-table__row {
      td {
        .el-calendar-day {
          height: 100%;
          min-height: 100px;
          cursor: auto;

          div {
            display: inline-block;
          }
          .calendar-day {
            text-align: left;
            color: #202535;
            line-height: 15px;
            font-size: 12px;
            word-break: break-all;
          }
        }
      }
    }
  }
}
</style>