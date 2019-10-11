export default {
  components: ['SuiButton', 'SuiAvatar'],
  SuiButton: {
    style: {
      lg: 'px-6 py-4 text-lg tracking-wide',
      md: 'px-4 py-3 tracking-wide',
      sm: 'px-3 py-2 text-sm tracking-wide',
      disabled: 'opacity-50 cursor-not-allowed',
      default: 'bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400',
      primary: 'bg-green-400 text-white hover:bg-green-500 active:bg-green-600',
      secondary:
        'bg-indigo-400 text-white hover:bg-indigo-500 active:bg-indigo-600'
    }
  },
  SuiAvatar: {
    style: {
      default: 'bg-green-400 text-white'
    }
  }
}
