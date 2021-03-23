import { createStore } from 'vuex'

export default createStore({
  state: {
    user: undefined
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    resetUser (state) {
      state.user = undefined
    }
  },
  actions: {
    login (actionObject, credentials) {
      // fetch(url, { headers, method: 'post', body: credentials })
      //   .then(res => res.json())
      //   .then(data => {
      //     actionObject.commit('setUser', data.user)
      //   })
    },
    // checkToken (actionObject) {
    //   const token = localStorage.getItem('token')
    //   fetch(url, {
    //     headers: {
    //       Authorization: 'Bearer ' + token
    //     }
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       actionObject.commit('setUser', data.user)
    //     })
    // },
    logout (actionObject) {
      actionObject.commit('resetUser')
      localStorage.removeItem('token')
    }
  },
  modules: {
  }
})
