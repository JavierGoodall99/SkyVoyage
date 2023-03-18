<template>  
  <body>
    <div>
      <h2>Flight Booking</h2>
      <form class="flight-form">
        <div class="form-group">
          <label for="departure">Departure</label>
          <select v-model="selectedDepartureCity">
            <option value="">From:</option>
            <option v-for="DepartureCity in DepartureCities" :key="DepartureCity">{{ DepartureCity }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="destination">Destination</label>
          <select v-model="selectedArrivalCity">
            <option value="">From:</option>
            <option v-for="ArrivalCity in ArrivalCities" :key="ArrivalCity">{{ ArrivalCity }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="departure-date">Departure Date</label>
          <input type="date" id="departure-date">
        </div>
        <!-- <router-link :to="{ name: 'flight', params: { id: flight.ID } }">
            <button class="view-more-button">Explore</button>
          </router-link> -->
      </form>
    </div>
    <div>
      <img src="https://i.postimg.cc/VNSRJnww/output-onlinegiftools.gif" alt="" class="loop-animation">
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      selectedDepartureCity: '',
      selectedArrivalCity: ''
    };
  },
  computed: {
    // Get the list of flights from the Vuex store
    flights() {
      return this.$store.state.flights;
    },
    // Get a list of unique departure cities from the flights
    DepartureCities() {
      const DepartureCities = new Set();
      for (const flight of this.flights) {
        DepartureCities.add(flight.DepartureCity);
      }
      return Array.from(DepartureCities);
    },
    ArrivalCities() {
      const ArrivalCities = new Set();
      for (const flight of this.flights) {
        ArrivalCities.add(flight.ArrivalCity);
      }
      return Array.from(ArrivalCities);
    },
  },
  created() {
    // Fetch the list of flights from the Vuex store
    this.$store.dispatch('fetchFlights');
  },
};
</script>

  
  <style scoped>

h2{
  /* margin-bottom: 20px; */
  font-size: 4rem;
  padding-top: 30px;
  color: rgb(27, 61, 102);
}


.flight-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  margin-top: 50px;
  background-color: #f1f1f1;
}

.flight-form h2 {
  margin-top: 0;
}

.form-group {
  width: 32%;
  margin-bottom: 20px;
}

/* .form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bolder;
} */

.form-group label {
  font-weight: bold;
}
.form-group input, .form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
}

button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #21507e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button[type="submit"]:hover {
  background-color: #21467c;
}







  h1 {
    font-size: 6rem;
    font-family: 'Concert One', cursive;
    color: black;
  }
  
  body{
    height: 100vh; 
    width: 100%; 
    overflow: hidden;
  background: radial-gradient(circle, rgba(248,248,248,1) 0%,  rgb(193, 210, 232)100%);
  font-family: 'Black Mango Medium';
  }
  
  .clean {
    position: relative;
    width: 100%;
  }
  
  .fade-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  }
  
  .clean img {
    width: 100%;
  }
  
  .loop-animation {
    animation: loop 8s linear infinite;
    width: 200px;
    /* filter: brightness(0) invert(1); */
  }
  
  @keyframes loop {
    0% {
      transform: translateX(-350%);
    }
    100% {
      transform: translateX(400%);
    }
  }
  </style>
  