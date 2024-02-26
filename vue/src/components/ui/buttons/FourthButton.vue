<template>
  <button class="button" :style="buttonStyles">
    <slot>
      Button
    </slot>
  </button>
</template>

<script>
export default {
  name: 'FourthButton',
  props: {
    bgStart: {
      type: String,
      default: 'blue'
    },
    bgEnd: {
      type: String,
      default: 'red'
    },
    boxShadowColor: {
      type: String,
      default: 'purple'
    }
  },
  computed: {
    buttonStyles () {
      return {
        '--bg-start': this.bgStart,
        '--bg-end': this.bgEnd,
        '--box-shadow-color': this.boxShadowColor
      }
    }
  }
}
</script>

<style scoped lang="less">
.button {
  display: inline-block;
  position: relative;
  width: 240px;
  height: 60px;
  border-radius: 27px;
  box-shadow: 0 2px 15px var(--box-shadow-color);
  background: linear-gradient(to right, var(--bg-start), var(--bg-end));
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 60px;
  font-family: "Droid Sans", sans-serif;
  letter-spacing: 0.15em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border: 0;
  outline: none;

  &::before {
    content: '›';
    position: absolute;
    right: 16px;
    font-size: 50px;
    margin-top: -4px;
    width: 24px;
    height: 24px;
  }

  &::after {
    position: absolute;
    z-index: 1;
    content: '';
    box-shadow: 0 0 1px 1px white;
    border: 2px solid white;
    border-radius: 27px;
    width: 230px;
    height: 50px;
    top: 3px;
    left: 3px;
    right: 2px;
    bottom: 2px;
  }

  &:active {
    box-shadow: none;
  }

  &:hover {
    transform: scale(0.95);
  }
}
</style>
