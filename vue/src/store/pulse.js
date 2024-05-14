import axios from "axios"

export default {
  namespaced: true,
  state: {
    todaysTrendingArticlesList: [],
    entertainmentArticlesList: []
  },
  getters: {
    getTodaysTrendingArticles: state => state.todaysTrendingArticlesList,
    getEntertainmentArticles: state => state.entertainmentArticlesList,
  },
  mutations: {
    setTodaysTrendingArticlesList: (state, payload) => {
      state.todaysTrendingArticlesList = payload
    },
    setEntertainmentArticlesList: (state, payload) => {
      state.entertainmentArticlesList = payload
    }
  },
  actions: {
    loadEntertainmentArticlesList: ({ commit }, payload) => {
      axios.get('http://localhost:3000/entertainmentArticles', {
        params: {
          title: payload
        }
      })
      .then((result) => {
        commit('setEntertainmentArticlesList', result.data)
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log(1);
      })
    },
    loadTodaysTrendingArticlesList: ({ commit }, payload) => {
      axios.get('http://localhost:3000/todaysTrendingArticles', {
        params: {
          title: payload
        }
      })
      .then((result) => {
        commit('setTodaysTrendingArticlesList', result.data)
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log(1);
      })
    },
    loadDataById: ({ commit }, payload) => {
      axios.get(`http://localhost:3000/entertainmentArticles/${payload}`)
      .then((result) => {
        commit('setEntertainmentArticlesList', result.data)
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log(1);
      });
    },
    addNews({ dispatch }, newsData) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/entertainmentArticles', newsData)
        .then(response => {
          console.log(response.data);
          dispatch('loadEntertainmentArticlesList'); 
          resolve(response.data);
        })
        .catch(e => {
          console.log(e);
          reject(e);
        })
        .finally(() => {
          console.log(1);
        });
      });
    }
  }
}
