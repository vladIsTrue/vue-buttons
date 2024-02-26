<template>
  <button class="twelfth-btn" :class="className">
    <slot>
      button
    </slot>
  </button>
</template>

<script>
export default {
  name: "TwelfthButton",
  props: {
    type: String,
  },
  computed: {
    className () {
      return `twelfth-btn__${this.type}`;
    }
  }
}
</script>

<style lang="less" scoped>
.twelfth-btn {
  width: 150px;
  height: 50px;
  color: white;
  border: none;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 2px;
  position: relative;
  transform: translateY(0);
  transition: transform 1s;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    transform: translate(-50%, 0) scale(0);
    transition: transform 1s;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-20px);

    &::after {
      transform: translate(-50%, 20px) scale(1);
    }
  }

  &__purple {
    background: linear-gradient(90deg, rgba(235,171,218,1) 0%, rgba(190,146,206,1) 50%, rgba(169,119,197,1) 50%, rgba(113,93,179,1) 100%);
  }

  &__green {
    background: linear-gradient(90deg, rgba(54,218,101,1) 0%, rgba(49,229,144,1) 50%, rgba(29,225,129,1) 50%, rgba(17,235,183,1) 100%);
  }

  &__orange {
    background: linear-gradient(90deg, rgba(243,92,130,1) 0%, rgba(245,142,90,1) 50%, rgba(242,126,62,1) 50%, rgba(245,195,26,1) 100%);
  }

  &__blue {
    background: linear-gradient(90deg, rgba(58,109,212,1) 0%, rgba(34,135,234,1) 50%, rgba(7,112,231,1) 50%, rgba(18,146,229,1) 100%);
  }

  &__brown {
    background: linear-gradient(90deg, rgba(247,209,135,1) 0%, rgba(246,178,132,1) 50%, rgba(246,161,119,1) 50%, rgba(245,127,111,1) 100%);
  }

  &__lime {
    background: linear-gradient(90deg, rgba(239,245,60,1) 0%, rgba(124,243,54,1) 50%, rgba(91,244,26,1) 50%, rgba(14,245,24,1) 100%);
  }
}
</style>
