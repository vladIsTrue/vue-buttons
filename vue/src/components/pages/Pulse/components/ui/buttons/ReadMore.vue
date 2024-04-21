<template>
  <div>
    <button class="read-more-button" @click="() => click()">
      <slot>
        Read arcticles 🡥
      </slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ReadMore',
  methods: {
    click () {
      this.$emit('click')
    }
  }
};
</script>

<style lang="less" scoped>
.read-more-button {
  background-color: transparent;
  border: none;
  font-family: Calibri;
  font-size: 12px;
  cursor: pointer;
  color: black;
}
</style>
