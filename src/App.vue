<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="这里是iframe子应用" />
</template>

<style>
body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
}

html {
    height: 100%;
}

#app {
    height: 100%;
    padding: 0;
    margin: 0;
}
</style>
