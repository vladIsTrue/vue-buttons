<template>
  <div class="entertainment">
  
    <div class="entertainment-articles">
      <h2 class="entertainment-heading">Enteraintment Articles</h2>

    </div>
    
    <hr>
  
    <div class="news">
      <TextNews/>
      <TextNews/>
    </div>
  
  </div>
</template>

<script>
import TextNews from "./TextNews.vue";
  
export default {
  name: 'EntertainmentArticles',
  components: {
    TextNews,
  },
  data() {
    return {
      articleData: {
        title: 'Название вашей статьи',
        subtitle: 'Краткое описание статьи',
      }
    }
  }
  // any script or data properties you need can go here
}
</script>

<style lang="less" scoped>
.entertainment {
  padding: 1rem 2rem;
}

.entertainment-articles {
  display: flex;
  justify-content: space-between;
}

.entertainment-heading {
  font-size: 36px;
  width: 50%;
}

.entertainment-articles-right {
  margin-left: auto;
}

.news {
  padding: 2rem;
  display: flex;
}
</style>