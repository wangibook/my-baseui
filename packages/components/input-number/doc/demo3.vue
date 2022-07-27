<template>
  <m-input-number v-model="num" :step="2" />
</template>

<script setup>
import { ref } from 'vue'

const num = ref(5)
</script>