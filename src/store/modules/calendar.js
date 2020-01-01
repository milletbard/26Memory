/* eslint-disable no-unused-vars */
import { setArchives, getArchives } from "@/utils/saveload";

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

const actions = {
  // eslint-disable-next-line no-unused-vars
  setArchives: ({ commit }, form) => {
    // const calendarForm = JSON.stringify(form);

    let archives = [];
    if (getArchives("archives")) {
      // archives = [...JSON.parse(getArchives("archives")), JSON.stringify(form)];
      archives = [JSON.stringify(form), JSON.stringify(form)];
      setArchives(archives);
    } else {
      archives = [JSON.stringify(form), JSON.stringify(form)];
      setArchives(archives);
    }
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
