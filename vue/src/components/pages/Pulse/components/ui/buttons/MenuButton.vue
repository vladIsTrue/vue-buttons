<template>
  <button class="menu-btn" @click="() => click()">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'MenuButton',
  props: {
    color: {
      type: String,
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.menu-btn {
  font-size: 14px;
  margin: 20px;
  cursor: pointer;

  color: gray;

  background-color: white;
  border: none;

  &:active {
    color: #000;
  }
}
</style>
