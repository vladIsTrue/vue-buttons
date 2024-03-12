<template>
  <button class="tenth-btn" :class="tenthBtnClass" @click="() => click()">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TenthButton',
  props: {
    color: {
      type: String,
      default: 'red'
    },
    rounded: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tenthBtnClass () {
      return [
        `tenth-btn--${this.color}`,
        this.rounded ? `tenth-btn--rounded` : ``,
        this.bordered ? `` : `tenth-btn--nobordered`
      ];
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="less">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap');

.tenth-btn {
  font-size: 14px;
  font-weight: 700;
  padding: 5px 20px;
  box-shadow: 0px 4px 4px #000000;
  margin: 10px;
  cursor: pointer;

  &--rounded {
    border-radius: 20px;
  }

  &--nobordered {
    border-color: transparent !important;
  }
  
  &--red {
    border: 4px solid #983235;
    background-color: #ea4545;
    color: white;
  }

  &--green {
    border: 4px solid #2c9a30;
    background-color: #47d44c;
    color: #156f11;
  }

  &--blue {
    border: 4px solid #1b3780;
    background-color: #3560da;
    color: white;
  }
}
</style>
