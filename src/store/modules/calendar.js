const state = {
  calendarForm: {},
  modalOpen: false
};

const mutations = {
  ADD_NEW_CALENDAR: (state, form) => {
    state.calendarForm = form;
  },
  OPEN_MODAL: state => {
    state.modalOpen = true;
  },
  CLOSE_MODAL: state => {
    state.modalOpen = false;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
