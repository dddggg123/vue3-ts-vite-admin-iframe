<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0);
const param = ref('');
const content = ref('主应用传递的信息:');

// 生产环境域名地址
const iframeSrc = 'http://www.xkxk.tech/micro/iframe';

onMounted(() => {
  window.addEventListener('message', (event) => {
    content.value = '主应用传递的信息:';
    content.value = content.value + event.data;
  })
})
// iframe向父应用发消息
const postMessageHandler = () => {
  // window.parent.postMessage(param.value, '*');
  window.parent.postMessage(param.value, iframeSrc);
}
</script>

<template>
  <div class="iframe-container">
    <p>{{ msg }}</p>
    <p>{{ content }}</p>
    <div class="tool-section">
      <input v-model="param" class="param-input" placeholder="输入传递信息" type="text">
      <button @click="postMessageHandler" class="param-btn">向主页面传值</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.iframe-container {
  height: 100%;
  overflow: hidden;

  .tool-section {
    display: flex;
    flex-direction: column;

    .param-input {
      width: 250px;
      padding: 5px;
    }

    .param-btn {
      width: 150px;
      margin-top: 20px;
      color: #fff;
      background-color: #79bbff;
      border: none;
      height: 30px;
      line-height: 30px;
      border-radius: 5px;
    }
  }
}
</style>
