<template>
  <button class="btn5" :class="customStyle">
    LINK TO ACTION
  </button>
</template>

<script>
export default {
  name: 'FifthButton',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    customStyle () {
      return "btn5--" + this.type;
    }
  }
}
</script>

<style lang="less">
.btn5 {
  display: block;
  color: white;
  font-size: 24px;
  margin: 30px 30px;
  padding: 35px 80px;
  border: none;
  border-radius: 5px;
  position: relative;

  &:hover {
    padding-top: 25px;
    padding-bottom: 45px;

    &::before {
      content: '';
      height: 15px;
      width: 100%;
      position: absolute;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  &--default {
    background: #FFF;
  }

  &--blue {
    background: #19a6cb;
  }

  &--green {
    background: #7fb534;
  }

  &--red {
    background: #cd2f31;
  }

  &--orange {
    background: #ea452c;
  }

  &--black {
    background: #28304b;
  }
}
</style>
