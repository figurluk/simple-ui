<template>
  <div
    class="flex items-center justify-center"
    :class="avatarClasses"
    :title="avatarTitle"
    @click="onClick"
    @dblclick="onDoubleClick"
  >
    <img
      :src="avatarUrl"
      :alt="avatarAlt"
      :class="avatarClasses"
      v-if="avatarUrl !== null && avatarUrl.length > 0"
    />
    <span class="leading-none select-none" :class="'text-' + avatarTextSize" v-else>
      <slot>?</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SuiAvatar',

  props: {
    rounded: {
      type: Boolean,
      default: false
    },

    avatarUrl: {
      type: String,
      default: ''
    },

    avatarAlt: {
      type: String,
      default: 'Avatar'
    },

    avatarTitle: {
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
        (this.rounded ? ' rounded-full' : '') +
        (' w-' + this.avatarSize) +
        (' h-' + this.avatarSize)
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
