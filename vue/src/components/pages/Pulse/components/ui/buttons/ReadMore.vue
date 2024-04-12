<template>
  <div>
    <button class="buttons" @click="() => click()">
      <slot>
        Read more 🡥
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
.buttons {
  background-color: transparent;
  border: none;
  font-family: Calibri;
  font-size: 12px;
  cursor: pointer;
  color: black;
}
</style>