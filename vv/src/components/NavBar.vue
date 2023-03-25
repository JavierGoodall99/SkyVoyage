<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        
        <h3> <img src="https://i.postimg.cc/SxKs9wy0/charity.png" alt="logo" class="logo">Volunteer Ventures</h3>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="text-white" to="/" active-class="active-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text-white" to="/about" active-class="active-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text-white" to="/programs" active-class="active-link">Programs</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text-white" to="/flights" active-class="active-link">Flights</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text-white" to="/registration" active-class="active-link">Apply</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text-white" to="/cart" active-class="active-link">Cart</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text-white" to="/contact" active-class="active-link">Contact</router-link>
              </li>
              <li class="nav-item">
                <router-link v-show="user"  class="text-white" to="/checkout" active-class="active-link">Checkout</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text-white" to="/admin" active-class="active-link">Admin</router-link>
              </li>
              <li class="nav-item">
                <router-link v-show="user" class="text-white" to="/account" active-class="active-link">Account</router-link>
              </li>
            </ul>
          </div>
    </div>
  </nav>
  
  </template>
  
  <script>
  export default {
      name: 'NavBar',
      data() {
          return {
            FirstName: '',
            LastName: '',
            PhoneNumber: '',
            Email: '',
            Address: '',
            userRole: '',
          }
      },
      computed: {
          user() {
              return this.$store.state.user
          },
      },
  }
  </script>

  <style scoped>
  
  .active-link {
  text-decoration: none;
  border-bottom: 2px solid rgb(255, 255, 255); 
  }
  
  /* nav a.router-link-exact-active[data-v-4295d220] {
      color: rgb(255, 255, 255);
  } */
  
  @font-face {
        font-family: 'Black Mango Medium';
        src: url('../assets/font/fonts.ttf');
    }
  .nav-item {
    font-family: 'Black Mango Medium';
    word-spacing: 1rem;
    letter-spacing: 0.1rem;
    padding: 13px;
    font-size: larger;
    font-weight: lighter;
  }
  
  h3{
    font-family: 'Black Mango Medium';
  }
  
  .logo{
    width: 3.5rem;
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