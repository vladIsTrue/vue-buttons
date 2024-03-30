<template>
<footer class="footer">
  <div class="newsletter-wrapper">
    <h3>JOIN OUR NEWSLETTER</h3>
    <form class="newsletter-form">
      <input type="email" placeholder="Enter your email">
      <button type="submit">Subscribe</button>
    </form>
  </div>
  <hr>
  <div class="footer-bottom">
    <p>Copyright &copy; 2024 Pulse. All rights reserved.</p>
    <p><a href="#">Privacy Policy</a></p>
    <p>Powered by Pulse</p>
  </div>
</footer>
</template>
  
<script>
export default {
  name: 'PulseFooter'
}
</script>
  
<style scoped lang="less">
.footer {
  padding: 20px 0;
  text-align: center;
  background: #1c294b;
  margin: 60px 60px;
  border-radius: 10px;
}

.newsletter-wrapper {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.newsletter-wrapper h3 {
  font-size: 24px;
  color: white;
}

.newsletter-form input {
  padding: 5px;
  margin: 0 10px 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.newsletter-form button {
  padding: 5px 10px;
  border: none;
  background: #ff4500;
  color: #fff;
  border-radius: 5px;
}

hr {
  border: none;
  border-top: 1px solid #fff;
  margin: 20px 20px;
}

.footer-bottom {
  display: flex;
  justify-content: space-around;
}

.footer-bottom p {
  margin: 0 10px;
  color: white;
}

</style>
  