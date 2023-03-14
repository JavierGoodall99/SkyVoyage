<template lang="">
    <div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>































<!-- import axios from 'axios'
  
  export default {
    data () {
      return {
        FirstName: '',
        LastName: '',
        Email: '',
        UserPassword: '',
        Address: '',
        PhoneNumber: '',
        userRole: 1,
        message: ''
      }
    },
    methods: {
      async register () {
        const userData = {
          FirstName: this.FirstName,
          LastName: this.LastName,
          Email: this.Email,
          UserPassword: this.UserPassword,
          Address: this.Address,
          PhoneNumber: this.PhoneNumber,
          userRole: this.userRole
        }
        try {
          console.log('Registration process triggered');
          const response = await axios.post('/register', userData)
          console.log(response.data);
          this.message = response.data;
          this.$router.push('/programs');
        } catch (error) {
          console.log(error.message);
        }
      }
    }
  } -->