// Used to create imports for vue component library
import * as components from '@/components'

const install = (Vue, options = {}) => {
  // Use Components
  Object.values(components).forEach((comp) => {
    Vue.use(comp)
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }

export * from '@/components'
