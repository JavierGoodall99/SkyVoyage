<template>
  <body>
    <div>
      <h2>Booking</h2>
      <table>
        <thead>
          <tr>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="bookedFlight">
            <td>{{ bookedFlight.DepartureCity }}</td>
            <td>{{ bookedFlight.ArrivalCity }}</td>
            <td>{{ bookedFlight.Price }}</td>
            <td>{{ formatDate(bookedFlight.DepartureDate) }}</td>
            <td>{{ formatDate(bookedFlight.ArrivalDate) }}</td>
            <td><button @click="removeFlight(flight)">Remove</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['bookedFlight']),
    // ---------------DATE FORMAT---------------------
    formatDate() {
      return function(date) {
        if (!date || isNaN(new Date(date).getTime())) {
          return 'N/A';
        }
        const d = new Date(date);
        return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      };
    },
  },
};
</script>

<style scoped>
body {
  background: radial-gradient(
    circle,
    rgba(248, 248, 248, 1) 0%,
    rgb(193, 210, 232) 100%
  );
  font-family: "Black Mango Medium";
  height: 100vh;
}

h2 {
  font-size: 4rem;
  padding-top: 30px;
  color: rgb(27, 61, 102);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  letter-spacing: 3px;
  word-spacing: 5px;
  font-size: 17px;
  line-height: 35px;
}

th,
td {
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

tr:hover {
  background-color: #e8e8e8;
}

button {
  background-color: #0f205a;
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #1b206b;
}
</style>
