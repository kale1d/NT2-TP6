<template>
  <div id="app">
    <HeaderComponent />
    <NavBar />
    <ContainerComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import NavBar from './components/NavBar.vue'
import ContainerComponent from './components/ContainerComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavBar,
    ContainerComponent
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
html {
  margin: 0;
  all: unset;
}

body {
  margin: 0;
  padding: 0;
  background-color: #232323;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Montserrat", "Avenir";
}
</style>
