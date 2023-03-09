<template>
  <NavBarVue></NavBarVue>
<body>
  <router-view/>
</body>
<FooterVue></FooterVue>
</template>

<script>
import NavBarVue from './components/NavBar.vue';
import FooterVue from './components/Footer.vue';


export default {
components:{
  NavBarVue,
  FooterVue,
}
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
