<template>
  <div class="search">
    <input 
      v-model="inputData"
      type="text"
      placeholder="Search"
      class="search-input"
    >
    <button 
      class="search-btn"
      @click="() => sendData()"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchBtn',
  data() {
    return {
      inputData: ''
    };
  },
  methods: {
    sendData() {
      this.$emit('search', this.inputData);
    }
  }
};
</script>

<style lang="less">
.search {
  position: relative;
  border: 1px solid black;
  border-radius: 50px;
  display: flex; 
  align-items: center; 
  justify-content: space-between;
  
  &-input {
    border: none;
    padding: 10px 20px;
    width: 400;
    color: black;
    background: transparent;
    &::placeholder {
      color: black;
    }
    &:focus {
      outline: none;
    }
  }
  &-btn {
    border: none;
    border-radius: 50%;

    background-image: url('https://cdn-icons-png.flaticon.com/512/44/44623.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;

    padding: 15px 15px;
    margin : 4px;
  }
}
</style>
