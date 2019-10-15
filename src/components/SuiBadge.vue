<template>
  <div
    class="sui-badge"
    :class="[badgeClass, { 'sui-badge--change-value-animation': valueChanged }]"
  >
    <div class="sui-badge__content">
      <slot v-bind:value="viewedValue">{{ viewedValue }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuiBadge',

  props: {
    kind: {
      type: String,
      default: 'default'
    },
    max: {
      type: Number,
      default: 9
    },
    value: {
      type: Number,
      required: true
    },
    changeAnimation: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    valueChanged: false
  }),

  watch: {
    value(newVal, oldVal) {
      const oldValBiggerThanMax = oldVal > this.max
      const newValBiggerThanMax = newVal > this.max
      if (
        this.changeAnimation &&
        !(oldValBiggerThanMax && newValBiggerThanMax)
      ) {
        this.valueChanged = true
        setTimeout(() => {
          this.valueChanged = false
        }, 1000)
      }
    }
  },

  computed: {
    badgeClass() {
      return this.$suiComponents.SuiBadge.style[this.kind]
    },

    viewedValue() {
      return this.value > this.max ? this.max + '+' : String(this.value)
    }
  }
}
</script>

<style lang="postcss" scoped>
.sui-badge {
  @apply flex;
}
.sui-badge__content {
  @apply m-auto;
}

@keyframes sui-badge-bounce {
  0% {
    transform: scale(1, 1) translate3d(0, 0, 0);
  }
  10% {
    transform: scale(1.15, 0.85) translate3d(0, 0, 0);
  }
  30% {
    transform: scale(0.9, 1.1) translate3d(0, -40%, 0);
  }
  50% {
    transform: scale(1.05, 0.95) translate3d(0, 0, 0);
  }
  60% {
    transform: scale(0.95, 1.05) translate3d(0, -15%, 0);
  }
  70% {
    transform: scale(1.02, 0.98) translate3d(0, 0, 0);
  }
  75% {
    transform: scale(1, 1) translate3d(0, 0, 0);
  }
  100% {
    transform: scale(1, 1) translate3d(0, 0, 0);
  }
}

.sui-badge--change-value-animation {
  animation-duration: 1000ms;
  animation-iteration-count: 1;
  animation-name: sui-badge-bounce;
  animation-timing-function: ease;
  transform-origin: bottom;
}
</style>
