<template>
  <m-input v-model="value" placeholder="可清空" clearable></m-input>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('')
</script>
