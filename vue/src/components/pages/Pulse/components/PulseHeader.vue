<template>
  <nav class="navbar">
    <div class="logo">
      <a href="/">Pulse</a>
    </div>
    <div class="navbar-links">
      <a href="/articles">Articles</a>
      <a href="/product">Product</a>
      <a href="/solutions">Solutions</a>
      <a href="/resources">Resources</a>
      <a href="/enterprise">Enterprise</a>
    </div>
    <div class="navbar-actions">
      <button class="login-btn">Login</button>
      <button class="get-started-btn">Get Started - It's Free</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PulseHeader'
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
}

.navbar-links a {
  margin-right: 1rem;
  color: #000;
  text-decoration: none;
}

.navbar-actions {
  display: flex;
  align-items: center;
}

.login-btn {
  background: none;
  border: none;
  margin-right: 1rem;
  color: #007bff;
  cursor: pointer;
}

.get-started-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  color: #fff;
  background-color: #007bff;
  cursor: pointer;
}

/* Add additional styling according to your needs */
</style>
