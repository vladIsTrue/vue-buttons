<template>
  <div class="trending">
    <div class="trending__articles">
      <h2 class="trending-heading">Todays Trending Articles</h2>
      <div class="trending__articles-right">
        <p>Article has attracted attention of many people with its controversial topic.</p>
        <p>The author discusses issues that are very relevant and have a wide impact.</p>
      </div>
    </div>
    <hr>
    <div class="news">
      <big-news :current-news="topTodaysArticles[0]"/>  
      <div class="right">
        <small-news :current-news="topTodaysArticles[1]"/>
        <small-news :current-news="topTodaysArticles[2]"/>
        <small-news :current-news="topTodaysArticles[3]"/>
      </div>
    </div>
  </div>
</template>

<script>
import BigNews from "./BigNews.vue";
import SmallNews from "./SmallNews.vue";
import { mapGetters } from "vuex";

export default {
  name: 'TrendingArticles',
  components: {
    BigNews,
    SmallNews
    
  },
  data () {
    return {
      currentSlide: 0,
      inputData: ""
    };
  },
  computed: {
    ...mapGetters("pulse", [
      "getTodaysTrendingArticles"
    ]),
    todaysTrendingArticles () {
      return this.getTodaysTrendingArticles;
    },
    topTodaysArticles () {
      return this.todaysTrendingArticles.slice(0, 4);
    }
  }
}
</script>

<style lang="less" scoped>
.trending {
  padding: 1rem 2rem;

  &__articles {
    display: flex;

    &-right {
      font-size: 8px;
      text-align: left;
      color: #666;
      margin: 10px 0;
      margin-left: auto;
      font-family: "Calibri", sans-serif;
    }
  }

  &-heading {
    color: black;
    font-size: 32px;
    font-family: "Calibri", sans-serif;
  }

  .news {
    padding-right: 1rem;
    display: flex;

    &__right {
      padding-left: 1rem;
      width: 50%;
    }
  }
}
</style>
