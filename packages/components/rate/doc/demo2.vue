<template>
  <m-rate v-model="valueHalf" allow-half></m-rate>
</template>

<script setup>
import { ref } from 'vue';
const valueHalf = ref(2.5)
</script>