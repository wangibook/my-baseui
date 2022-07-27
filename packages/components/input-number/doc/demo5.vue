<template>
  <m-input-number v-model="num" :max="10" :step="0.2" :precision="2" />
</template>

<script setup>
import { ref } from 'vue'

const num = ref(5)
</script>