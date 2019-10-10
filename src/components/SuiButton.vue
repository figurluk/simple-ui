<template>
  <button class="" :class="btnClass" @click="onClick" @dblclick="onDoubleClick">
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
    },

    btnStyle: {
      type: String,
      default: 'primary'
    }
  },

  computed: {
    btnClass() {
      return (
        this.$suiComponents.SuiButton[this.btnStyle] +
        (this.rounded ? 'rounded' : '')
      )
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
