<template>
  <m-button type="primary" @click="openFullScreen2">服务方式</m-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();

const openFullScreen2 = () => {
  instance.proxy.$loading.show({
    screen: true,
    text: 'Loading',
    icon: 'icon-refresh',
    iconColor: '#fff',
    textColor: '#fff',
    background: 'rgba(0, 0, 0, 0.8)'
  })

  setTimeout(()=>{
    instance.proxy.$loading.close()
  },2000)
}
</script>