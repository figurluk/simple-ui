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
export default {
  name: 'Cards'
}
</script>

<style lang="postcss" scoped></style>
