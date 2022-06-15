<template>
  <m-input v-model="value" placeholder="请输入密码" showPassword></m-input>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('')
</script>
