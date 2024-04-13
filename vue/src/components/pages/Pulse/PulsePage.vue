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
  
export default {
  components: {
    PageLayout,
    PulseHeader,
    TodaysTraindingNews,
    EntertainmentArticles,
    PulseFooter
  }
}
</script>

<style lang="less">
.home-page {
  background-color: white;
  padding: 20px;
}
</style>