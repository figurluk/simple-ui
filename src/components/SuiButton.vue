<template>
  <button
    class="sui-button"
    :class="btnClass"
    @click="onClick"
    @dblclick="onDoubleClick"
  >
    <slot>
      Button
    </slot>
  </button>
</template>

<script>
export default {
  name: 'SuiButton',

  props: {
    kind: {
      type: String,
      default: 'primary'
    }
  },

  computed: {
    btnClass() {
      return this.$suiComponents.SuiButton.style[this.kind]
    }
  },

  methods: {
    onClick(event) {
      this.$emit('click', event)
    },

    onDoubleClick(event) {
      this.$emit('dblclick', event)
    }
  }
}
</script>

<style lang="postcss" scoped>
.sui-button {
  @apply .px-4 .py-2 .text-sm;
}
</style>
