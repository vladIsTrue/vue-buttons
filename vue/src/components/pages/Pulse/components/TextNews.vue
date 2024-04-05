<template>
  <div class="news-card">
    <div class="content-container">
      <h2 class="news-title">{{ title }}</h2>
      <p class="news-content">{{ content }}</p>
      <a href="#" class="news-link">Read Articles <span class="arrow">→</span></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Taylor Swift shares track list for her latest album during concert.',
      content: 'He also invited two other musicians to collaborate on his album, namely Post Malone and Florence and The Machine at the concert.'
    }
  }
}
</script>

<style scoped>
.news-card {
  border: 15px solid #ec407a; /* pink border color */
  border-radius: 20px;
  padding: 1em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: translateY(-2px);
}

.content-container {
  background-color: white; /* white background for the content */
}

.news-title {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.news-content {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

.news-link {
  font-size: 0.875rem;
  color: #007bff;
  text-decoration: none;
  position: relative; /* Position relative for the arrow */
}

.news-link .arrow {
  display: inline-block;
  transform: translateY(-2px) rotate(-45deg); /* Rotate arrow */
  transition: transform 0.2s ease;
}

.news-link:hover .arrow {
  transform: translateY(-4px) rotate(-45deg); /* Translate and rotate arrow on hover */
}
</style>
