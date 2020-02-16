export const dynamicRouterReg = /^\[(\S+)]$/
export const pagePrefix = 'pages'
let defaultPrefix = 'auto'

export const getPrefix = () => defaultPrefix

export const setPrefix = (prefix = defaultPrefix) => {
  defaultPrefix = prefix
}

export const setDefaultOption = options => {
  options.prefix = options.prefix || getPrefix()
  options.mode = options.mode || 'history'
  options.base = options.base || process.env.BASE_URL
  if (options.autoRouter === undefined) {
    options.autoRouter = true
  }

  if (options.routes && !Array.isArray(options.routes)) {
    throw new Error('vue-auto: options.routes must be an array.')
  }
  options.routes = options.routes || []
  return options
}

export const getComponentName = path => {
  return `${defaultPrefix}-${pathToParams(path).reverse()[0]}`.toLowerCase()
}

export const getPageName = path => {
  const componentName = pathToParams(path)
    .map(name => {
      if (!dynamicRouterReg.test(name)) return name
      return name.match(dynamicRouterReg)[1] || name
    })
    .join('-')
  return `${pagePrefix}-${componentName.toLowerCase()}`
}

export const pathToParams = path => {
  path = path
    .replace('.vue', '')
    .replace(/_/g, '-')

  return path
    .split('/')
    .filter(name => name !== '.')
}

