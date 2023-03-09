<template lang="">
  <body class="background">
    <div>
      <img src="https://i.postimg.cc/VNSRJnww/output-onlinegiftools.gif" alt="" class="loop-animation">
      <!-- <h1>Book your Flight and Make a Difference</h1> -->
    </div>
    <!-- <img src="https://i.postimg.cc/bdX0n9SW/2207-w046-n005-217b-p1-217.png" alt="" class="clean"> -->
  </body>
</template>
<script>
export default {

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');


h1 {
  font-size: 6rem;
  font-family: 'Concert One', cursive;
  color: black;
}
.background{
  height: 100vh; 
  width: 100%; 
  background: linear-gradient(to bottom, #0072ff, #ffffff);
  overflow: hidden;
}

.clean{
  /* width: 100% ; */
  padding-right: 250px;
  /* height: 350px; */
    /* filter: brightness(0) invert(1); */
    /* width: 200px;
    height: 200px; */
    /* you need to match the shadow color to your background or image border for the desired effect*/
    /* box-shadow: 8px 8px 8px 8px white inset; */
}

.loop-animation {
  animation: loop 10s linear infinite;
  width: 300px;
  /* filter: brightness(0) invert(1); */
}

@keyframes loop {
  0% {
    transform: translateX(-300%);
  }
  100% {
    transform: translateX(350%);
  }
}
</style>