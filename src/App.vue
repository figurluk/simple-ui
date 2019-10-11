<template>
  <div id="app">
    <SuiButton />
  </div>
</template>

<script>
import SuiButton from '@/components/SuiButton'

export default {
  name: 'App',

  components: {
    SuiButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
