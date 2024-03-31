<template>
  <div>
    <button class="add-btn" @click="addMaterial">+</button>
  </div>
</template>

<script>
export default {
  name: "AddButton",
  methods: {
    addMaterial() {
      // Ваш код для добавления нового материала
    }
  }
}
</script>

<style>
.add-btn {
  font-size: 14px;
  margin: 20px;
  cursor: pointer;
  
  color: gray;
  
  background-color: white;
  border: none;
}
  
.add-btn:active {
  color: #000;
}
</style>
