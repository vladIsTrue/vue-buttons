<template>
  <div class="header">
    <div class="header__logo">
      <img 
        :src="require('./resource/logo.jpg')"
        class="header__logo__image"
        alt="logo"
      >
       Pulse
    </div>
    <nav class="header__nav-links">
      <RouterLink
        to="/articles"
        class="header__nav-link"
        :class="{ 'header__nav-link--active': $route.path === '/articles' }"
      >
        Articles
      </RouterLink>
      <RouterLink
        to="/product"
        class="header__nav-link"
        :class="{ 'header__nav-link--active': $route.path === '/product' }"
      >
        Product
      </RouterLink>
      <RouterLink
        to="/solutions"
        class="header__nav-link"
        :class="{ 'header__nav-link--active': $route.path === '/solutions' }"
      >
        Solutions
      </RouterLink>
      <RouterLink
        to="/resources"
        class="header__nav-link"
        :class="{ 'header__nav-link--active': $route.path === '/resources' }"
      >
        Resources
      </RouterLink>
      <RouterLink
        to="/enterprise"
        class="header__nav-link"
        :class="{ 'header__nav-link--active': $route.path === '/enterprise' }"
      >
        Enterprise
      </RouterLink>
    </nav>

    <div class="header__nav-buttons">
      <!-- <RouterLink 
        :to="{ name: routeNames.ADD_TODAYS_NEWS_PULSE }"
        class="header__nav-btn"
        :class="{ 'header__nav-link--active': $route.name === routeNames.ADD_TODAYS_NEWS_PULSE }"
      > -->
      <RouterLink
        to="/enterprise"
        class="header__nav-btn"
        :class="{ 'header__nav-btn--active': $route.path === '/enterprise' }"
      >
        Add news
      </RouterLink>
    </div>
  </div>
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
  padding: 1rem 2rem;
  background-color: white;
  height: 32px;
  font-family: "Calibri", sans-serif;
  font-weight: 600;
  
  &__logo {
    display: flex;
    align-items: center;
    font-size: 18px;
    &__image {
      height: 32px;
      margin-right: 6px;
    }
  }
  &__nav-links {
    display: flex;
  }
  &__nav-link {
    margin-left: 18px;
    color: gray;
    letter-spacing: 1px;
    font-size: 12px;
    &--active {
      color: black;
    }
  }
  &__nav-buttons {
    display: flex;
  }
  &__nav-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 20px;
    color: white;
    background-color: #007bff;
    cursor: pointer;
  }
}
</style>
