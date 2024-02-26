<template>
  <PageLayout>
    <FourthButton bg-start="khaki" bg-end="darkorange" box-shadow-color="orange">
      Subscribe
    </FourthButton>

    <FourthButton bg-start="orange" bg-end="deeppink" box-shadow-color="hotpink">
      Click here
    </FourthButton>

    <FourthButton bg-start="deeppink" bg-end="red" box-shadow-color="mediumvioletred">
      Download
    </FourthButton>

    <!--default-->
    <FourthButton>
      Play now
    </FourthButton>

    <FourthButton bg-start="deeppink" bg-end="mediumpurple" box-shadow-color="purple">
      Explore
    </FourthButton>

    <FourthButton bg-start="mediumpurple" bg-end="rebeccapurple" box-shadow-color="purple">
      Read more
    </FourthButton>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout';
import FourthButton from "@/components/ui/buttons/FourthButton.vue";

export default {
  name: 'FourthButtonPage',
  components: {
    PageLayout,
    FourthButton
  }
}
</script>
