<template>
  <div class="w-full">
    <h1>SuiLoaders</h1>

    <div class="relative h-64 w-full bg-green-600">
      <SuiLoader :kind="'element'" />
    </div>
    <div class="diveder"></div>
  </div>
</template>

<script>
export default {
  name: 'Loaders'
}
</script>

<style scoped></style>
