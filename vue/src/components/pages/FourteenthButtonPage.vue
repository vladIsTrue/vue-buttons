<template>
  <div class="wrapper">
    <div class="wrapper__coloumn">
      <FourteenthButton color="orange" type="ok">ok</FourteenthButton>
      <FourteenthButton color="orange" type="cancel">cancel</FourteenthButton>
    </div>
    <div class="wrapper__coloumn">
      <FourteenthButton color="blue" type="ok">ok</FourteenthButton>
      <FourteenthButton color="blue" type="cancel">cancel</FourteenthButton>
    </div>
  </div>
</template>

<script>
import FourteenthButton from "@/components/ui/buttons/FourteenthButton.vue";
  
export default {
  name: 'FourteenthButtonPage',
  components: {
    FourteenthButton
  }
}
</script>

<style scoped lang="less">
.wrapper {
  padding: 30px;
  display: flex;
  grid-gap: 40px;

  &__coloumn {
    display: flex;
    flex-direction: column;
    grid-gap: 40px;
  }
}
</style>
