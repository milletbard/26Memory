const state = {
  calendarForm: {}
};

const mutations = {
  ADD_NEW_CALENDAR: (state, form) => {
    console.table(form);
    state.calendarForm = form;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
