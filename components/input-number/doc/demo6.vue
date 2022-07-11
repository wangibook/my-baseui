<template>
  <m-input-number v-model="num" controls-position="right" :min="1" :max="10" @change="handleChange" />
</template>

<script setup>
import { ref } from 'vue'

const num = ref(5)
const handleChange = (value) => {
  console.log(value)
}
</script>