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
        to="/pulse/articles"
        class="header__nav-link"
        :class="{ 'header__nav-link--active': $route.path === '/pulse/articles' }"
      >
        Articles
      </RouterLink>
      <RouterLink
        to="/pulse/product"
        class="header__nav-link"
        :class="{ 'header__nav-link--active': $route.path === '/pulse/product' }"
      >
        Product
      </RouterLink>
      <RouterLink
        to="/pulse/solutions"
        class="header__nav-link"
        :class="{ 'header__nav-link--active': $route.path === '/pulse/solutions' }"
      >
        Solutions
      </RouterLink>
      <RouterLink
        to="/pulse/resources"
        class="header__nav-link"
        :class="{ 'header__nav-link--active': $route.path === '/pulse/resources' }"
      >
        Resources
      </RouterLink>
      <RouterLink
        to="/pulse/enterprise"
        class="header__nav-link"
        :class="{ 'header__nav-link--active': $route.path === '/pulse/enterprise' }"
      >
        Enterprise
      </RouterLink>
    </nav>

    <div class="header__nav-buttons">
      <RouterLink 
        :to="{ name: routeNames.ADD_NEWS_PULSE }"
        class="header__nav-btn"
        :class="{ 'header__nav-link--active': $route.name === routeNames.ADD_NEWS_PULSE }"
      >
        Add news
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouteNames } from "@/router/routes";

export default {
  name: 'PulseHeader',
  computed: {
    routeNames() {
      return RouteNames
    }
  }
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  
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
    padding: 8px 16px;
    border: none;
    border-radius: 20px;
    font-size: 12px;
    color: white;
    background-color: #007bff;
    cursor: pointer;
  }
}
</style>
