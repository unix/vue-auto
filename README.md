# vue-auto
> use Vue in a simpler way.


### Usage

1. install: `npm i vue-auto` or `yarn add vue-auto`.

2. import to your `main.js`:
```js
import Vue from 'vue'
import { install } from 'vue-auto'

install(Vue)
```

3. create `components/` and `pages/` folder.

**Any component will be automatically injected into the global, you can also customize component prefixe.**

#### with router:

```js
import Vue from 'vue'
import Router from 'vue-router'
import { withRouters } from 'vue-auto'
Vue.use(Router)

export default new Router({
  routes: withRouters([
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
  ])
})

```

<br/>

### Options

- `install: (vue: Vue, options: { prefix: string }) => void`

- `withRouter: (Array<VueRoute>) => Routers`

<br/>

### Examples

- [more]()

<br/>

### LICENSE
[MIT](LICENSE)
