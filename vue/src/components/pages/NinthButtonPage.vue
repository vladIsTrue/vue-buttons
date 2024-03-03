<template>
  <PageLayout>
    <h1 class="title">Button 9 Issue #10 </h1>
    <div class="grid-container">
      <NinthButton />
      <NinthButton :disabled="true" />
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout';
import NinthButton from "@/components/ui/buttons/NinthButton.vue";

export default {
  components: {
    PageLayout,
    NinthButton
  },
}
</script>

<style>
.title {
  margin-top: 20px;
  margin-bottom: 20px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 20px;
}
</style>
