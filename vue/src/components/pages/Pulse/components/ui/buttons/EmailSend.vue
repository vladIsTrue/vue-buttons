<template>
  <div class="custom-email-input">
    <input type="email" placeholder="Enter your email address here" v-model="email">
    <button @click="sendEmail"></button>
  </div>
</template>

<script>
export default {  
  data() {
    return {
      email: ''
    };
  },
  methods: {
    sendEmail() {
      // Place your code for sending the email here
      console.log('Sending email to:', this.email);
    }
  }
};
</script>

<style lang="less">
.custom-email-input {
  position: relative;
  border: 1px solid white;
  border-radius: 50px;
  display: flex; 
  align-items: center; 
  justify-content: space-between;
  input[type="email"] {
    border: none;
    padding: 10px 20px;
    width: 400;
    color: white;
    background: transparent;
    &::placeholder {
      color: white;
    }
    &:focus {
      outline: none;
    }
  }
  button {
    background-color: white;
    border: none;
    border-radius: 50%;

    // только найти картинку без фона

    background-image: url('https://w7.pngwing.com/pngs/560/91/png-transparent-arrow-arrowright-next-right-arrows-developer-set-icon.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;

    padding: 15px 15px;
    margin : 4px;
  }
}
</style>
