<template>
  <div class="bg">
    <h1>Programs</h1>
    <div class="filters pb-5">
      <!-- FILTER -->
      <label for="location" class="px-3">Filter by location:</label>
      <select v-model="selectedLocation">
        <option value="">All Locations</option>
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>
      <!-- SORT BY -->
      <label for="location" class="px-3">Filter by alphabetical order:</label>
      <button class="sort-button mx-3" @click="toggleSortOrder">Sort by {{ sortOrder }}</button>
      <!-- SEARCH -->
      <label for="search" class="px-3">Search:</label>
      <input id="search" v-model="searchQuery" type="text" placeholder="Search programs...">
    </div>
    <div class="container">
      <div class="program" v-for="program in sortedPrograms" :key="program.id">
        <div class="photo">
          <a :href="program.photoLink" target="_blank"><img :src="program.imgURL" /></a>
        </div>
        <div class="details">
          <h2>{{ program.Location }}</h2>
          <p>{{ program.ProgramName }}</p>
          <p>{{ program.Period }}</p>
          <p>{{ program.ProgramDescription }}</p>
          <router-link v-if="authenticated" :to="{ name: 'program', params: { id: program.ID } }">
            <button class="view-more-button">View More</button>
          </router-link>
          <div v-else>
            <router-link to="/registration"><button class="view-more-button">Log in to view more</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['authenticated']),
    // Get the list of programs from the Vuex store
    programs() {
      return this.$store.state.programs;
    },
    // Get a list of locations from the programs
    locations() {
      const locations = new Set();
      for (const program of this.programs) {
        locations.add(program.Location);
      }
      return Array.from(locations);
    },
    // Filter the programs by the selected location and search by program name
    filteredPrograms() {
      let filtered = this.programs;

      if (this.selectedLocation) {
        filtered = filtered.filter(program => program.Location === this.selectedLocation);
      }

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(program => program.ProgramName.toLowerCase().includes(query));
      }

      return filtered;
    },

    // Sort the filtered programs by program name, either ascending or descending
    sortedPrograms() {
      const sorted = [...this.filteredPrograms].sort((a, b) => {
        if (a.ProgramName < b.ProgramName) {
          return this.sortOrder === 'ascending' ? -1 : 1;
        }
        if (a.ProgramName > b.ProgramName) {
          return this.sortOrder === 'ascending' ? 1 : -1;
        }
        return 0;
      });
      return sorted;
    },
  },
  // authenticated() {
  //     // Replace this with your authentication logic
  //     return false;
  //   },
  data() {
    return {
      selectedLocation: '',
      sortOrder: 'ascending',
      searchQuery: '',
    };
  },

  created() {
    // Fetch the list of programs from the Vuex store
    this.$store.dispatch('fetchPrograms');
    // Check the value of the authenticated getter
    console.log('authenticated:', this.authenticated);
  },
  methods: {
    // Toggle the sort order between ascending and descending
    toggleSortOrder() {
      this.sortOrder = this.sortOrder === 'ascending' ? 'descending' : 'ascending';
    },
  },
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Black Mango Medium';
}


/* body {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background: radial-gradient(circle, rgba(248,248,248,1) 0%, rgb(193, 210, 232) 100%);
  } */

.bg {
  background: radial-gradient(circle, rgba(248, 248, 248, 1) 0%, rgb(193, 210, 232)100%);
}

h1 {
  text-align: center;
  margin-bottom: 50px;
  font-size: 4rem;
  padding-top: 70px;
  color: rgb(27, 61, 102);
}


.container {
  max-width: 1500px;
  /* margin: auto; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  padding: 0 2rem;
}


.program {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}


.program a {
  display: block;
  overflow: hidden;
  position: relative;
}


.program img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
}


.program a:hover img {
  transform: scale(1.1);
}


.details {
  padding: 1.5rem;
  background-color: #6e91b3;
}


h2 {
  margin-bottom: 0.5rem;
  font-size: 2rem;
  color: white;
}


p {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: white;
}


.view-more-button,
option,
select,
.sort-button {
  padding: 0.5rem 1rem;
  background-color: rgb(27, 61, 102);
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

input {
  border-radius: 5px;
  padding: 5px;
}

.view-more-button:hover {
  background-color: rgb(55, 98, 151);
}


@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
</style>
