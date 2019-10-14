<template>
  <div class="sui-card">
    <div class="sui-card__header" :class="headerClass">
      <slot name="header" v-bind:kind="kind">Header</slot>
    </div>
    <div class="sui-card__body" :class="bodyClass">
      <slot name="body" v-bind:kind="kind">Body</slot>
    </div>
    <div class="sui-card__footer" :class="footerClass">
      <slot name="footer" v-bind:kind="kind">Footer</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuiCard',

  props: {
    kind: {
      type: String,
      default: 'default'
    }
  },

  computed: {
    headerClass() {
      return this.$suiComponents.SuiCard.style[this.kind].header
    },

    bodyClass() {
      return this.$suiComponents.SuiCard.style[this.kind].body
    },

    footerClass() {
      return this.$suiComponents.SuiCard.style[this.kind].footer
    }
  }
}
</script>

<style lang="postcss" scoped>
.sui-card {
  @apply bg-white shadow-xl max-w-md;

  .sui-card__header {
    @apply px-6 pt-6 pb-2;
  }

  .sui-card__body {
    @apply px-6 py-4;
  }

  .sui-card__footer {
    @apply px-6 pt-2 pb-3;
  }
}
</style>
