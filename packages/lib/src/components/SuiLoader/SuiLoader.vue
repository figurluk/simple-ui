<template>
  <div class="sui-loader" :class="loaderClass">
    <slot>
      <span class="sui-loader__loader fas fa-spin fa-spinner"></span>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'SuiLoader',

  props: {
    kind: {
      type: String,
      default: 'fullscreen'
    }
  },

  computed: {
    loaderClass() {
      return [this.$suiComponents.SuiLoader.style[this.kind]].join(' ')
    }
  }
}
</script>

<style lang="postcss" scoped>
.sui-loader {
  @apply flex;
}

.sui-loader__loader {
  @apply m-auto text-2xl;
}
</style>
