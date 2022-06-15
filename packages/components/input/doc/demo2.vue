<template>
  <m-input v-model="value" placeholder="禁用状态" disabled></m-input>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('')
</script>
