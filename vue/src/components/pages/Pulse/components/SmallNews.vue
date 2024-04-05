<template>
  <div class="article-card">
    <img :src="article.imageUrl" :alt="article.title" class="article-image">
    <div class="article-info">
      <span class="article-category">{{ article.category }}</span>
      <h3 class="article-title">{{ article.title }}</h3>
      <div class="article-footer">
        <span class="article-author">{{ article.author }}</span>
        <span class="article-date">{{ formattedDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallNews',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedDate() {
      // Format the date here as per your requirements
      return new Date(this.article.publishDate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    }
  }
}
</script>

<style scoped>
.article-card {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.article-image {
  width: 120px; /* Or any other fixed width */
  height: 100%;
  object-fit: cover;
}

.article-info {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
}

.article-category {
  border: 1px solid black;
  padding: 2px 8px;
  border-radius: 15px;
  color: black;
  background: transparent;
  width: fit-content;
  font-size: 0.75rem;
}

.article-title {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
}

.article-author {
  color: #555;
}

.article-date {
  color: #999;
}

/* You may need to adjust the styling to match the exact design */
</style>