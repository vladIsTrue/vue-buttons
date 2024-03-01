<template>
  <button class="sample-button" :class="buttonClass" :style="buttonColor">
    <slot>
      WARNING
    </slot>
  </button>
</template>

<script>
export default {
  name: 'ThirdButton',
  props: {
    mode: {
      type: String,
      default: 'primary'
    },
    color: {
      type: String,
      default: '#ea3d2f'
    },
    smoothColor: {
      type: String,
      default: '#ea3d2f'
    }
  },
  computed: {
    buttonClass () {
      return `sample-button--${this.mode}`
    },
    buttonColor () {
      return {
        '--color': this.color,
        '--smooth-color': this.smoothColor
      }
    }
  }
}
</script>

<style scoped lang="less">
.sample-button {
  width: 110px;
  height: 35px;
  border-radius: 4px;
  background-color: white;
  font-family: Calibri;
  font-size: 18px;
  color: white;
  cursor: pointer;
  border: none;

  &--primary {
    background-color: var(--color);
  }

  &--smooth {
    background-color: var(--color);
    color: var(--smooth-color);
  }

  &--ghost {
    color: var(--color);
    border: 1px solid var(--color);
  }

  &--raised {
    color: var(--color);
    box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.3);
  }
}
</style>
