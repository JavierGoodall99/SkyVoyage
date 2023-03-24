<template lang="">
  <body>
    <div>
      <img
        srcset="
          https://i.postimg.cc/B68jg3qP/Experience-the-world-while-making-an-impact-on-lives-2.png,
          https://i.postimg.cc/B68jg3qP/Experience-the-world-while-making-an-impact-on-lives-2-2x.png 2x"
        alt=""
        class="bg"
      />
    </div>
    <h1 class="title">Welcome</h1>
    <div class="welcome">
      <p class="description">
        We are delighted to have you here, and we cannot wait to help you embark
        on your journey of making a difference.
        <br />
        <br />
        Our mission is to provide you with a seamless and elegant travel
        experience while connecting you with meaningful volunteer opportunities
        across the globe.
        <br />
        <br />
        We are passionate about making your travel dreams come true. Whether
        you're looking to immerse yourself in a new culture, work on a community
        project, or teach English to children, we have the perfect program for
        you. Thank you for choosing us as your travel partner. We look forward
        to serving you with the utmost elegance and sophistication.
      </p>
    </div>
    <div>
      <h1 class="how">How it works</h1>
      <a v-for="card in cards" :key="card.title" :href="card.link" class="card">
        <h3 v-html="card.title"></h3>
        <p class="text-white fs-5" v-html="card.description"></p>
        <img :src="card.imageSrc" :alt="card.title" class="w-50" />
      </a>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "1.<br>Login",
          description: "Tell us about yourself",
          imageSrc: "https://i.postimg.cc/rmTyVBXN/key.png",
          link: "/registration",
        },
        {
          title: "2.<br>Browse",
          description: "View all of our volunteer programs",
          imageSrc: "https://i.postimg.cc/SscYSBTy/browsing-1.png",
          link: "/programs",
        },
        {
          title: "3.<br>Book",
          description:
            "Choose the country based on where the program is located",
          imageSrc: "https://i.postimg.cc/QC0yzyrb/travel.png",
          link: "/flights",
        },
        {
          title: "4.<br>Checkout",
          description: "Purchase your flight ticket",
          imageSrc: "https://i.postimg.cc/HLb7dJkJ/airplane-ticket.png",
          link: "/checkout",
        },
      ],
    };
  },
};
</script>

<style scoped>
.welcome {
  background-color: #6e91b3;
  border-radius: 25px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;
}

.title {
  margin-bottom: 30px;
  font-size: 4rem;
  padding-top: 100px;
  color: rgb(27, 61, 102);
}

a {
  text-decoration: none;
}
.description {
  letter-spacing: 5px;
  word-spacing: 5px;
  font-size: 25px;
  line-height: 35px;
  margin-bottom: 20px;
  color: #fefeff;
}

body {
  font-family: "Black Mango Medium";
  background: radial-gradient(
    circle,
    rgba(248, 248, 248, 1) 0%,
    rgb(193, 210, 232) 100%
  );
}
.bg {
  width: 100%;
  height: 100vh;
}

@font-face {
  font-family: "Black Mango Medium";
  src: url("../assets/font/fonts.ttf");
}

h1 {
  font-size: 2rem;
  color: rgb(0, 0, 0);
  font-family: Black Mango Medium;
}

.how {
  font-size: 4rem;
  padding-top: 100px;
  color: rgb(27, 61, 102);
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

p {
  word-spacing: 0.4rem;
}

h3 {
  font-size: 2.5rem;
  font-family: "Black Mango Medium";
  padding-top: 30px;
  color: rgb(255, 255, 255);
}

/* ----------------------------------Media Queries */

@media screen and (max-width: 300px) {
  .im {
    /* max-width: 100%; */
    object-fit: cover;
  }

  
  @media only screen and (max-width: 768px) {
    .bg{
      background-image: url("https://i.postimg.cc/MG255nZz/Untitled-design.png");
    background-size: cover;
    background-position: center;
    }

  }
}
</style>
