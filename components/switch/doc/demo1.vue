<template>
  <m-switch v-model="switchVal"></m-switch>
</template>

<script setup>
import { ref } from "vue";
const switchVal = ref(true);
</script>