<template>
  <div class="w-full">
    <h1>SuiTextarea</h1>

    <sui-textarea v-model="areaModel" />
    <div class="diveder"></div>
    <hr />
  </div>
</template>

<script>
import SuiTextarea from '../../../../lib/src/components/SuiTextarea/SuiTextarea'
export default {
  name: 'TextAreas',
  components: { SuiTextarea },
  data: () => ({
    areaModel: null
  })
}
</script>

<style scoped></style>
