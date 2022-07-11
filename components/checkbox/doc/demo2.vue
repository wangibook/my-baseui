<template>
  <m-checkbox v-model="checked1" disabled>备选项</m-checkbox>
  <m-checkbox v-model="checked2" disabled>备选项</m-checkbox>
</template>

<script setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
</script>