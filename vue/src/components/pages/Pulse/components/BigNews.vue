<template>
  <div class="big-card">
    <img 
      :src="currentNews['image']"
      alt="card image"
      class="big-card__image"
    >
    <div class="big-card__content">
      <span class="big-card__content__category">{{ currentNews['category'] }}</span>
      <h2 class="big-card__content__title">{{ currentNews['title'] }}</h2>
      <p class="big-card__content__subtitle">{{ currentNews['subtitle'] }}</p>
      <div class="big-card__metadata">
        <span class="big-card__metadata__author">{{ currentNews['author'] }}</span>
        <span class="big-card__metadata__date">{{ currentNews['date'] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { RouteNames } from "../../../../router/routes";
export default {
  name: "BigNews",
  props: {
    currentNews: {
      type: Object,
      required: true
    }
  },
  computed: {
    routeNames () {
      return RouteNames;
    }
  }
};
</script>

<style scoped lang="less">
.big-card {
  max-width: 500px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  width: 500px;
  height: 320px;
  margin-top: 10px;
  margin-bottom: 10px;

  &__image {
    width: 100%;
    height: 50%;
    display: block;
  }

  &__content {
    padding: 10px;
    background-color: #2c3e50;
    color: white;

    &__category {
      border: 1px solid white;
      border-radius: 25px;
      width: fit-content;
      font-size: 10px;
      padding: 5px 10px;
      font-family: "Calibri", sans-serif;
    }

    &__title {
      line-height: 1;
      color: white;
      font-size: 20px;
      margin-top: 4px;
      font-family: "Calibri", sans-serif;
    }

    &__subtitle {
      line-height: 1;
      font-size: 10px;
      font-family: "Calibri", sans-serif;
    }
  }

  &__metadata {
    font-size: 10px;
    display: flex;

    &__author {
      margin: 2px;
      font-family: "Calibri", sans-serif;
    }

    &__date {
      margin: 2px;
      float: right;
      font-family: "Calibri", sans-serif;
    }
  }
}
</style>
