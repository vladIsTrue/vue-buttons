<template>
  <footer class="footer">
    <div class="newsletter-wrapper">
      <h3>Join Our Newsletter</h3>
      <form class="newsletter-form">
        <EmailSend />
      </form>
    </div>
    <hr>
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>Copyright &copy; 2024 Pulse - All rights reserved.</p>
        <p><a href="#">Privacy Policy</a> | <a href="#">Terms and Conditions</a></p>
        <p>Powered by Pulse</p>
      </div>
    </div>
  </footer>
</template>

<script>
import EmailSend from "./ui/buttons/EmailSend.vue"

export default {
  name: 'PulseFooter',
  components: {
    EmailSend 
  }
}
</script>

<style scoped lang="less">
.footer {
  text-align: center;
  background: #1c294b;
  margin: 30px;
  border-radius: 10px;
}

.newsletter-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
}

.newsletter-wrapper h3 {
  font-size: 32px;
  color: white;
  padding-left: 30px;
  padding-bottom: 20px;
}

.newsletter-form {
  padding-right: 30px;
  padding-bottom: 20px;
  width: 50%;
}

hr {
  border: none;
  border-top: 1px solid #fff;
  margin-left: 20px;
  margin-right: 20px;
}

.footer-bottom {
  padding-top: 5px;
  padding-bottom: 10px;
}

.footer-bottom-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.footer-bottom-content p {
  color: white;
  font-size: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.footer-bottom-content a {
  color: white;
  text-decoration: none;
}

.footer-bottom-content a:hover {
  text-decoration: underline;
}
</style>
