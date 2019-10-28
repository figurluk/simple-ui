<template>
  <div class="w-full">
    <h1>SuiTextarea</h1>

    <sui-textarea v-model="areaModel" />
    <div class="diveder"></div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'TextAreas',
  data: () => ({
    areaModel: null
  })
}
</script>

<style scoped></style>
