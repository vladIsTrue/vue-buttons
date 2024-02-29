<template>
  <div class="button-8th-page">
    <EighthButton type="default" :fill="false">
    button
    </EighthButton>
    <EighthButton type="primary" :fill="false"/>
    <EighthButton type="default" :fill="true"/>
    <EighthButton type="primary" :fill="true"/>
  </div>
</template>

<script>
import EighthButton from '@/components/ui/buttons/EighthButton.vue';

export default {
  name: 'Button8thPage',
  components: {
    EighthButton
  }
};
</script>

<style scoped>
.button-8th-page {
  background-color: rgb(51, 51, 51);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>
