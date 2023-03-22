<template>
<body>
  <div class="container">
    <h1 class="text-center">About Us</h1>
    <div class="row pt-5">
      <div class="col-md-6">
        <img src="https://i.postimg.cc/t4LDW7Hh/team-volunteers-stacking-hands.jpg" alt="Volunteers in action" class="w-100">
      </div>
      <div class="col-md-6">
        <h2>Our Mission</h2>
        <p>We believe that volunteering is a powerful way to make a positive impact on the world, and we're committed to connecting people who want to volunteer with meaningful opportunities to do so. As a new company, we're starting small but dreaming big - we're constantly adding new volunteer programs and destinations to our roster, so stay tuned for updates!</p>
      </div>

      <div class="row py-5">
      <div class="col-md-6">
        <h2>Our Services</h2>
        <ul>
          <li><b>-</b> Wide range of volunteer programs</li>
          <li><b>-</b> In-country support and guidance </li>
          <li><b>-</b> Intuitive booking system for flights</li>
          <li><b>-</b> Expert advice and support for volunteers</li>
          <li><b>-</b> Opportunities for language learning and skill development</li>
        </ul>
      </div>
      <div class="col-md-6">
        <img src="https://i.postimg.cc/Yq4pb2PX/cheerful-call-center-operators-during-working-process.jpg" alt="Volunteers in action" class="w-100">
      </div>
        </div>
        </div>


        <div class="row py-5">
      <div class="col-md-6">
        <img src="https://i.postimg.cc/d3hjhT0P/women-support-group.jpg" alt="Volunteer destination" class="w-100">
      </div>
      <div class="col-md-6">
        <h2>Our Impact</h2>
        <p>Since our launch, we've helped thousands of volunteers make a positive impact on the world. Whether it's teaching English in a rural village or building sustainable infrastructure in an underserved community, we're proud to offer volunteer programs that make a real difference.</p>
      </div>
    </div>
  </div>


    <h2 class="Our">Volunteer Highlights</h2>
    <div class="glide" id="glide1">
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
        <!-- <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
        </div> -->
      </div>

      <div class="glide" id="glide2">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <img src="https://i.postimg.cc/BbTG9Rcz/teacher-helping-kids-class.jpg" alt="" class="slide">
            <img src="https://i.postimg.cc/NGmtHrqx/environment-volunteer-concept.jpg" alt="" class="slide">
            <img src="https://i.postimg.cc/gjq1B8GF/hands-plant-young-green-sprout-tree-three-volunteers.jpg" alt="" class="slide">
            <img src="https://i.postimg.cc/BnvRMjyk/volunteer-collecting-donation-box-from-another-volunteer.jpg" alt="" class="slide">
            <img src="https://i.postimg.cc/gksfVVM3/volunteers-collecting-trash.jpg" alt="" class="slide">
            <img src="https://i.postimg.cc/JzF14BsL/pexels-ron-lach-9037222.jpg" alt="" class="slide">
          </ul>
        </div>
        <!-- <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
        </div> -->
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
        autoplay: 3000, //  3 second delay
        animationDuration: 500, // animation duration to 500ms
        animationTimingFunc: 'ease-out', 
      }).mount();
  
      new Glide('#glide2', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        peek: { before: 100, after: 100 },
        breakpoints: {
          768: { perView: 2 },
          576: { perView: 1 },
        },
        autoplay: 4000,
        animationDuration: 500,
        animationTimingFunc: 'ease-out',
      }).mount();
    },
  };
  
</script>



<style scoped>
/* General styling */
body {
  background: radial-gradient(circle, rgba(248, 248, 248, 1) 0%, rgb(193, 210, 232) 100%);
  font-family: 'Black Mango Medium';
}

.container {
  max-width: 1300px;
  margin: 0 auto;
}

/* Header */
h1 {
  margin-bottom: 30px;
  font-size: 5rem;
  padding-top: 70px;
  color: rgb(27, 61, 102);
  text-align: center;
}

/* About section */
.about {
  background-color: #6e91b3;
  border-radius: 25px;
  padding: 50px 20px;
  text-align: center;
}

p {
  letter-spacing: 3px;
  word-spacing: 5px;
  font-size: 17px;
  line-height: 35px;
  margin-bottom: 20px;
  color: #000000;
}

/* Services section */
.services {
  background-color: #ffffff;
  border-radius: 25px;
  padding: 50px 20px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 20px;
  font-size: 17px;
  line-height: 35px;
  color: #000000;
}

/* Impact section */
.impact {
  background-color: #6e91b3;
  border-radius: 25px;
  padding: 50px 20px;
  text-align: center;
}

/* Images */
img {
  border-radius: 25px;
  margin-bottom: 20px;
}




/* ------------------------------------------Carousel-------------------------------------------------------------- */

h2{
  margin-bottom: 30px;
  font-size: 4rem;
  /* padding-top: 70px; */
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



/* Responsive layout */
@media (max-width: 768px) {
  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  .slide {
    width: 550px;
  }
  .about, .services, .impact {
    border-radius: 0;
  }
  
  .about, .impact {
    padding: 30px 20px;
  }
  
  .services {
    padding: 50px 20px 30px;
  }
  
  img {
    width: 100%;
  }
  
  ul {
    text-align: center;
  }
  
  li {
    margin-bottom: 10px;
  }
}

</style>
