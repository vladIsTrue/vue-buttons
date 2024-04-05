<template>
  <div class="custom-email-input">
    <input type="email" placeholder="Enter your email address here" v-model="email">
    <button @click="sendEmail" style="background-color: white; border-radius: 50%; padding: 15px 15px; margin : 4px"></button>
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

<style>
.custom-email-input {
  position: relative;
  border: 1px solid white;
  border-radius: 20px;
  display: flex; /* Добавляем display: flex для центрирования */
  align-items: center; /* Выравниваем элементы по центру вертикально */
  justify-content: center; /* Выравниваем элементы по центру горизонтально */
}
input[type="email"] {
  border: none;
  padding: 10px 20px;
  width: 400;
  color: white;
  background: transparent;
}
input[type="email"]::placeholder {
  color: white;
}
input[type="email"]:focus {
  outline: none;
}
button {
  border: none;
  color: white;
  cursor: pointer;
}
</style>
