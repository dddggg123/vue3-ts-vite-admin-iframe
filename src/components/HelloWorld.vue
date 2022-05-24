<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
onMounted(() => {
  window.addEventListener('message', (event) => {
    console.log('我执行了');
    // let data = event.data;
    // console.log('传递的信息:' + JSON.stringify(data));
  })
})
</script>

<template>
  <div class="iframe-container">
    <p>{{ msg }}</p>
  </div>
</template>

<style lang="scss" scoped>
.iframe-container {
  height: 100%;
  overflow: hidden;
}
</style>
