<template>
  <m-rate v-model="value" disabled></m-rate>
</template>

<script setup>
import { ref } from 'vue';
const value = ref(2)
</script>