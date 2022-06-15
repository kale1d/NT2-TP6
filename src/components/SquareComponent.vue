<template lang="html">

  <section class="square-component">
    <div class="square" @click="getColor()" :class="isWrong && 'displayNone'"
      :style="{ 'background-color': isWrong ? '#232323' : color }">
    </div>
  </section>

</template>

<script lang="js">

export default {
  name: 'square-component',
  props: ["color"],
  mounted() {

  },
  data() {
    return {
      isWrong: false,
    }
  },
  methods: {
  },
  computed: {

  }
}


</script>

<style scoped lang="css">
.square-component {}

.displayNone {
  background-color: #232323;
}

.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;

}
</style>
