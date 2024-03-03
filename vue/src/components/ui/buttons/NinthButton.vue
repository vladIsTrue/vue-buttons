<template>
  <button
    class="button"
    :disabled="this.disabled"
  >
    <slot>
      Button
    </slot>
  </button>
</template>

<script>
export default {
  name: 'NinthButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style scoped lang="less">
.button {
  background-color: #ebeef2;
  color: #7187BD;
  border: 1px solid #ebeef2;
  border-radius: 8px;
  padding: 12px 20px;
  box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.8), 3px  3px 16px rgba(4, 4, 47, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  font-weight: bold;
  width: 110px;

  &:active {
    box-shadow: inset -3px -3px 16px rgb(235, 238, 242), inset 2px 2px 16px rgba(3, 3, 47, 0.2);
    background-color: #e4e6ee;
    color: #88a2fc;
  }

  &:focus {
    color: #88a2fc;
  }

  &:hover {
    background-color: #edf0f4;
    color: #b5c0e0;
  }

  &.pressed {
    background-color: #e4e6ee;
    color: #5971ab;
    box-shadow: inset -3px -3px 16px rgb(235, 238, 242), inset 2px 2px 16px rgba(3, 3, 47, 0.2);
  }

  &:disabled {
    color: #bbbbbb;
    cursor: not-allowed;
    box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.05), 6px 6px 16px rgba(0, 0, 0, 0.05);
  }
}
</style>
