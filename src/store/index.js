import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: false,
  },
  getters:{
    getTheme(state){
      return state.theme
    }
  },
  mutations: {
    changeTheme(state){
      state.theme = !state.theme
    }
  },
  actions: {
    TOGGLE_THEME(context){
      context.commit('changeTheme');
    }
  },
  modules: {
  }
})
