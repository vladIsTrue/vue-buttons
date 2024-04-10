<template>
  <PageLayout>
    <div class="page">
      <PulseHeader />

      <TodaysTraindingNews />

      <EntertainmentArticles/>

      <PulseFooter />
    </div>
  </PageLayout>
</template>
  
<script>
import PageLayout from "../../parts/PageLayout";
import PulseHeader from './components/PulseHeader'
import TodaysTraindingNews from './components/TodaysTraindingNews'
import EntertainmentArticles from './components/EntertainmentArticles'
import PulseFooter from './components/PulseFooter'
  
export default {
  components: {
    PageLayout,
    PulseHeader,
    TodaysTraindingNews,
    EntertainmentArticles,
    PulseFooter
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
}
</script>

<style>
.page {
  background-color: white;
}
</style>