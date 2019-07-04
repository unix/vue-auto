let pagesContext, componentsContext, notFoundPages = false, notFoundComponents = false
try {
  pagesContext = require.context('@/pages/', true, /\.vue$/)
} catch (e) {
  notFoundPages = true
}

try {
  componentsContext = require.context('@/components/', true, /\.vue$/)
} catch (e) {
  notFoundComponents = true
}

const getComponentName = p => {
  const name = p.replace('.vue', '').split('/').slice(-1)[0]
  return name.replace(/_/g, '-')
}

const getModules = (context) => context
  .keys()
  .map((path) => Object.assign(
    {},
    context(path).default,
    { routerName: getComponentName(path).toLowerCase() },
  ))
const initModules = (vue, modules, prefix) => modules
  .forEach((com) => {
    com.name = com.name || `${prefix}-${com.routerName}`
    vue.component(com.name, com)
  })

const components = !notFoundComponents ? getModules(componentsContext) : {}
const pages = !notFoundPages ? getModules(pagesContext) : {}

const withRouters = (routers) => routers
  .map(r => {
    if (r.component && (typeof r.component !== 'string')) return r
    if (r.children) r.children = withRouters(r.children)
    
    const name = r.name || r.component
    if (!name) return r
    
    const ident = name.toLowerCase()
    const instance = pages.find(item => item.routerName === ident)
    if (!instance) {
      console.error(`Router: No route matching ${r.name} was found.`)
    }
    r.component = instance
    
    return r
  })

const install = (vue, options = {}) => {
  const prefix = options.prefix || 'auto'
  !notFoundComponents && initModules(vue, components, prefix)
  !notFoundPages && initModules(vue, pages, prefix)
}

export {
  install,
  components,
  pages,
  withRouters,
}

