import Toast from './toast'

const version = '0.0.1'
const install = function (Vue) {
  if (install.installed) return
  Vue.$toast = Vue.prototype.$toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  version,
  Toast
}
