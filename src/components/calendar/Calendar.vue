<template>
  <div class="box" id="app-calendar">
    <h1
      class="has-text-grey title is-3 has-text-centered"
    >{{calendarForm.planName | planNameFormat}}</h1>

    <el-calendar
      v-for="item in dateRange"
      :value="calendarForm.date"
      id="calendar"
      :key="item.id"
      :range="item"
    >
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

    <el-divider></el-divider>

    <h3 class="has-text-centered is-size-7 has-text-grey">每十個點擊就有一隻版主的貓貓獲得罐罐</h3>

    <el-divider></el-divider>

    <br />
    <ins
      class="adsbygoogle"
      style="display:block; text-align:center;"
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-9294451936713089"
      data-ad-slot="8212476177"
    ></ins>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import { map } from "lodash";
import uuidv1 from "uuid/v1";
import Minions from "@/utils/minions";

export default {
  name: "app-calendar",
  data: () => ({
    calendarData: [],
    dateRange: [
      [
        moment()
          .day(1)
          .format("YYYY-MM-DD"),
        moment()
          .add(3, "weeks")
          .day(7)
          .format("YYYY-MM-DD")
      ]
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
      const { listName, date, list, listTotal } = this.calendarForm;
      const dayCount = [1, 1, 2, 6, 8, 15, 26];
      const format = "YYYY-MM-DD";
      const mapDayCount = date => {
        return map(dayCount, item =>
          moment(date)
            .add(item, "days")
            .subtract(1, "day")
            .format(format)
        );
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
      const mapPlan = (countDates, dateCount) => {
        return map(countDates, date => getPlan(date, dateCount));
      };

      const forListTotal = (list, listTotal) => {
        let dateCount = 0;
        let calendarData = [];

        for (let listCount = 1; listCount <= listTotal; listCount += list) {
          let isLastList = listTotal - listCount < list;
          let listNumber =
            list === 1
              ? listCount
              : isLastList
              ? listTotal - listCount >= 1
                ? `${listCount}~${listTotal}`
                : listTotal
              : `${listCount}~${listCount + list - 1}`;
          let listDate = moment(date)
            .add(dateCount, "days")
            .format(format);
          calendarData = [
            ...calendarData,
            ...mapPlan(mapDayCount(listDate), listNumber)
          ];

          dateCount++;
        }

        return calendarData;
      };

      const calendarData = forListTotal(list, listTotal);
      this.calendarData = calendarData;

      this.$nextTick(() => {
        Minions();
      });
    },
    getDateRange() {
      const { calendarData } = this;
      const format = "YYYY-MM-DD";

      const getAllDate = data => {
        return map(data, item =>
          moment(`${item.year}-${item.months}-${item.days}`)
        );
      };
      // console.log(`current and max date : `, { currentDate, maxDate });
      const splitDateRange = (currentDate, maxDate, days) => {
        let newDateRange = [];
        while (currentDate <= maxDate) {
          let newDate = [
            moment(currentDate)
              .day(1)
              .format(format),
            moment(currentDate)
              .add(days, "day")
              .day(7)
              .format(format)
          ];

          // console.log(`new date : `, newDate);
          newDateRange = [...newDateRange, newDate];

          currentDate = moment(currentDate)
            .add(days, "day")
            .format(format);
        }
        return newDateRange;
      };

      let allDate = getAllDate(calendarData);
      let currentDate = moment.min(...allDate).format(format);
      let maxDate = moment.max(...allDate).format(format);
      let dateRange = splitDateRange(currentDate, maxDate, 21);
      this.dateRange = dateRange;
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
};
</script>

<style lang="scss"  >
#app-calendar {
  padding: 5px;
}

.calendar {
  .el-calendar {
    .el-calendar__button-group {
      display: none;
    }
  }
}

#calendar {
  .el-calendar__header {
    display: none;
  }
  .el-calendar__body {
    padding: 0px;
    .el-calendar-table {
      thead {
        th {
          text-align: center;
        }
      }
    }
    .el-calendar-table .el-calendar-day {
      padding: 0px;
    }
    .el-calendar-table__row {
      td {
        .el-calendar-day {
          height: 100%;
          min-height: 50px;
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