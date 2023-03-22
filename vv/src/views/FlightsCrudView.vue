<template>
  <div class="body">
    <h1>Flights</h1>
    <div v-if="loading">
      <Spinner/>
    </div>
    <div class="table-responsive" v-else>
      <table class="table">
        <thead>
          <tr class="program">
            <th>Departure City</th>
            <th>Departure Date</th>
            <th>Departure Time</th>
            <th>Arrival City</th>
            <th>Arrival Date</th>
            <th>Arrival Time</th>
            <th>Price</th>
            <th><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                @click="showAddModal">Add Flight</button></th>
          </tr>
        </thead>
        <tbody>
          <tr class="program"  v-for="flight in flights" :key="flight.id">
            <td data-label="Departure City">{{ flight.DepartureCity }}</td>
            <td data-label="Departure Date">{{ flight.DepartureDate }}</td>
            <td data-label="Departure Time">{{ flight.DepartureTime }}</td>
            <td data-label="Arrival City">{{ flight.ArrivalCity }}</td>
            <td data-label="Arrival Date">{{ flight.ArrivalDate }}</td>
            <td data-label="Arrival Time">{{ flight.ArrivalTime }}</td>
            <td data-label="Price">{{ flight.Price }}</td>
            <td>
              <button @click="showEditModal(flight)">Edit</button>
              <button @click="deleteFlight(flight)">Delete</button>
              <!-- Add Program Modal -->
              <div class="modal" tabindex="-1" role="dialog" :class="{ 'd-block': showModal }">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">{{ modalTitle }}</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="cancelForm"></button>
                    </div>
                    <div class="modal-body">
                      <form @submit.prevent="submitForm">
                        <div class="mb-3">
                          <label for="departure-city" class="form-label">Departure City:</label>
                          <input id="departure-city" v-model="form.DepartureCity" required class="form-control" />
                        </div>
                        <div class="mb-3">
                          <label for="departure-date" class="form-label">Departure Date:</label>
                          <input id="departure-date" v-model="form.DepartureDate" required class="form-control" />
                        </div>
                        <div class="mb-3">
                          <label for="departure-time" class="form-label">Departure Time:</label>
                          <input id="departure-time" v-model="form.DepartureTime" required class="form-control" />
                        </div>
                        <div class="mb-3">
                          <label for="arrival-city" class="form-label">Arrival City:</label>
                          <textarea id="arrival-city" v-model="form.ArrivalCity" required
                            class="form-control"></textarea>
                        </div>
                        <div class="mb-3">
                          <label for="arrival-date" class="form-label">Arrival Date:</label>
                          <input id="arrival-date" v-model="form.ArrivalDate" required class="form-control" />
                        </div>
                        <div class="mb-3">
                          <label for="arrival-time" class="form-label">Arrival Time:</label>
                          <input id="arrival-time" v-model="form.ArrivalTime" required class="form-control" />
                        </div>
                        <div class="mb-3">
                          <label for="price" class="form-label">Price:</label>
                          <input id="price" v-model="form.Price" required class="form-control" />
                        </div>
                        <div class="modal-footer">
                          <button v-if="!editingFlight" @click="showModal()">Add</button>
                          <button @click="updateFlight(flight)">Edit</button>
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                            @click="cancelForm">Cancel</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
export default {
  name: 'FlightsCrudView',
  components:{
    Spinner
  },
computed: {
  flights() {
    return this.$store.state.flights;
  },
  loading() {
      return this.$store.state.loading;
    }
},
data() {
  return {
    showModal: false,
    editingFlight: false,
    modalTitle: "",
    modalAction: "",
    form: {
      DepartureCity: "",
      DepartureDate: "",
      DepartureTime: "",
      ArrivalCity: "",
      ArrivalDate: "",
      ArrivalTime: "",
      Price: "",
    },
  };
},
created() {
  this.$store.commit('setLoading', true); //  True will show the spinner
  this.$store.dispatch('fetchFlights').then(() => {
    this.$store.commit('setLoading', false); // False will hide the spinner after the programs are fetched
  });
},
methods: {
  showAddModal() {
    this.modalTitle = "Add Flight";
    this.modalAction = "Add";
    this.form = {
      DepartureCity: "",
      DepartureDate: "",
      DepartureTime: "",
      ArrivalCity: "",
      ArrivalDate: "",
      ArrivalTime: "",
      Price: "",
    };
    this.editingFlight = false;
    this.showModal = true;
  },

  showEditModal(flight) {
    this.modalTitle = "Edit Flight";
    this.modalAction = "Update";
    this.form = { ...flight };
    this.editingFlight = true;
    this.showModal = true;
  },

  submitForm() {
    if (this.modalAction === "Add") {
      this.$store.dispatch("addFlight", this.form);
    } else if (this.modalAction === "Update") {
      this.$store.dispatch("updateFlight", {
        id: this.form.ID,
        flight: this.form,
      });
    }
    this.showModal = false;
    this.editingFlight = false;
  },

  cancelForm() {
    this.showModal = false;
  },
  deleteFlight(flight) {
    console.log(flight);
    console.log("Flight: ", flight.ID);
    if (confirm("Are you sure you want to delete this flight?")) {
      if (flight.ID) {
        this.$store
          .dispatch("deleteFlight", flight.ID)
          .then(() => {
            // handle success
            console.log("Flight deleted successfully");
          })
          .catch((err) => {
            // handle error
            console.error(err);
          });
      } else {
        console.error("Invalid flight ID");
      }
    }
  },
  updateFlight(flight) {
    console.log('Flight: ', flight.ID);
    if (flight.ID) {
      this.$store.dispatch("updateFlight", flight.ID).then(() => {
        // handle success
        console.log("Program updated successfully");
      //   window.location.reload();
      })
        .catch(err => {
          // handle error
          console.error(err);
        });
    } else {
      console.error("Invalid flight ID");
    }
  }
}
}
</script>



<style scoped>
.body{
	margin:0;
	padding:20px;
  background: radial-gradient(circle, rgba(248, 248, 248, 1) 0%, rgb(193, 210, 232) 100%);
  font-family: 'Black Mango Medium';
}

*{
	box-sizing: border-box;
}
img {
  width: 250px;
}

h1 {
  text-align: center;
  font-size: 3rem;
  color: #555;
  margin: 2rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}

.table td, .table th {
    padding: 12px 15px;
    border: 1px solid rgb(27, 61, 102);
    text-align: center;
    font-size: 16px;
}

.table th {
  font-size: 1.2rem;
  font-weight: bold;
  color: #555;
}


button {
  background-color: rgb(27, 61, 102);
  color: #fff;
  border: none;
  border-radius: 4px;
  margin: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background-color: #0056b3;
}

.program {
  transition: all 0.2s ease;
}

.program:hover {
  background-color: #f2f2f2;
}

@media(max-width: 946px){
	.table thead{
		display: none;
	}

	.table, .table tbody, .table .program, .table td{
		display: block;
		width: 100%;
	}
	.table .program{
		margin-bottom:15px;
	}
	.table td{
		text-align: right;
		/* padding-left: 50%; */
		text-align: right;
		position: relative;
    width: 100%;
	}
  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
}
  img {
  width: 50px;
}
}
</style>