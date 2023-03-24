<template>
    <div class="bg" v-if="user">
      <div class="container">
        <div>
          <img :src="user.userProfile" alt="" />
        </div>
        <div class="info">
          <h2>User Information</h2>
          <p>Name : {{ user.FirstName }}</p>
          <p>Surname : {{ user.LastName }}</p>
          <p>Email Address : {{ user.Email }}</p>
          <p>User Role : {{ user.userRole }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No user selected</p>
    </div>
  </template>

<script>
export default {
  name: 'UserProfile',

  data() {
    return {
      user: {
        FirstName: '',
        LastName: '',
        PhoneNumber: '',
        Email: '',
        UserPassword: '',
        userRole: '',
        userProfile: '',
      }
    }
  },

  methods:{
    updateUser: function (user) {
  return this.$store.dispatch("updateUser", {
    FirstName: user.FirstName,
    LastName: user.LastName,
    PhoneNumber: user.PhoneNumber,
    Email: user.Email,
    UserPassword: user.UserPassword,
    userRole: user.userRole,
  })
  .then((updatedUser) => {
    console.log(updatedUser); // check if user data is updated successfully
    this.user = updatedUser;
  })
  .catch((error) => {
    console.log(error);
  });
},

  created() {
    this.$store.dispatch("retrieveUser", this.$route.params.id)
  }
},
}
</script>

<style scoped>
.bg {
    background: radial-gradient(circle, rgba(248, 248, 248, 1) 0%, rgb(193, 210, 232) 100%);
    font-family: 'Black Mango Medium';
    font-size: 17px;
    color: rgb(27, 61, 102);
    font-weight: bold;
    letter-spacing: 0.1rem;
    word-spacing: 0.2rem;
    line-height: 40px;
    height: 100vh;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

p {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

img {
  max-width: 200px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 1rem;
}

div[v-else] p {
  font-size: 1.2rem;
  margin-top: 1rem;
  text-align: center;
}

</style>
