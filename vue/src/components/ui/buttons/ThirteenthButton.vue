<template>
  <button class="thirteenth-btn" :class="className">
    <slot>
      Button
    </slot>
  </button>
</template>

<script>
export default {
  name: "ThirteenthButton",
  props: {
    color: {
      type: String,
      default: 'black'
    }
  },
  computed: {
    className () {
      return `thirteenth-btn--${this.color}`;
    }
  }
}
</script>

<style scoped lang="less">
.thirteenth-btn {
  width: 140px;
  height: 60px;
  border-radius: 5px;
  font-family: sans-serif;
  font-size: 24px;
  letter-spacing: 1px;
  font-weight: 700;
  border: none;
  transition: transform 1s;

  &:hover {
    cursor: pointer;
    transform: scale(0.7);
    font-weight: 500;
  }

  &--black {
    color: #4A4B57;
    background-color: #F7F7FA;
    box-shadow: 0px 10px 12px 0px rgb(206, 206, 209);
  }

  &--blue {
    color: #2164D1;
    background-color: #F6F8FF;
    box-shadow: 0px 10px 12px 0px rgb(190, 214, 245);
  }

  &--green {
    color: #38833A;
    background-color: #F5FAF5;
    box-shadow: 0px 10px 12px 0px rgb(194, 221, 198);
  }

  &--red {
    color: #C8372D;
    background-color: #FEF2F1;
    box-shadow: 0px 10px 12px 0px rgb(246, 194, 192);
  }
}
</style>
