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

### Automation

  - Auto import `Component`:

    You created a component file:
    ```
    // hello.vue
    <template> <p>hello</p> <template>
    ```
    It can be used anywhere:
    ```
    <auto-hello>
    ```

<br/>

  - Auto set `router`

    File `pages/home.vue` == router `/home`:
    ```
    // pages/home.vue
    <template> <p>home</p> <template>
    ```

    File `pages/posts/[id].vue` == router `/posts/20`:
    ```
    // pages/posts/[id].vue
    <template> 
      <p>This is a dynamic route, {{ $route.params.id }}</p> 
    <template>
    ```
  It's easy.

<br/>

### Usage

1. install: `npm i vue-auto`.

2. create `components/` and `pages/` folder.

3. import to your `main.js`:

  ```js
  import Vue from 'vue'
  import { install } from 'vue-auto'
  
  const router = install(Vue, { prefix: 'my' })
  new Vue({
    router,
    render: h => h(app),
  }).$mount('#app')
  ```

**Any component will be automatically injected into the global, you can also customize component prefixe.**

<br/>

### Guide

> Please complete the init in step [Usage](#Usage) first.

  - Components:
    - use `my-{filename}` in anywhere.
    - prefixe can be modified in `options.prefix`, default is `auto`.
    - any component can refer to each other.

  - Routers:
    - files under folder `pages` will automatically be routed.
    - get router `/about` == create file `/pages/about.vue`.
    - get router `/posts/:id` == create file `/posts/[id].vue`.
    - get router `/pages/first` == create file `/posts/first.vue`. (static routes take precedence over dynamic routes)

<br/>

### Options

Here are the `options` of `install(vue, options)`

| name | type | description | default | example |
|---|---|---|---|---|
| prefix | `string` | custom component prefix | `auto` | `my` |
| autoRouter | `boolean` | auto inject router | `true` | - |
| mode | `string` | h5 router mode | `history` | - |
| base | `string` | router base | `process.env.BASE_URL` | - |

<br/>

### Examples

- [micro project](https://github.com/unix/vue-auto/tree/master/examples/micro)

- [with-router-project](https://github.com/unix/vue-auto/tree/master/examples/with-routers)

<br/>

### LICENSE
[MIT](LICENSE)
