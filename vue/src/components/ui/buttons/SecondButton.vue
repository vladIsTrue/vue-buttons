<template>
    <button class="btn" :class="btnClass">
      <slot>
        MENU ≡
      </slot>
    </button>
</template>

<script>
export default {
  name: 'SecondButton',
  props: {
    type: {
      type: String,
      default: 'blue'
    }
  },
  computed: {
    btnClass () {
      return 'btn--' + this.type;
    }
  }
}
</script>

<style scoped lang="less"> 
.btn {
  border-radius: 50px;
  position: relative;
  height: 50px;
  width: 150px;
  margin: 10px;
  font-size: large;
  cursor: pointer;
  border: 4px solid transparent;

  &::before {
    content: "MENU ≡";
    display: flex;
    justify-content: center;
    align-items: center;
    color: transparent;
    background-clip: text;
  }

  &--orange {
    background: linear-gradient(white, white) padding-box, linear-gradient(90deg,  #FFA500, #DC143C) border-box;
    &::before{
      background-image: linear-gradient(90deg, #FFA500, #DC143C);
    }
  }
  &--light {
    background: linear-gradient(white, white) padding-box, linear-gradient(90deg, #00BFFF, #9400D3) border-box;
    &::before {
      background-image: linear-gradient(90deg, #00BFFF, #9400D3);
    }
  }
  &--blue {
    background: linear-gradient(white, white) padding-box, linear-gradient(90deg, #0000FFFF, #FF0000FF) border-box;
    &::before {
      background-image: linear-gradient(90deg, #0000FFFF, #FF0000FF);
    }
  }
  &--purple {
    background: linear-gradient(white, white) padding-box, linear-gradient(90deg, #C71585, #9400D3) border-box;
    &::before {
      background-image: linear-gradient(90deg, #C71585, #9400D3);
    }
  }
}
</style>
