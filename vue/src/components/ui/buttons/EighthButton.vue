<template>
  <button 
    class = "eighth-button"
    :class = "{ 'primary': type === 'primary', 'filled': fill }"
  >
    <slot>button</slot>
  </button>
</template>

<script>
export default {
  name: "EighthButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    fill: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="less">
.eighth-button {
  height: 53px;
  width: 250px;
  border-width: 5px;
  border-style: solid;
  border-radius: 38px;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 20px;

  &:not(.filled).primary {
    background-color: #333333;
    border-color: #a6582e;
    color: #a6582e;
  }

  &.filled.primary {
    background-color: #fd6a02;
    border-color: #fd6a02;
    color: #ffffff;
  }

  &.filled:not(.primary) {
    background-color: #ffffff;
    border-color: #ffffff;
    color: #555555;
  }

  &:not(.filled):not(.primary) {
    background-color: #333333;
    border-color: #444444;
    color: #ffffff;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:not(.filled):not(.primary) {
    background-color: #333333;
    border-color: #7e7e7e;
    color: #ffffff;
  }

  &:hover:not(.filled).primary {
    background-color: #fd6a02;
    border-color: #fd6a02;
    color: #ffffff;
  }

  &:hover.filled:not(.primary) {
    background-color: #dedede;
    border-color: #dedede;
    color: #333333;
  }

  &:hover.filled.primary {
    background-color: #333333;
    border-color: #a6582e;
    color: #a6582e;
  }
}
</style>
