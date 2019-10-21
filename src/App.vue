<template>
  <div id="app" class="p-12">
    <Buttons />
    <Cards />
    <Notifications />
    <Loaders />
    <Tooltips />
    <Badges />
    <Modals />
  </div>
</template>

<script>
import Buttons from '@/components/preview/Buttons'
import Cards from '@/components/preview/Cards'
import Notifications from '@/components/preview/Notifications'
import Loaders from '@/components/preview/Loaders'
import Tooltips from '@/components/preview/Tooltips'
import Badges from '@/components/preview/Badges'
import Modals from '@/components/preview/Modals'
export default {
  name: 'App',
  components: {
    Modals,
    Badges,
    Loaders,
    Notifications,
    Cards,
    Buttons,
    Tooltips
  }
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
