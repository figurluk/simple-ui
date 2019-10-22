import config from './config.stub'
import SuiAvatar from './components/SuiAvatar.vue'
import SuiBadge from './components/SuiBadge.vue'
import SuiButton from './components/SuiButton.vue'
import SuiCard from './components/SuiCard.vue'
import SuiLoader from './components/SuiLoader.vue'
import SuiModal from './components/SuiModal.vue'
import SuiNotification from './components/SuiNotification.vue'
import SuiTextarea from './components/SuiTextarea.vue'
import SuiTooltip from './components/SuiTooltip.vue'

const Components = {
  SuiAvatar,
  SuiBadge,
  SuiButton,
  SuiCard,
  SuiLoader,
  SuiModal,
  SuiNotification,
  SuiTextarea,
  SuiTooltip
}

export function install(Vue, options) {
  Vue.prototype.$suiComponents = {}

  function setUsedComponent(component, config) {
    Vue.prototype.$suiComponents[component] = config[component]
    Vue.component(component, Components[component])
  }

  let usedConfig = config
  if (
    options != null &&
    Object.prototype.hasOwnProperty.call(options, 'config')
  ) {
    usedConfig = merge(config, options.config)
  }

  usedConfig.components.forEach(component => {
    setUsedComponent(component, usedConfig)
  })
}

// Merge a `source` object to a `target` recursively
const merge = (target, source) => {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      Object.assign(source[key], merge(target[key], source[key]))
    }
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source)
  return target
}
