import Lazy from './lazy'

export default {
  install (Vue, options = {}) {
    const LazyClass = Lazy(Vue)
    const lazy = new LazyClass(options)

    // const isVueNext = Vue.version.split('.'[0]) === '2'
    console.log('version', Vue.version)

    Vue.prototype.$lazyload = lazy
  }
}
