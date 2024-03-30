<template>
  <header class="header">

    <div class="logo-container">
      <img class="logo-img" src="./resource/logo.jpg" alt="Pulse Logo">
      <div class="logo-text">Pulse</div>
    </div>

    <div class="menu">
      <router-link to="/articles" class="menu-link">Articles</router-link>
      <router-link to="/product" class="menu-link">Product</router-link>
      <router-link to="/solution" class="menu-link">Solution</router-link>
      <router-link to="/resources" class="menu-link">Resources</router-link>
      <router-link to="/enterprise" class="menu-link">Enterprise</router-link>
    </div>


    <div class="find-add">

    </div>

  </header>
</template>

<script>
export default {
  name: 'PulseHeader'
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 20px 60px;
}

.menu {
  display: inline-flex;
}

.menu-link {
  margin-right: 30px;
  font-size: 15px;
}

.logo-container {
  display: inline-flex;
  align-items: center;
}

.logo-img {
  width: 25px;
  width: 25px;
}

.logo-text {
  font-size: 25px;
  margin: 5px;
}
</style>
