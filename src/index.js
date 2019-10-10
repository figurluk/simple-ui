import SimpleUI from './framework'

export default SimpleUI

const install = SimpleUI.install

SimpleUI.install = (Vue, options) => {
  install.call(SimpleUI, Vue, options)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(SimpleUI)
}
