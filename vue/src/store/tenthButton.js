export default {
  namespaced: true,
  state: {
    buttonCounts: Array(12).fill(0)
  },
  getters: {
    getButtonCounts: (state) => state.buttonCounts
  },
  mutations: {
    incrementButtonCount: (state, index) => {
      state.buttonCounts[index] += 1;     
      state.buttonCounts = [...state.buttonCounts];
    }
  },
  actions: {
    incrementButtonCount: ({ commit }, index) => {
      commit('incrementButtonCount', index)
    }
  }
}
