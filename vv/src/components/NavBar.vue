<template lang="">
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      
      <h2> <img src="https://i.postimg.cc/SxKs9wy0/charity.png" alt="logo" class="logo">Volunteer Ventures</h2>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
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
            <router-link to="/registration">Apply</router-link> 
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


@font-face {
      font-family: 'Black Mango Medium';
      src: url('../assets/font/fonts.ttf');
  }
.nav-item {
  font-family: 'Black Mango Medium';
  /* word-spacing: 1rem; */
  letter-spacing: 0.1rem;
  padding: 20px;
  font-size: larger;
  font-weight: lighter;
}

h2{
  font-family: 'Black Mango Medium';
}

.logo{
  width: 4.5rem;
  padding-right: 15px;
  filter: brightness(0) invert(1);
}
.navbar {
  background: rgb(27, 61, 102) ;
/* background: radial-gradient(circle, rgba(248,248,248,1) 0%, rgba(115,173,242,1) 100%); */
}

.navbar-expand-lg .navbar-nav {

    margin-left: 200px;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: medium;
}

nav a.router-link-exact-active {
  color: black;
}
</style>