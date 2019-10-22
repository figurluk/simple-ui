<template>
  <div class="w-full">
    <h1>SuiNotification</h1>

    <sui-notification />
    <div class="diveder"></div>
    <sui-notification :closeable="true" :init-sound="false" />
    <div class="diveder"></div>

    <sui-notification :kind="'primary'" :init-sound="false"
      >Primary</sui-notification
    >
    <div class="diveder"></div>

    <sui-notification :kind="'primary'" :init-sound="false" :closeable="true"
      >Primary</sui-notification
    >
    <div class="diveder"></div>

    <sui-notification :kind="'secondary'" :init-sound="false"
      >Secondary</sui-notification
    >
    <div class="diveder"></div>

    <sui-notification :kind="'secondary'" :init-sound="false" :closeable="true"
      >Secondary</sui-notification
    >
    <div class="diveder"></div>

    <sui-notification :kind="'success'" :init-sound="false"
      >Success</sui-notification
    >
    <div class="diveder"></div>

    <sui-notification :kind="'success'" :init-sound="false" :closeable="true"
      >Success</sui-notification
    >
    <div class="diveder"></div>

    <sui-notification :kind="'warning'" :init-sound="false"
      >Warning</sui-notification
    >
    <div class="diveder"></div>

    <sui-notification :kind="'warning'" :init-sound="false" :closeable="true"
      >Warning</sui-notification
    >
    <div class="diveder"></div>

    <sui-notification :kind="'error'" :init-sound="false"
      >Error</sui-notification
    >
    <div class="diveder"></div>

    <sui-notification :kind="'error'" :init-sound="false" :closeable="true"
      >Error</sui-notification
    >
    <div class="diveder"></div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'Notifications'
}
</script>

<style scoped></style>
