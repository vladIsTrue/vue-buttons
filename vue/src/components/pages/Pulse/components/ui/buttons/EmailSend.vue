<template>
  <div class="custom-email">
    <input 
      v-model="email"
      type="email"
      placeholder="Enter your email address here"
      class="custom-email-input">
    <button 
      @click="sendEmail"  
      class="custom-email-btn"
    />
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
      console.log('Sending email to:', this.email);
    }
  }
};
</script>

<style lang="less">
.custom-email {
  position: relative;
  border: 1px solid white;
  border-radius: 50px;
  display: flex; 
  align-items: center; 
  justify-content: space-between;
  
  &-input[type="email"] {
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
  
  &-btn {
    background-color: white;
    border: none;
    border-radius: 50%;
    background-image: url('https://w7.pngwing.com/pngs/560/91/png-transparent-arrow-arrowright-next-right-arrows-developer-set-icon.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    padding: 15px 15px;
    margin: 4px;
  }
}
</style>
