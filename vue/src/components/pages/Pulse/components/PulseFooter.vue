<template>
  <footer class="footer">
    <div class="footer-newsletter-wrapper">
      <h3 class="footer-newsletter-wrapper-text">Join Our Newsletter</h3>
      <form class="footer-newsletter-wrapper-form">
        <EmailSend />
      </form>
    </div>
    <hr class="footer-line">
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p class="footer-bottom-content-p">Copyright &copy; 2024 Pulse - All rights reserved.</p>
        <p class="footer-bottom-content-p">
          <a 
            class="footer-bottom-content-a" 
            href="#"
          > Privacy Policy </a> 
          | 
          <a
            class="footer-bottom-content-a"
            href="#"
          > Terms and Conditions </a>
        </p>
        <p class="footer-bottom-content-p">Powered by Pulse</p>
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
  margin-top: 20px;
  border-radius: 10px;
  
  &-newsletter-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;

    &-text {
      font-size: 32px;
      color: white;
      padding: 0 30px 20px;
    }

    &-form {
      padding: 0 30px 20px;
      width: 50%;
    }
  }

  &-line {
    border: none;
    border-top: 1px solid white;
    margin: 0 20px;
  }

  &-bottom {
    padding: 5px 0 10px;

    &-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;

      &-p {
        color: white;
        font-size: 10px;
        padding: 0 20px;
      }

      &-a {
        color: white;
        text-decoration: none;

        &:hover {
          text-decoration: underline;  
        }
      }
    }
  }
}
</style>
