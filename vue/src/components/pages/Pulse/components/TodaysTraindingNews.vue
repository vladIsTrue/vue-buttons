<template>
  <div class="trending">
    <div class="trending-articles">
      <h2 class="trending-heading">Todays Trending Articles</h2>
      <div class="trending-articles-right">
        <p>Article has attracted attention of many people with its controversial topic.</p>
        <p>The author discusses issues that are very relevant and have a wide impact.</p>
      </div>
    </div>
    <hr>

    <div class="news">
        <big-news
          :id="topTodaysArticles[0].id"
          :image="topTodaysArticles[0].image"
          :category="topTodaysArticles[0].category"
          :title="topTodaysArticles[0].title"
          :subtitle="topTodaysArticles[0].subtitle"
          :author="topTodaysArticles[0].author"
          :date="topTodaysArticles[0].date"
        />  

        <div class="right">
            <small-news
              :id="topTodaysArticles[1].id"
              :image="topTodaysArticles[1].image"
              :category="topTodaysArticles[1].category"
              :title="topTodaysArticles[1].title"
              :subtitle="topTodaysArticles[1].subtitle"
              :author="topTodaysArticles[1].author"
              :date="topTodaysArticles[1].date"
            />
            <small-news
              :id="topTodaysArticles[2].id"
              :image="topTodaysArticles[2].image"
              :category="topTodaysArticles[2].category"
              :title="topTodaysArticles[2].title"
              :subtitle="topTodaysArticles[2].subtitle"
              :author="topTodaysArticles[2].author"
              :date="topTodaysArticles[2].date"
            />
            <small-news
              :id="topTodaysArticles[3].id"
              :image="topTodaysArticles[3].image"
              :category="topTodaysArticles[3].category"
              :title="topTodaysArticles[3].title"
              :subtitle="topTodaysArticles[3].subtitle"
              :author="topTodaysArticles[3].author"
              :date="topTodaysArticles[3].date"
            />
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
}

.trending-articles {
  display: flex;
}

.trending-heading {
  color: black;
  font-size: 32px;
  font-family: "Calibri", sans-serif;
}

.trending-articles-right {
  margin-left: auto;
  font-family: "Calibri", sans-serif;
}

p {
  font-size: 8px;
  text-align: left;
  color: #666;
  margin: 10px 0;
}

.news {
  padding-right: 1rem;
  display: flex;
}

.right {
  padding-left: 1rem;
  width: 50%;
}

</style>