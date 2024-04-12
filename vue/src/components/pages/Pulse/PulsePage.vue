<template>
  <PageLayout>
    <div class="home-page">
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

//import { mapGetters } from "vuex";
  
export default {
  components: {
    PageLayout,
    PulseHeader,
    TodaysTraindingNews,
    EntertainmentArticles,
    PulseFooter
  },
  // data() {
  //   return {
  //     articleData: {
  //       imageUrl: '"~vue-buttons/vue/src/components/pages/Pulse/components/resource/logo.jpg"',
  //       title: 'Название вашей статьи',
  //       subtitle: 'Краткое описание статьи',
  //       category: 'Новости',
  //       author: 'Иван Иванов',
  //       publishDate: '2024-04-05'
  //     }
  //   }
  // },
  computed: {

  },
  methods: {
    
  }
}
</script>

<style lang="less">
.home-page {
  background-color: white;
}
</style>