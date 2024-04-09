<template>
  <PageLayout>
    <div class="page">
      <PulseHeader />

      <TodaysTraindingNews />



      <!-- <PulseFooter /> -->
    </div>
  </PageLayout>
</template>
  
<script>
import PageLayout from "../../parts/PageLayout";
import PulseHeader from './components/PulseHeader'
import TodaysTraindingNews from './components/TodaysTraindingNews'
//import PulseFooter from './components/PulseFooter'

//import TextNews from './components/TextNews'

//import SmallNews from './components/SmallNews'
  
export default {
  components: {
    PageLayout,
    PulseHeader,
    TodaysTraindingNews
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
.page {
  background-color: white;
}
</style>