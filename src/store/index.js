import Vuex from "vuex";
import Vue from "vue";
import calendar from "./modules/calendar";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    calendar
  }
});

if (module.hot) {
  module.hot.accept(["./modules/calendar"], () => {
    store.hotUpdate({
      modules: {
        calendar: require("./modules/calendar").default
      }
    });
  });
}

export default store;
