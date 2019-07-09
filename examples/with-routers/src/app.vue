<template>
  <div id="app">
    <p>app.vue</p>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/posts/first">First Post</router-link> |
      <router-link to="/posts/100">Other Post</router-link>
    </div>
    <router-view/>
  </div>
</template>
