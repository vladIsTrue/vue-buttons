<template>
  <div class="text-card">
    <div class="text-card__content">
      <!-- <h2 class="text-card__content__title">{{ currentNews['title'] }}</h2>
      <p class="text-card__content__text">{{ currentNews['subtitle'] }}</p> -->

      <!-- <RouterLink :to="{ name: routeNames.ENTERTAIMENT_ARTICLES, params: { id:currentNews['id'] } }"> -->
      <RouterLink
        to="/enterprise"
        class="header__nav-btn"
        :class="{ 'header__nav-btn--active': $route.path === '/enterprise' }"
      >
          <ReadMore />
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouteNames } from "@/router/routes";
import ReadMore from "./ui/buttons/ReadMore.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "TextNews",
  props: {
    currentNews: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('buttonTatarskayaFedotova', [
      'getButtonValues'
    ]),
    ...mapGetters('newsStoreTatarskayaFedotova', [
      'getFirstTypeNews'
    ]),
    routeNames () {
      return RouteNames;
    }
  },
  methods: {
    ...mapActions('buttonTatarskayaFedotova', [
      'incrementButtonValue'
    ]),
    changeSlide (index) {
      this.currentSlide = index;
      this.$emit('changeSlideIndex', index);
    },
    incrementCount (index) {
      this.incrementButtonValue(index);
    }
  },
  components: {
    ReadMore
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
  
  padding: 1em;
  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  max-width: 220px;
  width: 220px;
  max-height: 140px;
  height: 140px;
  
  margin: 8px;
  
  &__content {
    background-color: white;

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
