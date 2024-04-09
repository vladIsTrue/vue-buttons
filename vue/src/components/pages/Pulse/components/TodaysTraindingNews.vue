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
        <big-news :article="articleData"></big-news>

        <div class="right">
            <small-news :article="articleData"></small-news>
            <small-news :article="articleData"></small-news>
            <small-news :article="articleData"></small-news>
        </div>
    </div>

  </div>
</template>

<script>
import BigNews from "./BigNews.vue";
import SmallNews from "./SmallNews.vue";

export default {
  name: 'TrendingArticles',
  components: {
    BigNews,
    SmallNews
    
  },
  data() {
    return {
      articleData: {
        imageUrl: '"~vue-buttons/vue/src/components/pages/Pulse/components/resource/logo.jpg"',
        title: 'Название вашей статьи',
        subtitle: 'Краткое описание статьи',
        category: 'Новости',
        author: 'Иван Иванов',
        publishDate: '2024-04-05'
      }
    }
  }
  // any script or data properties you need can go here
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
  font-size: 36px;
  width: 50%;
}

.trending-articles-right {
  margin-left: auto;
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