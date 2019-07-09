import * as util from './util'

export const createComponents = (vue, components) => {
  components
    .forEach(com => {
      if (!com.routerName.startsWith(util.getPrefix())) {
        com.routerName = `${util.getPrefix()}-${com.routerName}`
      }
      com.name = com.name || com.routerName
      vue.component(com.name, com)
    })
}

