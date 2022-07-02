<template>
  <m-switch v-model="switchVal1" disabled></m-switch>
  <m-switch v-model="switchVal2" disabled class="pl-10"></m-switch>
</template>

<script setup>
import { ref } from "vue";
const switchVal1 = ref(true);
const switchVal2 = ref(false);
</script>