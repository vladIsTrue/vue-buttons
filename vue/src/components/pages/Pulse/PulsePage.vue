<template>
  <div class="page">
    <PulseHeader />

    <main>
      
      <!-- <trending-articles :articles="trendingArticles"></trending-articles> -->
      
      
      <!-- <article-section :title="'Entertainment Articles'" :articles="entertainmentArticles"></article-section> -->

      <small-news :article="articleData"></small-news>

    </main>

    <!-- <div>
      <TextNews> </TextNews>
      <TextNews> </TextNews>
    </div> -->
    

    <PulseFooter />
    <!-- Footer Component
    <footer-section></footer-section> -->

  </div>
</template>
  
<script>
import PulseHeader from './components/PulseHeader'
import PulseFooter from './components/PulseFooter'

//import TextNews from './components/TextNews'

import SmallNews from './components/SmallNews'
  
export default {
  components: {
    PulseHeader,
    PulseFooter,
    //TextNews

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
  // data() {
  //   return {
  //     trendingArticles: [],
  //     entertainmentArticles: []
  //   }
  // }
}
</script>

<style>
.page{
  background-color: white;
}
</style>