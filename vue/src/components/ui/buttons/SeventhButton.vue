<template>
  <button class="button" :class="colorChanger">
    <slot>
      DEFAULT
    </slot>
  </button>
</template>

<script>
export default {
  name: 'SeventhButton',
  props: {
    type: {
      type: String,
      default: 'default'
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
  margin: 20px 35px;
  cursor: pointer;
  padding: 10px;
  border: none;
  font-size: bold;

  &--default {
    background: linear-gradient(45deg,#c9c9c9 0%,#e3e3e3 50%,#fdfdfd 50%,#ffffff 100%);
    color: black;
    &:hover{
      background: linear-gradient(45deg,#ffffff 0%,#fdfdfd 50%,#e3e3e3 50%,#c9c9c9 100%);
    }
  }
  
  &--primary {
    background: linear-gradient(45deg,#f1bb46 0%,#eeac18 50%,#f1bb46 50%,#f5cc75 100%);
    color: white;
    &:hover{
      background: linear-gradient(45deg,#f5cc75 0%,#f1bb46 50%,#eeac18 50%,#f1bb46 100%);;
    }
  }

  &--info {
    background:linear-gradient(45deg,#0b747a 0%,#0fa2a9 50%, #13ced8 50%, #31e4ed 100%);
    color: white;
    &:hover{
      background: linear-gradient(45deg,#31e4ed 0%,#13ced8 50%,#0fa2a9 50%,#0b747a 100%);
    }
  }

  &--success {
    background: linear-gradient(45deg,#788811 0%,#a0b516 50%, #c8e31c 50%,#d3e949 100%);
    color: white;
    &:hover{
      background: linear-gradient(45deg,#d3e949 0%,#c8e31c 50%,#a0b516  50%,#788811 100%);;
    }
  }

  &--warning {
    background: linear-gradient(45deg,#cb4b06 0%,#f85e0c 50%,#f9803e 50%,#fba070 100%);
    color: white;
    &:hover{
      background: linear-gradient(45deg,#fba070 0%,#f9803e  50%,#f85e0c 50%,#cb4b06 100%);;
    }
  }

  &--danger {
    background: linear-gradient(45deg,#b5122d 0%, #e31637 50%,#ec415d 50%, #f16f85 100%);
    color: white;
    &:hover{
      background: linear-gradient(45deg,#f16f85 0%, #ec415d 50%,#e31637 50%,#b5122d  100%);
    }
  }
  
  &:hover {
     transform: scale(0.95);
  }
}

</style>
