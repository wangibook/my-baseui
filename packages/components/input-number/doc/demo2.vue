<template>
  <m-input-number v-model="num" disabled />
</template>

<script setup>
import { ref } from 'vue'

const num = ref(5)
</script>