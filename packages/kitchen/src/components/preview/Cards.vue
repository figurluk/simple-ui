<template>
  <div class="w-full">
    <h1>SuiCards</h1>
    <SuiCard />
    <div class="diveder"></div>
    <div class="diveder"></div>
    <SuiCard :kind="'primary'" />
    <div class="diveder"></div>
    <div class="diveder"></div>
    <SuiCard :kind="'secondary'" />
    <div class="diveder"></div>

    <hr />
  </div>
</template>

<script>
import SuiCard from '../../../../simple-ui/src/components/SuiCard/SuiCard'
export default {
  name: 'Cards',
  components: { SuiCard }
}
</script>

<style lang="postcss" scoped></style>
