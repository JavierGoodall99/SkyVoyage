<template lang="">
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav m-auto">
        <li class="nav-item">
            <router-link to="/">Home</router-link> 
        </li>
        <li class="nav-item">
            <router-link to="/about">About</router-link> 
        </li>
        <li class="nav-item">
            <router-link to="/programs">Volunteer Programs</router-link> 
        </li>
        <li class="nav-item">
            <router-link to="/flights">Flights</router-link> 
        </li>
        <li class="nav-item">
            <router-link to="/registration">Login</router-link> 
        </li>
        <li class="nav-item">
            <router-link to="/admin">Admin</router-link> 
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');
.nav-item {
  font-family: 'Concert One', cursive;
  /* word-spacing: 1rem; */
  letter-spacing: 0.1rem;
  padding: 20px;
  font-size: larger;
}
.navbar {
    background-color: #0072ff;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: black;
}
</style>