<template>
  <m-button type="primary" v-loading.screen="fullscreenLoading" @click="openFullScreen1">指令方式</m-button>
</template>

<script setup>
import { ref } from 'vue';

const fullscreenLoading = ref(false);

const openFullScreen1 = () => {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2000)
}
</script>