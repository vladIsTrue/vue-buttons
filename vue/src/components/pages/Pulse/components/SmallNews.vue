<template>
  <div class="small-card">
    <img 
      :src="image"
      alt="card image"
      class="small-card__image"
    >
    <div class="small-card__content">
      <span class="small-card__content__category">{{ category }}</span>
      <h2 class="small-card__content__title">{{ title }}</h2>
      <div class="small-card__metadata">
        <span class="small-card__metadata__author">{{ author }}</span>
        <span class="small-card__metadata__date">{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { RouteNames } from "../../../../router/routes";
export default {
  name: "SmallNews",
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
.small-card {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 100px;
  margin: 10px;

  &__image {
    width: 150px;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__category {
      border: 1px solid black;
      border-radius: 25px;
      width: fit-content;
      font-size: 10px;
      padding: 2px 5px;
    }

    &__title {
      color: black;
      font-size: 14px;
      margin-top: 4px;
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
    }
  }
}
</style>
