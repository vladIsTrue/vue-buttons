<template>
  <div class="wrapper">
    <TwelfthButton type="purple"/>
    <TwelfthButton type="green"/>
    <TwelfthButton type="orange"/>
    <TwelfthButton type="blue"/>
    <TwelfthButton type="brown"/>
    <TwelfthButton type="lime"/>
  </div>
</template>

<script>
import TwelfthButton from "@/components/ui/buttons/TwelfthButton";

export default {
  name: 'TwelfthButtonPage',
  components: {
    TwelfthButton
  }
}
</script>

<style scoped lang="less">
.wrapper {
  max-width: 40%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  grid-gap: 20px;
  margin: 0 auto;
  padding: 40px 0;
}
</style>
