<template>
    <div class="program-details">
      <h1>Program Details</h1>
      <!-- <div v-if="program"> -->
        <h2 class="program-name">{{ program.ProgramName }}</h2>
        <div class="program-info">
          <p>Location: {{ program.Location }}</p>
          <p>Period: {{ program.Period }}</p>
          <p>Description: {{ program.ProgramDescription }}</p>
        </div>
        <div class="program-photo">
          <img :src="program.imgURL" />
        </div>
      </div>
      <!-- <div v-else>
        <p>Program not found.</p>
      </div> -->
    <!-- </div> -->
  </template>
  
  <script>
  export default {
    computed: {
      program: function() {
        return this.$store.state.program;
      }
    },
    created() {
      this.$store.dispatch("fetchProgram", this.$route.params.id);
    }
  };
  </script>
  
  <style scoped>
  .program-details {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.program-name {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.program-info {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  text-align: left;
}

.program-info p {
  margin-bottom: 0.5rem;
}

.program-photo {
  margin-top: 2rem;
}

.program-photo img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

  </style>
  