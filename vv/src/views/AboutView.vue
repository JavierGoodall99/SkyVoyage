<template>
  <body>
    <h1>About Us</h1>
    <div class="about">
      <p>We're thrilled to launch our website, where we make it easy for you to book flights and volunteer in different
        countries around the world. Our goal is to make volunteering accessible and rewarding for everyone, and we're excited to share this journey with you.
        <br>
        <br>
        We believe that volunteering is a powerful way to make a positive impact on the world, and we're committed to connecting people who want to volunteer with meaningful opportunities to do so. As a new company, we're starting small but dreaming big - we're constantly adding new volunteer programs and destinations to our roster, so stay tuned for updates!
        <br>
        <br>
        In addition to offering a wide range of volunteer programs, we also make it easy for you to get there. We've developed a simple and intuitive booking system that lets you search for flights to your chosen destination and book them right on our website. We're always looking for ways to improve our services and make your volunteer journey as smooth and stress-free as possible.
        <!-- <br>
        We're excited to be on this adventure with you, and we can't wait to see all the amazing things you'll accomplish through volunteering. Thank you for choosing our company as your travel partner - we're honored to serve you. -->
      </p>
    </div>


    <h2 class="Our">Our Work</h2>
    <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <img src="https://i.postimg.cc/TwcG9vSQ/pexels-rodnae-productions-6646989.jpg" alt="" class="slide">
            <img src="https://i.postimg.cc/C5dtqyVR/pexels-max-fischer-5212340.jpg" alt="" class="slide">
            <img src="https://i.postimg.cc/5ypJcXhD/pexels-ron-lach-8830253.jpg" alt="" class="slide">
            <img src="https://i.postimg.cc/LsBrdBT8/pexels-rodnae-productions-6647037.jpg" alt="" class="slide">
            <img src="https://i.postimg.cc/2jXgf54h/pexels-suraphat-nueaon-933605.jpg" alt="" class="slide">
            <img src="https://i.postimg.cc/JzF14BsL/pexels-ron-lach-9037222.jpg" alt="" class="slide">
          </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
        </div>
      </div>

      

      

  

  </body>
</template>

<script>
  import Glide from '@glidejs/glide'
  
  export default {
  mounted() {
    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      peek: { before: 100, after: 100 },
      breakpoints: {
        768: { perView: 2 },
        576: { perView: 1 },
      },
    }).mount();
  },
};
</script>



<style scoped>

body{
  background: radial-gradient(circle, rgba(248,248,248,1) 0%,  rgb(193, 210, 232)100%);
  font-family: 'Black Mango Medium';
}

h1{
  margin-bottom: 30px;
  font-size: 4rem;
  padding-top: 70px;
  color: rgb(27, 61, 102);
}
.about{
  background-color: #6e91b3;
  border-radius: 25px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;
}
p{
  letter-spacing: 3px;
  word-spacing: 5px;
  font-size: 17px;
  line-height: 35px;
  margin-bottom: 20px;
  color: #fefeff;
}





/* ------------------------------------------Carousel-------------------------------------------------------------- */

h2{
  margin-bottom: 30px;
  font-size: 4rem;
  padding-top: 70px;
  color: rgb(27, 61, 102);
}


.slide{
  object-fit: contain;
}

.glide__arrow {
  margin-top: 50px;
  margin-bottom: 150px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  color: rgb(255, 255, 255);
  font-size: 24px;
  outline: none;
  transform: translateY(-50%);
  transition: color 0.2s ease-in-out;
  z-index: 1;
}

.glide__arrow:hover {
  color: #0f0b5b;
}

.glide__arrow--left {
  left: 24px;
  background-color:  #6e91b3;
  margin-right: 50px;
}

.glide__arrow--right {
  right: 24px;
  background-color:  #6e91b3;
}

  
  .glide__slide--active {
    transform: translateZ(0);
  }
  
  /* .glide__slide:not(.glide__slide--active) {
    transform: translateZ(-500px);
    opacity: 0.5;
  } */



</style>
