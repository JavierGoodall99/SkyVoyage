import axios from 'axios';
import { createStore } from 'vuex'
const bStoreURL = 'https://volunteerventures.onrender.com/'

export default createStore({
  state: {
    user: null,
    message: null,
    loading: false,
    programs: [],
    flights: []
  },
  mutations: {
    setLoading(state, loading) { 
      state.loading = loading;
    },
    setUser (state, payload) {
      state.user = payload
    },
    setMessage (state, payload) {
      state.message = payload
    },
    setPrograms (state, programs) {
      state.programs = programs;
    },
    setProgram (state, program) {
      state.program = program;
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

    setFlights (state, flights) {
      state.flights = flights;
    },
    setFlight (state, flight) {
      state.flights = flight;
    },
    addFlight(state, flights) {
      state.flights = flights;
    },
    updateFlight(state, payload) {
      state.flights = state.flights.map(flight => {
        if (flight.id === payload.id) {
          return payload;
        }
        return flight;
      });
    },
    deleteFlight(state, id) {
      state.flights = state.flights.filter(flight => flight.id !== id);
    }
  },


    // ------------------------------------------REGISTER/LOGIN-----------------------------------------------------
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
    context.commit('setLoading', false);
  },


  // --------------------------------------------PROGRAMS------------------------------------------------------
  async fetchPrograms(context) {
      const res = await axios.get(`${bStoreURL}programs`);
      const { results, err, msg } = await res.data;
      if(results) {
        context.commit('setPrograms', results)
      }else {
        context.commit('setMessage', err || msg)
      }
    },
    async fetchProgram(context, id) {
      const res = await axios.get(`${bStoreURL}program/${id}`);
      const { results } = await res.data;
      if(results) {
        console.log(results[0])
        context.commit('setProgram', results[0]);
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



  // ---------------------------------------------------FLIGHTS--------------------------------------------------

  async fetchFlights(context) {
    const res = await axios.get(`${bStoreURL}flights`);
    const { results, err, msg } = await res.data;
    if(results) {
      context.commit('setFlights', results)
    }else {
      context.commit('setMessage', err || msg)
    }
  },
  async fetchFlight(context, id) {
    const res = await axios.get(`${bStoreURL}flight/${id}`);
    const { results } = await res.data;
    if(results) {
      console.log(results[0])
      context.commit('setFlight', results[0]);
    }
  },
  async addFlight(context, payload) {
    const res = await axios.post(`${bStoreURL}flight`, payload);
    const { result, err, msg } = await res.data;
    if (result) {
      context.commit('updateProgram', result);
      context.commit('setMessage', msg)
    } else {
      context.commit('setMessage', err)
    }
  },
  async updateFlight(context, payload) {
    try {
      const res = await axios.put(`${bStoreURL}flight/${payload.ID}`, payload);
      const { result, err, msg } = await res.data;
      if (result) {
        context.commit('updateFlight', result);
        context.commit('setMessage', msg)
      } else {
        context.commit('setMessage', err)
      }
    } catch (error) {
      console.error(error);
      context.commit('setMessage', 'Error updating program');
    }
  },
  
  async deleteFlight(context, id) {
    try {
      const res = await axios.delete(`${bStoreURL}program/${id}`);
      const { result, err, msg } = await res.data;
      if (result) {
        context.commit('deleteFlight', id);
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
    getFlights: state => state.flights,
    authenticated(state) {
      return state.user !== null;
    },
    getProductById: state => id => {
      return state.products.find(product => product.id === id);
    }
  }
  });


// export default {
//   state,
//   mutations,
//   actions,
//   getters
// };



