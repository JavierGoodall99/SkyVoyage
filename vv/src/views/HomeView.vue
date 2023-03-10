<template lang="">
  <body class="color">
    <div>
      <img srcset="
      https://i.postimg.cc/B68jg3qP/Experience-the-world-while-making-an-impact-on-lives-2.png, https://i.postimg.cc/B68jg3qP/Experience-the-world-while-making-an-impact-on-lives-2-2x.png 2x" alt="" class="bg">
    </div>
    <div>
      <h1 class="how">How it works</h1>
      <div class="card">
        <h3>1.<br>Login</h3> 
        <p class="text-white">Tell us about yourself</p>
      </div>
      <div class="card">
        <h3>2.<br>Browse</h3>
        <p class="text-white">View all of our volunteer programs</p>
        <img src="https://i.postimg.cc/cJ9b2rjH/7732609-5236.jpg" alt="" class="logo2">
      </div>
      <div class="card">
        <h3>3.<br>Book</h3>
        <p class="text-white">Choose the country based on where the program is located</p>
      </div>
      <div class="card">
        <h3>4.<br>Checkout</h3>
        <p class="text-white">Purchase your flight ticket</p>
      </div>
    </div>
  </body>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');

body{
  font-family: 'Black Mango Medium';
}
.bg{
  width: 100%;
  height: 100vh;
}


@font-face {
  font-family: 'Black Mango Medium';
  src: url('../assets/font/fonts.ttf');
}

h1{
  font-size: 2rem;
  color: rgb(0, 0, 0);
  font-family: Black Mango Medium;
}

.color{
  background: radial-gradient(circle, rgba(248,248,248,1) 0%,  rgb(11, 36, 69)100%);
}

.how{
  font-size: 5rem;
  padding-top: 100px;
  color: rgb(27, 61, 102);
}


@media screen and (max-width: 300px) {
  .im {
    /* max-width: 100%; */
    object-fit: cover;
  }
}



/* -------------------------------------------------------CARDS-------------------------------------------------------------- */

.card {
  display: inline-block;
  width: 300px;
  height: 400px;
  background-color: #6e91b3;
  border-radius: 16px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  margin: 30px;
  vertical-align: top;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-10px);
}
p{
  word-spacing: 0.4rem;
}

h3{
  font-size: 2.5rem;
  font-family: 'Black Mango Medium';
  padding-top: 30px;
  color: rgb(255, 255, 255);
}

.logo2{
  width: 280px;
  border-radius: 20px;
}
</style>
