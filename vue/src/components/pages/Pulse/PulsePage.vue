<template>
  <div class="page">
    <PulseHeader />

    <main>
      
      <!-- <trending-articles :articles="trendingArticles"></trending-articles> -->
      
      
      <!-- <article-section :title="'Entertainment Articles'" :articles="entertainmentArticles"></article-section> -->

      <BigNews/>

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

import BigNews from './components/BigNews'
  
export default {
  components: {
    PulseHeader,
    PulseFooter,
    //TextNews

    BigNews
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