<template>
    <div>
      <h2>Booking Confirmation</h2>
      <table>
        <thead>
          <tr>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(flight, index) in bookedFlights" :key="index">
            <td>{{ flight.DepartureCity }} ({{ formatDate(flight.DepartureDate) }} {{ flight.DepartureTime }})</td>
            <td>{{ flight.ArrivalCity }} ({{ formatDate(flight.ArrivalDate) }} {{ flight.ArrivalTime }})</td>
            <td>{{ flight.Price }}</td>
            <td>
              <button @click="removeFlight(index)">Remove</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">Total:</td>
            <td>{{ totalCost }}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['bookedFlights', 'totalCost']),
    },
    methods: {
      ...mapActions(['removeFlight']),
      formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString();
      },
    },
  };
  </script>


<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }

  th, td {
    text-align: left;
    padding: 12px;
    border-bottom: 1px solid #ddd;
  }

  th {
    font-weight: bold;
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f8f8f8;
  }

  tr:hover {
    background-color: #e8e8e8;
  }

  button {
    background-color: #ff4d4d;
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
    background-color: #cc0000;
  }
</style>
