<template>
  <div class="big-card">
    <img 
      :src="image"
      alt="card image"
      class="big-card__image"
    >
    <div class="big-card__content">
      <span class="big-card__content__category">{{ category }}</span>
      <h2 class="big-card__content__title">{{ title }}</h2>
      <p class="big-card__content__subtitle">{{ subtitle }}</p>
      <div class="big-card__metadata">
        <span class="big-card__metadata__author">{{ author }}</span>
        <span class="big-card__metadata__date">{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { RouteNames } from "../../../../router/routes";
export default {
  name: "BigNews",
  props: {
    id: {
      type: Number,
      require: 'true'
    },
    image: {
      type: String,
      default: 'image'
    },
    category: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
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
    height: auto;
    display: block;
  }

  &__content {
    padding: 1rem;
    background-color: #2c3e50;
    color: white;

    &__category {
      border: 1px solid white;
      border-radius: 25px;
      width: fit-content;
      font-size: 10px;
      padding: 5px 10px;
    }

    &__title {
      color: white;
      font-size: 28px;
      margin-top: 4px;
    }

    &__subtitle {
      font-size: 10px;
    }
  }

  &__metadata {
    font-size: 10px;
    display: flex;

    &__author {
      margin: 2px;
    }

    &__date {
      margin: 2px;
      float: right;
    }
  }
}
</style>
