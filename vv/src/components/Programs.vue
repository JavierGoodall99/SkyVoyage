<template>
  <div>
    <h1>Programs</h1>
    <div class="container">
      <div class="program" v-for="program in programs" :key="program.id">
        <div class="photo">
          <a :href="program.photoLink" target="_blank"><img :src="program.imgURL" /></a>
        </div>
        <div class="details">
          <h2>{{ program.ProgramName }}</h2>
          <p> {{ program.Location }}</p>
          <p>{{ program.Period }}</p>
          <p>{{ program.ProgramDescription }}</p>
          <button class="view-more-button">View More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    programs() {
      return this.$store.state.programs;
    }
  },
  created() {
    this.$store.dispatch('fetchPrograms');


  }
}
</script>

<style scoped>

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body{
    height: 100vh; 
    width: 100%; 
    overflow: hidden;
  background: radial-gradient(circle, rgba(248,248,248,1) 0%,  rgb(193, 210, 232)100%);
  font-family: 'Black Mango Medium';
}

h1 {
  text-align: center;
}

.container {
  margin: auto;
	display: flex;
	min-height: 100vh;
	padding: 20px;
}
.container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	gap: 25px;
}
.program {
	position: relative;
}
.program a {
	display: block;
	overflow: hidden;
}
.program img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 1.5s;
}
.program a:hover img {
	transform: scale(1.2);
}
@media (max-width: 768px) {
	.container {
		max-width: 100%;
	}
}
    
</style>