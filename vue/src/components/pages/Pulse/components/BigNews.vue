<template>
  <div class="article-card">
    <img :src="article.imageUrl" :alt="article.title" class="article-image">
    <div class="article-content">
      <span class="article-category">{{ article.category }}</span>
      <h3 class="article-title">{{ article.title }}</h3>
      <p class="article-subtitle">{{ article.subtitle }}</p>
      <div class="article-metadata">
        <span class="article-author">{{ article.author }}</span>
        <span class="article-date">{{ formattedDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BigNews',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedDate() {
      return new Date(this.article.publishDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    }
  }
}
</script>

<style scoped>
.article-card {
  max-width: 500px; /* Adjust width as necessary */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  width: fit-content;
}

.article-card:hover {
  transform: translateY(-5px);
}

.article-image {
  width: 100%;
  height: auto;
  display: block;
}

.article-content {
  padding: 1rem;
  background-color: #2c3e50; /* Adjust background color as necessary */
  color: white;
}

.article-category {
  /* display: block;
  background-color: #3498db; 
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  width: fit-content; */


  border: 1px solid white;
  border-radius: 25px;
  padding: 10px 20px;
  width: 400;
  color: white;
  background: transparent;
  width: fit-content;
  font-size: 10px;
}

.article-title {
  color: white;
  font-size: 32px;
  margin-top: 0.5rem;
}

.article-subtitle {
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

.article-metadata {
  margin-top: 1rem;
  font-size: 0.8rem;
}

.article-author {
  font-weight: bold;
}

.article-date {
  float: right;
}

/* Additional styling */
</style>