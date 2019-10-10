import config from './config.stub'

export default {
  install(Vue, options) {
    Vue.prototype.$suiComponents = {}

    function setUsedComponent(component, config) {
      Vue.prototype.$suiComponents[component] = config[component]
      Vue.component(component, require('./components/' + component))
    }

    let usedConfig = config
    if (Object.prototype.hasOwnProperty.call(options, 'config')) {
      usedConfig = Object.assign({}, config, options.config)
    }

    usedConfig.components.forEach(component => {
      setUsedComponent(component, config)
    })
  }
}
