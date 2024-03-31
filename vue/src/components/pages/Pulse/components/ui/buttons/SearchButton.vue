<template>
  <div class="search-button" @click="search">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  </div>
</template>
  
<script>
export default {
  name: "SearchButton",
  methods: {
    search() {
      // Добавьте здесь логику для поиска
      console.log('Search button clicked');
    }
  }
}
</script>
  
<style scoped>
.search-button {
  font-size: 14px;
  margin: 20px;
  cursor: pointer;
  
  color: gray;
  
  background-color: white;
  border: none;
}
  
.feather {
  width: 24px;
  height: 24px;
}

.add-btn:active {
  color: #000;
}
</style>