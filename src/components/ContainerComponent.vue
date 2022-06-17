<template lang="html">

  <section class="container-component">
    <div id="container">
      <SquareComponent v-for="(_, index) in squareQty" :key="index" :color="colors[index]" :status="squareStatus[index]"
        :index="index" />
    </div>

  </section>

</template>

<script lang="js">

import SquareComponent from './SquareComponent.vue';

export default {
  name: 'container-component',
  components: { SquareComponent },
  props: [],
  updated() {

  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {


  }
}


</script>

<style scoped lang="css">
#container {
  margin: 20px auto;
  max-width: 600px;
}
</style>
