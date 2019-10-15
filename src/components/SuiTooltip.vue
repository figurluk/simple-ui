<template>
  <div class="sui-tooltip">
    <transition :name="animation">
      <div
        v-if="!hidden"
        class="sui-tooltip__content"
        :class="tooltipContentClasses"
      >
        <slot>
          Default top
        </slot>
      </div>
    </transition>
    <div class="sui-tooltip__activator" :class="tooltipActivatorClass">
      <slot name="activator">
        <span class="w-4 h-4 fas fa-question-circle"></span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuiTooltip',

  props: {
    kind: {
      type: String,
      default: 'default'
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'right', 'bottom', 'left'].indexOf(value) !== -1
      }
    },
    animation: {
      type: String,
      default: 'fade'
    },
    thresholdOffset: {
      type: Number,
      default: 200
    }
  },

  data: () => ({
    hidden: true,
    usedPosition: 'top'
  }),

  computed: {
    tooltipContentClasses() {
      return [
        this.$suiComponents.SuiTooltip.style[this.kind].content,
        'sui-tooltip--' + this.usedPosition
      ].join(' ')
    },

    tooltipActivatorClass() {
      return this.$suiComponents.SuiTooltip.style[this.kind].activator
    }
  },

  mounted() {
    this.usedPosition = this.position
    this.controlTooltipPosition()
    this.$el
      .querySelector('.sui-tooltip__activator')
      .addEventListener('mouseenter', this.toggleTooltip)
    this.$el
      .querySelector('.sui-tooltip__activator')
      .addEventListener('mouseleave', this.toggleTooltip)
  },

  destroyed() {
    this.$el
      .querySelector('.sui-tooltip__activator')
      .removeEventListener('mouseenter', this.toggleTooltip)
    this.$el
      .querySelector('.sui-tooltip__activator')
      .removeEventListener('mouseleave', this.toggleTooltip)
  },

  methods: {
    controlTooltipPosition() {
      const offset = this.$el.getBoundingClientRect()
      if (this.position === 'top') {
        if (offset.top < this.thresholdOffset) {
          this.usedPosition = 'bottom'
        } else {
          this.usedPosition = 'top'
        }
      }

      if (this.position === 'bottom') {
        if (window.innerHeight - offset.bottom < this.thresholdOffset) {
          this.usedPosition = 'top'
        } else {
          this.usedPosition = 'bottom'
        }
      }

      if (this.position === 'left') {
        if (offset.left < this.thresholdOffset) {
          this.usedPosition = 'right'
        } else {
          this.usedPosition = 'left'
        }
      }

      if (this.position === 'right') {
        if (window.innerWidth - offset.right < this.thresholdOffset) {
          this.usedPosition = 'left'
        } else {
          this.usedPosition = 'right'
        }
      }
      // eslint-disable-next-line no-console
      console.log(offset, window.innerHeight, window.innerWidth)
    },
    toggleTooltip() {
      this.controlTooltipPosition()
      this.hidden = !this.hidden
    }
  }
}
</script>

<style lang="postcss" scoped>
.sui-tooltip {
  @apply relative inline-block;
}

.sui-tooltip__content {
  @apply absolute z-10 bg-white;

  &::before {
    @apply .bg-white .absolute;
    content: ' ';
    width: 0.625rem;
    height: 0.625rem;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
}

.sui-tooltip__activator {
  @apply inline-block;
}

.sui-tooltip--top {
  @apply left-0;
  bottom: 2rem;

  &::before {
    left: 0.1rem;
    bottom: -0.3rem;
  }
}
.sui-tooltip--left {
  @apply top-0;
  right: 2rem;
  min-width: 7rem;

  &::before {
    right: -0.3rem;
    top: 0.1rem;
  }
}
.sui-tooltip--right {
  @apply top-0;
  left: 2rem;
  max-width: 8rem;

  &::before {
    height: 0;
    width: 0;
    content: '';
  }
}
.sui-tooltip--bottom {
  @apply left-0;
  top: 2rem;

  &::before {
    left: 0.2rem;
    top: -0.325rem;
  }
}
</style>
