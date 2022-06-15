<template>
  <m-space>
    <m-input v-model="value1" placeholder="请输入"></m-input>
    <m-input v-model="value2" placeholder="请输入" size="medium"></m-input>
    <m-input v-model="value3" placeholder="请输入" size="small"></m-input>
    <m-input v-model="value4" placeholder="请输入" size="mini"></m-input>
  </m-space>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>