<template>
  <PageLayout>
    <div>
      <SecondButton type="orange"/>
      <SecondButton type="light"/>
    </div>
    <div>
      <SecondButton/>
      <SecondButton type="purple"/>
    </div>
  </PageLayout>
</template>
  
<script>
import PageLayout from '../parts/PageLayout';
import SecondButton from "@/components/ui/buttons/SecondButton.vue";
  
export default {
  name: 'SecondButtonPage',
  components: {
    PageLayout,
    SecondButton
  }
}
</script>

<style>
</style>
