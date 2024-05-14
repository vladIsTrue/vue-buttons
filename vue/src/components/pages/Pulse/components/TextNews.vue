<template>
  <div class="text-card">
    <div class="text-card__content">
      <h2 class="text-card__content__title">{{ card.title }}</h2>
      <p class="text-card__content__text">{{ card.subtitle }}</p>
    </div>
    <RouterLink :to="{ name: routeNames.NEWS_PULSE, params: { id:card.id } }">
      <ReadMore class="text-card__more"/>
    </RouterLink>
  </div>
</template>

<script>
import { RouteNames } from "@/router/routes";
import ReadMore from "./ui/buttons/ReadMore.vue";

export default {
  name: "TextNews",
  components: {
    ReadMore
  },
  props: {
    card: {
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
.text-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 14px solid  #a97ddf;
  border-radius: 10px;
  
  padding: 15px;

  background-color: white;
  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  min-width: 240px;
  max-width: 240px;
  max-height: 144px;
  min-height: 144px;
  
  margin: 8px;

  &__content {
    max-height: 130px;
    min-height: 130px;  

    line-height: 1;

    &__title {
      font-size: 22px;
      color: #333;
    }

    &__text {
      font-size: 12px;
      color: #666;
    }
  }
}
</style>
