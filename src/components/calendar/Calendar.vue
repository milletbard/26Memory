<template>
  <div class="app-calendar box">
    <h1
      class="has-text-grey title is-3 has-text-centered"
    >{{calendarForm.planName | planNameFormat}}</h1>
    <el-calendar :value="calendarForm.date" id="calendar" :range="dateRange">
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
import { map, divide, floor, max } from "lodash";
import uuidv1 from "uuid/v1";

export default {
  name: "app-calendar",
  data: () => ({
    calendarData: [],
    dateRange: [
      moment().format("YYYY-MM-DD"),
      moment()
        .add(1, "month")
        .format("YYYY-MM-DD")
    ]
  }),
  watch: {
    calendarForm: {
      handler() {
        this.getMemoryPlan();
      },
      deep: true
    },
    calendarData: "getDateRange"
  },
  filters: {
    planNameFormat(planName) {
      return planName ? planName : "26天背單字計畫";
    }
  },
  computed: {
    ...mapState("calendar", ["calendarForm"])
  },
  methods: {
    getMemoryPlan() {
      const { planName, listName, date, list, listTotal } = this.calendarForm;

      const mapCountDays = date => {
        let count = [1, 1, 2, 6, 8, 15, 26];

        return map(count, item =>
          moment(date)
            .add(item, "days")
            .subtract(1, "day")
            .format("YYYY-MM-DD")
        );
      };

      const mapGetPlan = (countDates, dateCount) => {
        return map(countDates, date => getPlan(date, dateCount));
      };

      const getPlan = (date, listNumber) => {
        let yearFormat = moment(date).format("YYYY");
        let monthFormat = moment(date).format("MM");
        let dayFormat = moment(date).format("DD");
        return {
          year: yearFormat,
          months: [monthFormat],
          days: [dayFormat],
          things: `${listName} ${listNumber}`,
          id: uuidv1()
        };
      };
      let dateCount = 0;
      let calendarData = [];

      for (let listCount = 1; listCount <= listTotal; listCount += list) {
        let isLastList = listTotal - listCount < list;

        let listNumber =
          list === 1
            ? listCount
            : isLastList
            ? listTotal - listCount >= 1
              ? `${listCount} ~ ${listTotal}`
              : listTotal
            : `${listCount} ~ ${listCount + list - 1}`;
        let listDate = moment(date)
          .add(dateCount, "days")
          .format("YYYY-MM-DD");
        calendarData = [
          ...calendarData,
          ...mapGetPlan(mapCountDays(listDate), listNumber)
        ];

        dateCount++;
      }

      this.calendarData = calendarData;
    },
    getDateRange() {
      const { calendarData } = this;

      let allDate = map(calendarData, item =>
        moment(`${item.year}-${item.months}-${item.days}`)
      );

      let minDate = moment
        .min(...allDate)
        .isoWeekday(1)

        .format("YYYY-MM-DD");
      let maxDate = moment
        .max(...allDate)
        .isoWeekday(7)
        .format("YYYY-MM-DD");
      this.dateRange = [minDate, maxDate];
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