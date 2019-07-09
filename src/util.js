export const dynamicRouterReg = /^\[(\S+)]$/
export const pagePrefix = 'pages'
let defaultPrefix = 'auto'

export const getPrefix = () => defaultPrefix

export const setPrefix = (prefix = defaultPrefix) => {
  defaultPrefix = prefix
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

