<template>
  <button class="btn" :class="btnClass">
    <slot>
      Ok
    </slot>
  </button>
</template>

<script>
export default {
  name: 'FourteenthButton',
  props: {
    color: {
      type: String,
    },
    type: {
      type: String,
    }
  },
  computed: {
    btnClass () {
      return ['btn--' + this.color, 'btn--' + this.type];
    }
  }
}
</script>

<style scoped lang="less"> 
.btn {
  height: 50px;
  width: 200px;
  position: relative;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 700;
  font-family: sans-serif;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #fff;
  border: none;

  &::before {
    position: absolute;
    font-size: 20px;
    font-weight: 700;
    top: 50%;
    transform: translateY(-60%);
    right: 15%;
    color: transparent;
    z-index: 2;
    background-clip: text;
    -webkit-background-clip: text;
  }

  &::after {
    content: " ";
    height: 60px;
    width: 160px;
    position: absolute;
    border-radius: 50px;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 10px solid transparent;
  }

  &--ok {

    &::before {
      content:"✔"
    }
  }

  &--canсel {

    &::before {
      content:"✖"
    }
  }

  &--orange {
    background: linear-gradient(90deg,  #FFCC00, #C71585);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::after {
      background: linear-gradient(white, white) padding-box, linear-gradient(90deg,  #FFCC00, #C71585) border-box;
    }

    &::before {
      background-image: linear-gradient(90deg,  #FFCC00, #C71585);
    }
  }
  &--blue {
    background: linear-gradient(90deg,  #00FFFF, #0000FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::after {
      background: linear-gradient(white, white) padding-box, linear-gradient(90deg,  #00FFFF, #0000FF) border-box;
    }
    
    &::before {
      background-image: linear-gradient(90deg,  #00FFFF, #0000FF);
    }
  }
}
</style>
