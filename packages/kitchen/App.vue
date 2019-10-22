<template>
  <div id="app" class="p-12">
    <Buttons />
    <Cards />
    <Notifications />
    <Loaders />
    <Tooltips />
    <Badges />
    <Modals />
    <TextAreas />
  </div>
</template>

<script>
import Buttons from './src/components/preview/Buttons'
import Cards from './src/components/preview/Cards'
import Notifications from './src/components/preview/Notifications'
import Loaders from './src/components/preview/Loaders'
import Tooltips from './src/components/preview/Tooltips'
import Badges from './src/components/preview/Badges'
import Modals from './src/components/preview/Modals'
import TextAreas from './src/components/preview/TextAreas'
export default {
  name: 'App',
  components: {
    TextAreas,
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
