<template>
  <div class="w-full">
    <h1>SuiModal</h1>

    <div class="w-full">
      <sui-button @click="$refs.defaultModal.open()">
        Default modal
      </sui-button>

      <sui-modal ref="defaultModal"></sui-modal>
    </div>
    <div class="diveder"></div>

    <div class="w-full">
      <sui-button @click="$refs.largeModal.open()">
        Large modal
      </sui-button>

      <sui-modal :kind="'large'" ref="largeModal"></sui-modal>
    </div>
    <div class="diveder"></div>

    <div class="w-full">
      <sui-button @click="$refs.smallModal.open()">
        Small modal
      </sui-button>

      <sui-modal :kind="'small'" ref="smallModal"></sui-modal>
    </div>
    <div class="diveder"></div>

    <div class="w-full">
      <sui-button @click="$refs.fullModal.open()">
        Fullscreen modal
      </sui-button>

      <sui-modal :kind="'fullscreen'" ref="fullModal"></sui-modal>
    </div>
  </div>
</template>

<script>
import SuiButton from '@/components/SuiButton'
import SuiModal from '@/components/SuiModal'
export default {
  name: 'Modals',
  components: { SuiModal, SuiButton }
}
</script>

<style scoped></style>
