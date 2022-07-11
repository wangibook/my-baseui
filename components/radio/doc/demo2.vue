<template>
  <m-radio v-model="radioVal" label="1" disabled>备选项1</m-radio>
  <m-radio v-model="radioVal" label="2" disabled>备选项2</m-radio>
</template>

<script setup>
import { ref } from 'vue'

const radioVal = ref('1')
</script>