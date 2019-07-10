import * as util from './util'
import * as router from './router'
import * as component from './component'

let pagesContext, componentsContext,
  notFoundPages = false,
  notFoundComponents = false
try {
  pagesContext = require.context('@/pages/', true, /\.vue$/)
} catch (error) {
  notFoundPages = true
}

try {
  componentsContext = require.context('@/components/', true, /\.vue$/)
} catch (error) {
  notFoundComponents = true
}

const getModules = (context, isPage) => context
  .keys()
  .map(path => {
    const getName = isPage ? util.getPageName : util.getComponentName
    return Object.assign(
      {},
      context(path).default,
      { routerName: getName(path) },
    )
  })

const components = !notFoundComponents ? getModules(componentsContext) : {}
const pages = !notFoundPages ? getModules(pagesContext, true) : {}

const install = (vue, options = {
  prefix: util.getPrefix(),
  mode: 'history',
  base: process.env.BASE_URL,
  autoRouter: true,
}) => {
  options = util.setDefaultOption(options)
  util.setPrefix(options.prefix)

  !notFoundComponents && component.createComponents(vue, components)
  !notFoundPages && component.createComponents(vue, pages)

  if (!options.autoRouter) return null
  return router.createRouter(vue, pages, pagesContext.keys(), {
    mode: options.mode,
    base: options.base,
  })
}

const withRouters = router.makeWithRouters(pages)

export {
  install,
  components,
  pages,
  withRouters,
}
