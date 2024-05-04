<template>
  <div class="entertainment">
    <div class="entertainment-articles">
      <h2 class="entertainment-heading">Enteraintment Articles</h2>
      <SearchBtn @search="(data) => handleSearch(data)"/>
      <div class="entertainment-articles-buttons">
        <button class="left-button" @click="() => prev()">&#10094;</button>
        <button class="right-button" @click="() => next()">&#10095;</button>
      </div>
    </div>
    <hr class="entertainment-line">
    <div class="news" :style="rowStyles">
      <TextNews
        v-for="news in filteredNews"
          :key="news.id"
          :id="news.id"
          :title="news.title"
          :subtitle="news.subtitle"
        />
    </div>
  </div>
</template>

<script>
import TextNews from "./TextNews.vue";
import SearchBtn from "./ui/buttons/SearchBtn.vue";
import { mapGetters } from "vuex";
  
export default {
  name: 'EntertainmentArticles',
  data () {
    return {
      currentIndex: 0,
      scrollAmount: 220,
      inputData: ""
    };
  },
  components: {
    TextNews,
    SearchBtn
  },
  computed: {
    ...mapGetters("pulse", [
      "getFilteredNews",
    ]),
    filteredNews() {
      return this.getFilteredNews(this.inputData);
    },
    rowStyles() {
      return {
        transform: `translateX(-${this.currentIndex * this.scrollAmount}px)`
      };
    }
  },
  methods: {
    next() {
      if (this.currentIndex < this.filteredNews.length) {
        this.currentIndex += 1;
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    },
    handleSearch (data) {
      this.inputData = data;
    }
  }
}
</script>

<style lang="less" scoped>
.entertainment {
  overflow: hidden;

  &-articles {
    display: flex;
    justify-content: space-between;

    &-right {
      margin-left: auto;
    }

    &-heading {
      font-size: 36px;
      font-family: "Calibri", sans-serif;
      color: black;
    }

    &-buttons {
      display: flex;

      .left-button,
      .right-button {
        border: none;
        border-radius: 50%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        padding: 0.6em 0.7em;
        margin: 4px;
        background-color: white;
      }
    }
  }

  &-line {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .news {
    display: flex;
  }
}
</style>
