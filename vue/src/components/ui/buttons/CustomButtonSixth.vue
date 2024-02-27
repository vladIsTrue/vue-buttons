<template>
  <button class="button" :class="colorChanger">
    <slot>
      HELLO
    </slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButtonSixth',
  props: {
    type: {
      type: String,
      default: 'yellow'
    }
  },
  computed: {
    colorChanger () {
      return 'button--' + this.type;
    }
  }
}
</script>

<style scoped lang="less">
.button {
  margin-top: 50px;
  margin-left: 20px;
  height: 35px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  border-radius: 0;
  border: 0;
  outline: #000 solid 2px;
  position: relative;
  background: none;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #ecc956;
    z-index: -1;
    transition: transform 0.45s ease 0.05s;
    left: -7px;
    bottom: -7px;
  }

  &:hover::after {
    transform: translate(14px, -14px);
  }

  &--yellow::after {
    background: #ecc956
  }

  &--red::after {
    background: #dc4d4e;
  }

  &--blue::after {
    background: #539fe0;
  }

  &--purple::after {
    background: #b96ee7
  }
}
</style>
