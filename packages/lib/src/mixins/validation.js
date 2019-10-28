export default {
  props: {
    rules: {
      type: Array,
      default: () => []
    },
    value: {
      required: true
    }
  },

  watch: {
    rules: {
      handler() {
        this.validate()
      },
      deep: true
    },

    value(val) {
      this.internalValue = val
    }
  },

  data: () => ({
    errorBucket: [],
    internalValue: null,
    valid: false
  }),

  mounted() {
    this.internalValue = this.value
  },

  methods: {
    onInput($event) {
      this.internalValue = $event.target.value
      this.$emit('input', this.internalValue)
      this.validate()
    },

    validate() {
      const errorBucket = []

      this.rules.forEach(rule => {
        const valid =
          typeof rule === 'function' ? rule(this.internalValue) : rule

        if (typeof valid === 'string') {
          errorBucket.push(valid)
        } else if (typeof valid !== 'boolean') {
          // eslint-disable-next-line no-console
          console.error(
            `Rules should return a string or boolean, received '${typeof valid}' instead`,
            this
          )
        }
      })

      this.errorBucket = errorBucket
      this.valid = errorBucket.length === 0

      return this.valid
    }
  }
}
