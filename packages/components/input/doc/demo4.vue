<template>
  <m-space>
    <m-input v-model="value1" placeholder="请输入" leftIcon="icon-search"></m-input>
    <m-input v-model="value2" placeholder="请输入" rightIcon="icon-calendar"></m-input>
  </m-space>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('')
const value2 = ref('')
</script>