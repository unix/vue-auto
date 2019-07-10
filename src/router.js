import Router from 'vue-router'
import * as util from './util'

let pages = []
export const makeWithRouters = p => {
  pages = p
  return withRouters
}

const withRouters = routers => routers
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

export const createRouter = (vue, pages, pageContexts, routerOptions) => {
  let routes = []
  pageContexts
    .sort(a => util.dynamicRouterReg.test(a) ? 1 : -1)
    .forEach(path => {
      routes = appendRouter(path, routes, pages)
    })
  vue.use(Router)
  return new Router({
    routes,
    mode: routerOptions.mode,
    base: routerOptions.base,
  })
}

const makeRouter = (path, routerPath, pages) => {
  const instance = pages.find(item => item.name === util.getPageName(path))
  return {
    path: `/${routerPath}`,
    component: instance,
  }
}

const appendRouter = (path, routes, pages) => {
  const params = util.pathToParams(path)
  const routerPath = params
    .map(name => {
      if (!util.dynamicRouterReg.test(name)) return name
      return `:${name.match(util.dynamicRouterReg)[1]}` || name
    })
    .join('/')

  const exist = routes.find(item => item.path === routerPath)
  if (exist) return routes
  return routes.concat([makeRouter(path, routerPath, pages)])
}
