<template>
  <div id="app" class="p-12">
    <Buttons />
    <Cards />
  </div>
</template>

<script>
import Buttons from '@/components/preview/Buttons'
import Cards from '@/components/preview/Cards'
export default {
  name: 'App',
  components: { Cards, Buttons }
}
</script>

<style lang="postcss">
body {
  hr {
    @apply my-2;
  }

  h1 {
    @apply .text-4xl .leading-tight .font-medium .mb-2;
  }

  .diveder {
    @apply .w-full .py-2;
  }
}
</style>
