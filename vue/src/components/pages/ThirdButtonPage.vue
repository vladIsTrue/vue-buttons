<template>
  <PageLayout>
    <section class="p-16">
      <div class="button-grid">
        <div class="button-grid__column">
          <ThirdButton mode="primary"/>
          <ThirdButton mode="primary" color="#37be5b">
            POSITIVE
          </ThirdButton>
          <ThirdButton mode="primary" color="#f3aa18">
            ATTENTION
          </ThirdButton>
        </div>
        <div class="button-grid__column">
          <ThirdButton mode="smooth" color="#fde4e1">
            SMOOTH
          </ThirdButton>
          <ThirdButton mode="smooth" color="#dcf7e3" smoothColor="#37be5b">
            SMOOTH
          </ThirdButton>
          <ThirdButton mode="smooth" color="#fdf3d7" smoothColor="#f3aa18">
            SMOOTH
          </ThirdButton>
        </div>
        <div class="button-grid__column">
          <ThirdButton mode="ghost">
            GHOST
          </ThirdButton>
          <ThirdButton mode="ghost" color="#37be5b">
            GHOST
          </ThirdButton>
          <ThirdButton mode="ghost" color="#f3aa18">
            GHOST
          </ThirdButton>
        </div>
        <div class="button-grid__column">
          <ThirdButton mode="raised">
            RAISED
          </ThirdButton>
          <ThirdButton mode="raised" color="#37be5b">
            RAISED
          </ThirdButton>
          <ThirdButton mode="raised" color="#f3aa18">
            RAISED
          </ThirdButton>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout';
import ThirdButton from "@/components/ui/buttons/ThirdButton.vue";

export default {
  name: 'ThirdButtonPage',
  components: {
    PageLayout,
    ThirdButton
  }
}
</script>

<style lang="less">
.button-grid {
  display: flex;

  &__column {
    flex: 1;
    max-width: 150px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
