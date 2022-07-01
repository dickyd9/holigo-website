import {createStore} from "vuex";

export const store = createStore({
  state: {
    activeLanguage: 'id',
  },
  getters:{
    activeLanguage(state) {
      return state.activeLanguage;
    },
  },
  mutations: {
    SET_LANGUAGE(state, language) {
      state.activeLanguage = language;
    },
  },
  actions: {
    setLanguage(context, language) {
      context.commit('SET_LANGUAGE', language);
    },
  },
})