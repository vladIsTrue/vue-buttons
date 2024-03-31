<template>
  <div class="page">
    <PulseHeader />

    <PulseFooter />
  </div>
</template>
  
<script>
import PulseHeader from './components/PulseHeader'
import PulseFooter from './components/PulseFooter'
  
export default {
  components: {
    PulseHeader,
    PulseFooter
  }
}
</script>

<style>
.page{
  background-color: white;
}
</style>