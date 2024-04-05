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
  padding: 20px 40px;
  text-align: center;
  background: #1c294b;
  margin: 0 auto;
  max-width: 80%;
  border-radius: 10px;
}

.newsletter-wrapper {
  display: flex;
  flex-direction: row; // Elements in a row for larger screens
  align-items: center; // Center items vertically
  justify-content: space-between; // Distribute space between elements
  padding: 20px;
}

.newsletter-wrapper h3 {
  font-size: 32px;
  color: white;
  flex: 1; // Allow the title to take the available space
  //margin-right: 1rem; // Add space before the form
}

.newsletter-form {
  flex: 2; // Allow the form to grow
  display: flex;
  justify-content: flex-end; // Align form elements to the right
}

hr {
  border: none;
  border-top: 1px solid #fff;
  margin: 20px auto;
  width: 90%;
}

.footer-bottom {
  display: flex;
  justify-content: center; // Center for all screen sizes
  padding: 20px;
}

.footer-bottom-content {
  display: flex;
  flex-direction: row; // Elements in a row
  align-items: center;
  justify-content: space-between; // Distribute space
  width: 100%;
}

.footer-bottom-content p {
  margin: 0 10px;
  color: white;
  flex: 1; // Allow each paragraph to take equal space
}

.footer-bottom-content a {
  color: white;
  text-decoration: none;
}

.footer-bottom-content a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .newsletter-wrapper {
    flex-direction: column; // Stack elements vertically on smaller screens
    align-items: stretch; // Stretch elements to fill the width
  }

  .newsletter-wrapper h3 {
    margin-right: 0; // Remove the margin for smaller screens
  }

  .newsletter-form {
    justify-content: center; // Center form elements on smaller screens
  }

  .footer-bottom-content {
    flex-direction: column; // Stack footer content vertically on smaller screens
    align-items: stretch;
  }

  .footer-bottom-content p {
    margin-bottom: 0.5rem; // Add some space between stacked paragraphs
  }
}
</style>
