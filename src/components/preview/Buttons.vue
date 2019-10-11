<template>
  <div class="w-full">
    <h1>SuiButton</h1>

    <SuiButton :size="'sm'" />
    <SuiButton :size="'sm'" :kind="'primary'">
      Primary
    </SuiButton>
    <SuiButton :size="'sm'" :kind="'secondary'">
      Secondary
    </SuiButton>
    <div class="diveder"></div>
    <SuiButton />
    <SuiButton :kind="'primary'">
      Primary
    </SuiButton>
    <SuiButton :kind="'secondary'">Secondary</SuiButton>
    <div class="diveder"></div>
    <SuiButton :size="'lg'" />
    <SuiButton :size="'lg'" :kind="'primary'">
      Primary
    </SuiButton>
    <SuiButton :size="'lg'" :kind="'secondary'">
      Secondary
    </SuiButton>
    <div class="diveder"></div>
    <SuiButton :loading="true" />
    <SuiButton :loading="true" :kind="'primary'">
      Primary
    </SuiButton>
    <SuiButton :loading="true" :kind="'secondary'">
      Secondary
    </SuiButton>
    <div class="diveder"></div>
    <SuiButton :disabled="true" />
    <SuiButton :disabled="true" :kind="'primary'">
      Primary
    </SuiButton>
    <SuiButton :disabled="true" :kind="'secondary'">Secondary</SuiButton>
    <hr />
  </div>
</template>

<script>
import SuiButton from '@/components/SuiButton'
export default {
  name: 'Buttons',

  components: {
    SuiButton
  }
}
</script>

<style scoped></style>
