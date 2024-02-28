<template>
  <PageLayout>
    <div class="flex-container">
      <div>
        <TenthButton color="red" rounded="true"> 
          Strawberry 
        </TenthButton>
        <TenthButton color="green" rounded="true"> 
          Apple 
        </TenthButton>
        <TenthButton color="blue" rounded="true"> 
          Blueberry 
        </TenthButton>
      </div>
      <div>
        <TenthButton color="red" bordered="true" rounded="true"> 
          Strawberry 
        </TenthButton>
        <TenthButton color="green" bordered="true" rounded="true"> 
          Apple 
        </TenthButton>
        <TenthButton color="blue" bordered="true" rounded="true"> 
          Blueberry 
        </TenthButton>
      </div>
      <div>
        <TenthButton color="red"> 
          Strawberry 
        </TenthButton>
        <TenthButton color="green"> 
          Apple 
        </TenthButton>
        <TenthButton color="blue"> 
          Blueberry 
        </TenthButton>
      </div>
      <div>
        <TenthButton color="red" bordered="true"> 
          Strawberry 
        </TenthButton>
        <TenthButton color="green" bordered="true"> 
          Apple 
        </TenthButton>
        <TenthButton color="blue" bordered="true"> 
          Blueberry 
        </TenthButton>
      </div>
    </div>
  </PageLayout>
</template>
  
<script>
import PageLayout from '../parts/PageLayout';
import TenthButton from "@/components/ui/buttons/TenthButton.vue";

export default {
  name: 'TenthButtonPage',
  components: {
    PageLayout,
    TenthButton
  }
}
</script>

<style scoped lang="less">
.flex-container {
  display: flex;
  flex-direction: column;
}
</style>
