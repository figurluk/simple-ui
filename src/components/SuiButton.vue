<template>
  <button
    class="sui-button"
    :class="btnClass"
    @click="onClick"
    @dblclick="onDoubleClick"
  >
    <slot>
      Default
    </slot>
    <slot name="loading">
      <transition name="slide-fade">
        <span v-if="loading" class="fas fa-spinner fa-spin ml-2"></span>
      </transition>
    </slot>
  </button>
</template>

<script>
export default {
  name: 'SuiButton',

  props: {
    kind: {
      type: String,
      default: 'default'
    },

    size: {
      type: String,
      default: 'md'
    },

    disabled: {
      type: Boolean,
      default: false
    },

    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    btnClass() {
      return [
        this.$suiComponents.SuiButton.style[this.kind],
        this.$suiComponents.SuiButton.style[this.size],
        this.disabled ? this.$suiComponents.SuiButton.style['disabled'] : ''
      ].join(' ')
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
  transition: background-color 200ms ease;
  will-change: background-color;
}
</style>
