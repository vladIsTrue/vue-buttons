<template>
  <PageLayout>
    <div class="flex-container">
      <div>
        <TenthButton 
          @click="() => increment(0)"
          color="red" 
          rounded="true"
        >
          Strawberry (<span>{{ getButtonCounts[0] }}</span>)
        </TenthButton>
        <TenthButton
          @click="() => increment(1)"
          color="green"
          rounded="true"
        >
          Apple (<span>{{ getButtonCounts[1] }}</span>)
        </TenthButton>
        <TenthButton
          @click="() => increment(2)"
          color="blue"
          rounded="true"
        >
          Blueberry (<span>{{ getButtonCounts[2] }}</span>)
        </TenthButton>
      </div>
      <div>
        <TenthButton
          @click="() => increment(3)"
          color="red"
          bordered="true"
          rounded="true"
        >
          Strawberry (<span>{{ getButtonCounts[3] }}</span>)
        </TenthButton>
        <TenthButton
          @click="() => increment(4)"
          color="green"
          bordered="true"
          rounded="true"
        >
          Apple (<span>{{ getButtonCounts[4] }}</span>)
        </TenthButton>
        <TenthButton
          @click="() => increment(5)"
          color="blue"
          bordered="true"
          rounded="true"
        >
          Blueberry (<span>{{ getButtonCounts[5] }}</span>)
        </TenthButton>
      </div>
      <div>
        <TenthButton @click="() => increment(6)" color="red"> 
          Strawberry (<span>{{ getButtonCounts[6] }}</span>)
        </TenthButton>
        <TenthButton @click="() => increment(7)" color="green"> 
          Apple (<span>{{ getButtonCounts[7] }}</span>)
        </TenthButton>
        <TenthButton @click="() => increment(8)" color="blue"> 
          Blueberry (<span>{{ getButtonCounts[8] }}</span>)
        </TenthButton>
      </div>
      <div>
        <TenthButton
          @click="() => increment(9)"
          color="red"
          bordered="true"
        >
          Strawberry (<span>{{ getButtonCounts[9] }}</span>)
        </TenthButton>
        <TenthButton
          @click="() => increment(10)"
          color="green"
          bordered="true"
        >
          Apple (<span>{{ getButtonCounts[10] }}</span>)
        </TenthButton>
        <TenthButton
          @click="() => increment(11)"
          color="blue"
          bordered="true"
        >
          Blueberry (<span>{{ getButtonCounts[11] }}</span>)
        </TenthButton>
      </div>
    </div>
  </PageLayout>
</template>
  
<script>
import PageLayout from '../parts/PageLayout';
import TenthButton from "@/components/ui/buttons/TenthButton.vue";
import {mapGetters, mapActions} from "vuex";

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
