<template>
  <div class="w-full">
    <h1>SuiLoaders</h1>

    <div class="relative h-64 w-full bg-green-600">
      <sui-loader :kind="'element'" />
    </div>
    <div class="diveder"></div>
  </div>
</template>

<script>
import SuiLoader from '../../../../simple-ui/src/components/SuiLoader/SuiLoader'
export default {
  name: 'Loaders',
  components: { SuiLoader }
}
</script>

<style scoped></style>
