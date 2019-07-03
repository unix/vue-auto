# vue-auto
> use Vue in a simpler way.

`vue-auto` can help you inject all components automatically, It makes your project simpler, cleaner.

<br/>

### Features

- No Import.

- No `Vue.component`.

- No `component.name`.

- No `Router.component`.

<br/>

### Usage

1. install: `npm i vue-auto` or `yarn add vue-auto`.

2. create `components/` and `pages/` folder.

3. import to your `main.js`:

  ```js
  import Vue from 'vue'
  import { install } from 'vue-auto'
  
  install(Vue)
  ```

**Any component will be automatically injected into the global, you can also customize component prefixe.**

<br/>

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

- [micro project](https://github.com/unix/vue-auto/tree/master/examples/micro)

- [with-router-project](https://github.com/unix/vue-auto/tree/master/examples/with-routers)

<br/>

### LICENSE
[MIT](LICENSE)
