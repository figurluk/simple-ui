<template>
  <div class="relative">
    <textarea
      class="sui-textarea"
      :class="textareaClasses"
      :cols="cols"
      :rows="rows"
      :placeholder="placeholder"
      :name="name"
      :value="internalValue"
      @input="onInput"
    ></textarea>
    <div :class="helperClasses">
      <slot v-if="helperText !== null" name="helper-text">
        <span>{{ helperText }}</span>
      </slot>
    </div>
    <div :class="errorClasses">
      <slot v-if="errorBucket.length !== 0" name="errors">
        <span v-for="(error, index) in errorBucket" :key="index">
          {{ error }}
        </span>
      </slot>
    </div>
  </div>
</template>

<script>
import validation from '@/mixins/validation'

export default {
  name: 'SuiTextarea',

  props: {
    value: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    cols: {
      type: Number,
      default: 30
    },
    rows: {
      type: Number,
      default: 10
    },
    counter: {
      type: Number,
      default: null
    },
    helperText: {
      type: String,
      default: null
    }
  },

  mixins: [validation],

  computed: {
    errorClasses() {
      return this.$suiComponents.SuiTextarea.style.error
    },

    helperClasses() {
      return this.$suiComponents.SuiTextarea.style.helper
    },

    textareaClasses() {
      return this.$suiComponents.SuiTextarea.style.textarea
    }
  }
}
</script>

<style lang="postcss" scoped>
.sui-textarea {
  @apply .resize-y;
}
</style>
