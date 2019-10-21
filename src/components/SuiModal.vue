<template>
  <transition :name="animation">
    <div
      v-show="visible"
      class="sui-modal__backdrop"
      :class="{
        'sm:items-center': kind !== 'fullscreen'
      }"
      @click.prevent.stop="close()"
    >
      <div
        v-show="visible"
        class="sui-modal"
        :class="modalClasses"
        role="dialog"
        :aria-labelledby="'modal-title-' + _uid"
        :aria-describedby="'modal-description-' + _uid"
        @click.stop
      >
        <div class="w-full flex-grow">
          <header
            v-if="header"
            :id="'modal-title-' + _uid"
            class="sui-modal__header"
            :class="headerClasses"
          >
            <slot name="header">
              Default title
              <button type="button" class="sui-modal__btn-close">
                <span class="fas fa-times"></span>
              </button>
            </slot>
          </header>
          <section
            :id="'modal-description-' + _uid"
            class="sui-modal__body text-h7 sm:text-menu"
          >
            <slot name="body">
              Default body
            </slot>
          </section>
        </div>
        <footer v-if="footer" class="sui-modal__footer" :class="footerClasses">
          <slot name="footer">
            Default footer
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SuiModal',

  props: {
    kind: {
      type: String,
      default: 'default'
    },
    header: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    },
    animation: {
      type: String,
      default: 'fade-fast'
    }
  },

  data: () => ({
    visible: false
  }),

  computed: {
    modalClasses() {
      return this.$suiComponents.SuiModal.style[this.kind]
    },
    footerClasses() {
      return this.$suiComponents.SuiModal.style.footer
    },
    headerClasses() {
      return this.$suiComponents.SuiModal.style.header
    }
  },

  methods: {
    open() {
      this.visible = true
      document.querySelector('body').classList.add('sui-modal-opened')
      this.$emit('opened')
    },
    close() {
      this.visible = false
      document.querySelector('body').classList.remove('sui-modal-opened')
      this.$emit('closed')
    }
  },

  mounted() {
    this.$el
      .querySelector('.sui-modal__btn-close')
      .addEventListener('click', this.close)
  },

  destroyed() {
    this.$el
      .querySelector('.sui-modal__btn-close')
      .removeEventListener('click', this.close)
  }
}
</script>

<style lang="postcss" scoped>
.sui-modal__backdrop {
  @apply w-screen h-screen fixed flex justify-center top-0 left-0 overflow-y-auto;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99999;
  transition: all 0.3s ease-in;
}

.sui-modal {
  @apply bg-white shadow-lg w-full flex flex-col items-start;
}

.sui-modal__header {
  @apply py-6 px-8 relative;
}

.sui-modal__btn-close {
  @apply absolute right-3 top-3 outline-none;
}

.sui-modal__body {
  @apply py-6 px-8 w-full;
}

.sui-modal__footer {
  @apply py-6 px-8 w-full;
}
</style>
