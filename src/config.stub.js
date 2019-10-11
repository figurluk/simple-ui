export default {
  components: ['SuiButton', 'SuiAvatar', 'SuiCard'],
  SuiButton: {
    style: {
      lg: 'px-6 py-4 text-lg tracking-wide',
      md: 'px-4 py-3 tracking-wide',
      sm: 'px-3 py-2 text-sm tracking-wide',
      disabled: 'opacity-50 cursor-not-allowed',
      default:
        'bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400 active:shadow-inner',
      primary:
        'bg-green-400 text-white hover:bg-green-500 active:bg-green-600 active:shadow-inner',
      secondary:
        'bg-indigo-400 text-white hover:bg-indigo-500 active:bg-indigo-600 active:shadow-inner'
    }
  },
  SuiAvatar: {
    style: {
      default: 'bg-green-400 text-white'
    }
  },
  SuiCard: {
    style: {
      default: {
        header: 'border-b-2 border-gray-200',
        body: '',
        footer: 'text-sm bg-gray-100'
      },
      primary: {
        header: 'border-b-2 border-green-200',
        body: '',
        footer: 'text-sm bg-gray-100'
      },
      secondary: {
        header: 'border-b-2 border-indigo-200',
        body: '',
        footer: 'text-sm bg-gray-100'
      }
    }
  }
}
