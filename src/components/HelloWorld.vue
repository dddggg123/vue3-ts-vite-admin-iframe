<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const content = ref('主应用传递的信息:');
onMounted(() => {
  window.addEventListener('message', (event) => {
    content.value = '主应用传递的信息:';
    content.value = content.value + event.data;
  })
})
</script>

<template>
  <div class="iframe-container">
    <p>{{ msg }}</p>
    <p>{{ content }}</p>
  </div>
</template>

<style lang="scss" scoped>
.iframe-container {
  height: 100%;
  overflow: hidden;
}
</style>
