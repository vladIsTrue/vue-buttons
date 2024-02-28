<template>
  <button class="first-button" :class=getColor>
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'FirstButton',
  props: {
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    getColor () {
      return `first-button--${this.color}`;
    }
  }
}
</script>

<style lang="less" scoped>
.first-button {
  border: none;
  color: white;
  padding: 10px 35px;
  font-size: 18px;
  border-radius: 6px;
  position: relative;

  &--green {
    background: #5cbb98;
  }

  &--white {
    background: #e6ebed;
    color: #6e8a95;
    border: 1px solid #d5dce0;
  }

  &--red {
    background: #e0886a;
  }

  &:after {
    content:'';
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 6px;
  }

  &:hover {
    box-shadow: 0 -3px 0 rgba(0, 0, 0, 0.2) inset;
    cursor: pointer;
  }

  &:active {
    box-shadow: none;

    &::after {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  &:disabled {
    box-shadow: none;
    cursor: default;

    &::after {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
}
</style>
