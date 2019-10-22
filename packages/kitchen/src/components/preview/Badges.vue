<template>
  <div class="w-full">
    <h1>SuiBadge</h1>

    <sui-badge :value="firstBadgeValue" />
    <div class="diveder"></div>
    <sui-badge :value="12" :kind="'primary'" />
    <div class="diveder"></div>
    <sui-badge :max="99" :value="100" :kind="'secondary'" />
    <div class="diveder"></div>

    <hr />
  </div>
</template>

<script>
import SuiBadge from '../../../../lib/src/components/SuiBadge/SuiBadge'
export default {
  name: 'Badges',

  components: { SuiBadge },

  data: () => ({
    firstBadgeValue: 7
  }),

  mounted() {
    setTimeout(() => {
      this.firstBadgeValue++
    }, 3000)
  }
}
</script>

<style scoped></style>
