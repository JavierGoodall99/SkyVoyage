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
    addProgram(state, programs) {
      state.programs = programs;
    },
    updateProgram(state, payload) {
      state.programs = state.programs.map(program => {
        if (program.id === payload.id) {
          return payload;
        }
        return program;
      });
    },
    
    
    deleteProgram(state, id) {
      state.programs = state.programs.filter(program => program.id !== id);
    },
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
    async addProgram(context, payload) {
      const res = await axios.post(`${bStoreURL}program`, payload);
      const { result, err, msg } = await res.data;
      if (result) {
        context.commit('updateProgram', result);
        context.commit('setMessage', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
    async updateProgram(context, payload) {
      try {
        const res = await axios.put(`${bStoreURL}program/${payload.ID}`, payload);
        const { result, err, msg } = await res.data;
        if (result) {
          context.commit('updateProgram', result);
          context.commit('setMessage', msg)
        } else {
          context.commit('setMessage', err)
        }
      } catch (error) {
        console.error(error);
        context.commit('setMessage', 'Error updating program');
      }
    },
    
    async deleteProgram(context, id) {
      try {
        const res = await axios.delete(`${bStoreURL}program/${id}`);
        const { result, err, msg } = await res.data;
        if (result) {
          context.commit('deleteProgram', id);
          context.commit('setMessage', msg);
          window.location.reload(); 
        } else {
          context.commit('setMessage', err)
        }
      } catch (err) {
        context.commit('setMessage', err.message);
      }
    },
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



