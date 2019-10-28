<template>
  <div
    class="flex items-center justify-center overflow-hidden"
    :class="avatarClasses"
  >
    <img
      :src="avatarUrl"
      :alt="avatarAlt"
      :class="avatarClasses"
      v-if="!avatarUrl"
    />
    <span
      class="leading-none select-none"
      :class="'text-' + avatarTextSize"
      v-else
    >
      <slot>?</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SuiAvatar',

  props: {
    avatarUrl: {
      type: String,
      default: ''
    },

    avatarAlt: {
      type: String,
      default: 'Avatar'
    },

    avatarStyle: {
      type: String,
      default: 'default'
    },

    avatarTextSize: {
      type: String,
      default: 'lg'
    },

    avatarSize: {
      type: String,
      default: '16'
    }
  },

  computed: {
    avatarClasses() {
      return (
        this.$suiComponents.SuiAvatar.style[this.avatarStyle] +
        (' w-' + this.avatarSize) +
        (' h-' + this.avatarSize)
      )
    }
  }
}
</script>
