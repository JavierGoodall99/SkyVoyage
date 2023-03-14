import axios from 'axios';
import { createStore } from 'vuex'
const bStoreURL = 'https://volunteerventures.onrender.com/'

export default createStore({
  state: {
    user: null,
    message: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setMessage (state, payload) {
      state.message = payload
    }
  },
  actions: {
    async register (context, payload) {
      console.log(payload);
      const res = await axios.post(`${bStoreURL}register`, payload)
      const { result, err, msg } = await res.data
      if (result) {
        context.commit('setUser', result)
        context.commit('setMessage', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
  async login (context, payload) {
    console.log(payload);
    const res = await axios.post(`${bStoreURL}login`, payload)
    const { result, err, msg } = await res.data
    if (result) {
      context.commit('setUser', result)
      context.commit('setMessage', msg)
    } else {
      context.commit('setMessage', err)
    }
  }
  },

  getters: {
    getUser: state => state.user,
    getMessage: state => state.message
  },
})


// export default {
//   state,
//   mutations,
//   actions,
//   getters
// };



