<template>
  <button @click="onClick" @dblclick="onDoubleClick">
    <slot>
      Button
    </slot>
  </button>
</template>

<script>
export default {
  name: 'SuiButton',

  props: {
    rounded: {
      type: Boolean,
      default: false
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

<style lang="postcss" scoped></style>
