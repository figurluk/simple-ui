export default {
  components: [
    'SuiAvatar',
    'SuiBadge',
    'SuiButton',
    'SuiCard',
    'SuiLoader',
    'SuiModal',
    'SuiNotification',
    'SuiTextarea',
    'SuiTooltip'
  ],
  SuiAvatar: {
    style: {
      default: 'bg-green-400 text-white'
    }
  },
  SuiBadge: {
    style: {
      default:
        'w-6 h-6 bg-gray-200 rounded-full text-xs font-medium text-gray-900',
      primary:
        'w-6 h-6 bg-green-400 text-white rounded-full text-xs font-medium',
      secondary:
        'w-6 h-6 bg-indigo-400 text-white rounded-full text-xs font-medium'
    }
  },
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
  SuiCard: {
    style: {
      default: {
        header: 'border-b-2 border-gray-200',
        body: 'text-gray-900',
        footer: 'text-sm bg-gray-100'
      },
      primary: {
        header: 'border-b-2 border-green-200',
        body: 'text-gray-900',
        footer: 'text-sm bg-gray-100'
      },
      secondary: {
        header: 'border-b-2 border-indigo-200',
        body: 'text-gray-900',
        footer: 'text-sm bg-gray-100'
      }
    }
  },
  SuiLoader: {
    style: {
      fullscreen: 'fixed inset-0 bg-sui-loader text-gray-900',
      element: 'absolute w-full h-full bg-sui-loader text-gray-900'
    }
  },
  SuiModal: {
    style: {
      fullscreen: 'min-w-screen min-h-screen',
      large: 'max-w-2xl items-center',
      default: 'max-w-lg items-center',
      small: 'max-w-sm items-center',
      header: 'text-lg border border-gray-200',
      footer: 'bg-gray-100 text-sm'
    }
  },
  SuiNotification: {
    style: {
      default:
        'p-4 border-l-4 border-gray-200 shadow-lg text-gray-900 hover:shadow-xl',
      primary:
        'p-4 border-l-4 border-green-200 shadow-lg text-gray-900 hover:shadow-xl',
      secondary:
        'p-4 border-l-4 border-indigo-200 shadow-lg text-gray-900 hover:shadow-xl',
      success:
        'p-4 border-l-4 border-green-500 shadow-lg text-gray-900 hover:shadow-xl',
      warning:
        'p-4 border-l-4 border-orange-500 shadow-lg text-gray-900 hover:shadow-xl',
      error:
        'p-4 border-l-4 border-red-600 shadow-lg text-gray-900 hover:shadow-xl',
      closer: 'absolute right-3 top-3 w-4 h-4 text-gray-900'
    }
  },
  SuiTextarea: {
    style: {
      textarea: 'border border-gray-200',
      helper: 'text-gray-400 text-sm',
      error: 'text-red-500 text-sm'
    }
  },
  SuiTooltip: {
    style: {
      default: {
        content: 'py-2 px-3 border-l-4 border-gray-200 shadow-lg',
        activator: 'text-gray-900'
      },
      primary: {
        content: 'py-2 px-3 border-l-4 border-green-200 shadow-lg',
        activator: 'text-gray-900'
      },
      secondary: {
        content: 'py-2 px-3 border-l-4 border-indigo-200 shadow-lg',
        activator: 'text-gray-900'
      }
    }
  }
}
