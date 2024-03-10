<template>
  <PageLayout>
    <div class="flex-container">
      <div>
        <TenthButton @click.native="increment('b1')" color="red" rounded="true"> 
          Strawberry (<span>{{ getButtonCounts.b1 }}</span>)
        </TenthButton>
        <TenthButton @click.native="increment('b2')" color="green" rounded="true"> 
          Apple (<span>{{ getButtonCounts.b2 }}</span>)
        </TenthButton>
        <TenthButton @click.native="increment('b3')" color="blue" rounded="true"> 
          Blueberry (<span>{{ getButtonCounts.b3 }}</span>)
        </TenthButton>
      </div>
      <div>
        <TenthButton @click.native="increment('b4')" color="red" bordered="true" rounded="true"> 
          Strawberry (<span>{{ getButtonCounts.b4 }}</span>)
        </TenthButton>
        <TenthButton @click.native="increment('b5')" color="green" bordered="true" rounded="true"> 
          Apple (<span>{{ getButtonCounts.b5 }}</span>)
        </TenthButton>
        <TenthButton @click.native="increment('b6')" color="blue" bordered="true" rounded="true"> 
          Blueberry (<span>{{ getButtonCounts.b6 }}</span>)
        </TenthButton>
      </div>
      <div>
        <TenthButton @click.native="increment('b7')" color="red"> 
          Strawberry (<span>{{ getButtonCounts.b7 }}</span>)
        </TenthButton>
        <TenthButton @click.native="increment('b8')" color="green"> 
          Apple (<span>{{ getButtonCounts.b8 }}</span>)
        </TenthButton>
        <TenthButton @click.native="increment('b9')" color="blue"> 
          Blueberry (<span>{{ getButtonCounts.b9 }}</span>)
        </TenthButton>
      </div>
      <div>
        <TenthButton @click.native="increment('b10')" color="red" bordered="true"> 
          Strawberry (<span>{{ getButtonCounts.b10 }}</span>)
        </TenthButton>
        <TenthButton @click.native="increment('b11')" color="green" bordered="true"> 
          Apple (<span>{{ getButtonCounts.b11 }}</span>)
        </TenthButton>
        <TenthButton @click.native="increment('b12')" color="blue" bordered="true"> 
          Blueberry (<span>{{ getButtonCounts.b12 }}</span>)
        </TenthButton>
      </div>
    </div>
  </PageLayout>
</template>
  
<script>
import PageLayout from '../parts/PageLayout';
import TenthButton from "@/components/ui/buttons/TenthButton.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'TenthButtonPage',
  components: {
    PageLayout,
    TenthButton
  },
  computed: {
    ...mapGetters('tenthButton', [
      'getButtonCounts'
    ])
  },
  methods: {
    ...mapActions('tenthButton', [
      'incrementButtonCount'
    ]),
    increment(index) {
      this.incrementButtonCount(index)
    }
  }
}
</script>

<style scoped lang="less">
.flex-container {
  display: flex;
  flex-direction: column;
}
</style>
