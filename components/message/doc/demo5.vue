<template>
  <m-button @click="openMsg">消息提示</m-button>
</template>

<script setup>
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();

const openMsg = () => {
  instance.proxy.$message({ 
    text: '默认消息提示！' 
  });
};
</script>