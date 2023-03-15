import axios from 'axios';
import { createStore } from 'vuex'
const bStoreURL = 'https://volunteerventures.onrender.com/'

export default createStore({
  state: {
    user: null,
    message: null,
    programs: []
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setMessage (state, payload) {
      state.message = payload
    },
    setPrograms (state, programs) {
      state.programs = programs;
    },
    addProduct(state, payload) {
      state.products.push(payload);
    },
    updateProduct(state, payload) {
      const index = state.products.findIndex(product => product.id === payload.id);
      state.products[index] = payload;
    },
    deleteProduct(state, payload) {
      const index = state.products.findIndex(product => product.id === payload.id);
      state.products.splice(index, 1);
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
  },
  async fetchPrograms(context) {
      const res = await axios.get(`${bStoreURL}programs`);
      const { results, err, msg } = await res.data;
      if(results) {
        context.commit('setPrograms', results)
      }else {
        context.commit('setMessage', err || msg)
      }
    },
    async addProduct(context) {
      const res = await axios.post(`${bStoreURL}program`);
      const { results, err, msg } = await res.data;
      if(results) {
        context.commit('setPrograms', results)
      }else {
        context.commit('setMessage', err || msg)
      }
    },
    async updateProduct(context) {
      const res = await axios.put(`${bStoreURL}program/:id`);
      const { results, err, msg } = await res.data;
      if(results) {
        context.commit('setPrograms', results)
      }else {
        context.commit('setMessage', err || msg)
      }
    },
    async deleteProduct(context) {
      const res = await axios.delete(`${bStoreURL}program/:id`);
      const { results, err, msg } = await res.data;
      if(results) {
        context.commit('setPrograms', results)
      }else {
        context.commit('setMessage', err || msg)
      }
    }
    },

  getters: {
    getUser: state => state.user,
    getMessage: state => state.message,
    getPrograms: state => state.programs,
    getProductById: state => id => {
      return state.products.find(product => product.id === id);
    }
  }
  })


// export default {
//   state,
//   mutations,
//   actions,
//   getters
// };



