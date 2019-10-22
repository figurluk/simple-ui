<template>
  <div class="w-full">
    <h1>SuiTooltip</h1>

    <sui-tooltip />
    <div class="diveder"></div>
    <sui-tooltip :kind="'primary'">Primary top</sui-tooltip>
    <div class="diveder"></div>
    <sui-tooltip :kind="'secondary'">Secondary top</sui-tooltip>
    <div class="diveder"></div>
    <div class="diveder"></div>

    <div class="w-full flex">
      <sui-tooltip class="ml-auto" :position="'left'">Default left</sui-tooltip>
    </div>
    <div class="diveder"></div>
    <div class="w-full pr-32 flex">
      <sui-tooltip class="ml-auto" :position="'left'" :kind="'primary'">
        Primary left
      </sui-tooltip>
    </div>
    <div class="diveder"></div>
    <div class="w-full pr-32 flex">
      <sui-tooltip class="ml-auto" :position="'left'" :kind="'secondary'">
        Secondary left
      </sui-tooltip>
    </div>
    <div class="diveder"></div>
    <div class="diveder"></div>

    <sui-tooltip :position="'right'">Default right</sui-tooltip>
    <div class="diveder"></div>
    <sui-tooltip :position="'right'" :kind="'primary'">
      Primary right
    </sui-tooltip>
    <div class="diveder"></div>
    <sui-tooltip :position="'right'" :kind="'secondary'">
      Secondary right
    </sui-tooltip>
    <div class="diveder"></div>
    <div class="diveder"></div>

    <sui-tooltip :position="'bottom'">Default bottom</sui-tooltip>
    <div class="diveder"></div>
    <sui-tooltip :position="'bottom'" :kind="'primary'">
      Primary bottom
    </sui-tooltip>
    <div class="diveder"></div>
    <sui-tooltip :position="'bottom'" :kind="'secondary'">
      Secondary bottom
    </sui-tooltip>
    <div class="diveder"></div>
    <hr />
  </div>
</template>

<script>
import SuiTooltip from '../../../../lib/src/components/SuiTooltip/SuiTooltip'
export default {
  name: 'Tooltips',
  components: { SuiTooltip }
}
</script>

<style lang="postcss" scoped></style>
