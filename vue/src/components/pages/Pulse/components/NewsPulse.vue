<template>
  <PageLayout>
    <div class="news-block">
      <PulseHeader/>
      <h2 class="news-block__title">{{newsTitle}}</h2>
      <img 
        :src="newsImage" 
        alt="Card Image" 
        class="news-block__image"
      />
      <p class="news-block__subtitle"> {{newsSubtitle}}</p>
      <PulseFooter/>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '../../../parts/PageLayout';
import PulseHeader from "@/components/pages/Pulse/components/PulseHeader.vue";
import PulseFooter from "@/components/pages/Pulse/components/PulseFooter.vue";
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'NewsPulse',
  components: {
    PulseFooter,
    PulseHeader,
    PageLayout
  },
  computed: {
    ...mapGetters("pulse", [
      "getEntertainmentArticles"
    ]),
    newsTitle() {
      return this.getEntertainmentArticles.title;
    },
    newsSubtitle() {
      return this.getEntertainmentArticles.subtitle;
    },
    newsImage() {
      return this.getEntertainmentArticles.image;
    }
  },
  methods: {
    ...mapActions('pulse', [
      'loadDataById'
    ])
  },
  created () {
    this.loadDataById(this.$route.params.id);
  }
}
</script>

<style scoped lang="less">
.news-block {
  background-color: white;
  padding: 20px; 
  font-family: 'Colibri';
  color: black;
  &__date {
    margin: 10px;
    text-align: left;
  }
  &__title {
    text-align: center;
    font-family: 'Colibri';
    color:black; 
    margin: 10px 0;
  }
  &__image {
    display: block;
    margin: 0 auto;
    padding: 10px;
  }
  &__subtitle {
    padding: 10px;
    text-align: justify;
  }
}
</style>
