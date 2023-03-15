<template>
  <body>
    <div>
      <h1>Programs</h1>
      <div class="container">
        <div class="program" v-for="program in programs" :key="program.id">
          <div class="photo">
            <a :href="program.photoLink" target="_blank"><img :src="program.photo" /></a>
          </div>
          <div class="details">
            <h2>{{ program.ProgramName }}</h2>
            <p><b>Location:</b> {{ program.Location }}</p>
            <p><b>Period:</b> {{ program.Period }}</p>
            <p>{{ program.ProgramDescription }}</p>
            <button class="view-more-button">View More</button>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      programs: [
        {
          id: 1,
          ProgramName: 'Full-Stack Web Development',
          Location: 'Online',
          Period: '6 Months',
          ProgramDescription: 'Learn how to build web applications from front to back using the latest technologies',
          photo: 'https://i.postimg.cc/5ypJcXhD/pexels-ron-lach-8830253.jpg',
        },
        {
          id: 2,
          ProgramName: 'Mobile App Development',
          Location: 'San Francisco, CA',
          Period: '3 Months',
          ProgramDescription: 'Build and publish native mobile apps for iOS and Android platforms',
          photo: 'https://i.postimg.cc/LsBrdBT8/pexels-rodnae-productions-6647037.jpg',
        },
        {
          id: 3,
          ProgramName: 'Data Science',
          Location: 'Boston, MA',
          Period: '9 Months',
          ProgramDescription: 'Learn how to analyze and interpret complex data to drive business decisions',
          photo: 'https://i.postimg.cc/2jXgf54h/pexels-suraphat-nueaon-933605.jpg',
        },
      ],
    };
  },
};
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