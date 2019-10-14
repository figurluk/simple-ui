<template>
  <transition :name="animation">
    <div v-if="!hidden" class="sui-notification" :class="notificationClass">
      <slot>Default</slot>
      <slot name="closer" v-if="closeable" v-bind:closerClass="closerClass">
        <div class="sui-notification__closer" :class="closerClass"></div>
      </slot>
      <audio ref="audioEle" v-if="initSound">
        <source
          v-if="soundSources.mp3 != null"
          :src="soundSources.mp3"
          type="audio/mpeg"
        />
        <source
          v-if="soundSources.ogg != null"
          :src="soundSources.ogg"
          type="audio/ogg"
        />
      </audio>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SuiNotification',

  props: {
    kind: {
      type: String,
      default: 'default'
    },

    closeable: {
      type: Boolean,
      default: false
    },

    autoclose: {
      type: [Number, null],
      default: null
    },

    animation: {
      type: String,
      default: 'fade'
    },

    initSound: {
      type: Boolean,
      default: true
    },

    soundSources: {
      type: Object,
      default: () => ({
        mp3: require('../assets/sounds/beyond-doubt.mp3'),
        off: require('../assets/sounds/beyond-doubt.ogg')
      })
    }
  },

  computed: {
    notificationClass() {
      return [this.$suiComponents.SuiNotification.style[this.kind]].join(' ')
    },

    closerClass() {
      return [this.$suiComponents.SuiNotification.style.closer].join(' ')
    }
  },

  data: () => ({
    hidden: true
  }),

  mounted() {
    this.hidden = false

    this.$nextTick(() => {
      if (this.initSound) {
        try {
          const promise = this.$refs.audioEle.play()
          promise.catch(e => {
            // eslint-disable-next-line no-console
            console.error(e)
          })
        } catch (e) {
          // eslint-disable-next-line no-console
          console.warn('Your browser does not support Audio API', e)
        }
      }

      if (this.closeable) {
        this.$el
          .querySelector('.sui-notification__closer')
          .addEventListener('click', this.closeNotification)

        if (this.autoclose !== null) {
          setTimeout(this.closeNotification, this.autoclose)
        }
      }
    })
  },

  destroyed() {
    if (this.closeable) {
      this.$el
        .querySelector('.sui-notification__closer')
        .removeEventListener('click', this.closeNotification)
    }
  },

  methods: {
    closeNotification() {
      this.hidden = true
    }
  }
}
</script>

<style lang="postcss" scoped>
.sui-notification {
  @apply relative max-w-sm;
  transition: box-shadow 200ms ease;
  will-change: box-shadow;
}

.sui-notification__closer {
  @apply cursor-pointer bg-cover bg-no-repeat bg-center;
  background-image: url('../assets/images/x.svg');
}
</style>
