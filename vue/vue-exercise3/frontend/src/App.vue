<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <router-link class="m-2" to="/subscriptions">Subscriptions</router-link>
        <router-link class="m-2" to="/subscribe"> Subscribe</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>
