<template>
  <m-radio-group v-model="radioVal">
    <m-radio :label="1">备选项</m-radio>
    <m-radio :label="2">备选项</m-radio>
    <m-radio :label="3">备选项</m-radio>
  </m-radio-group>
</template>

<script setup>
import { ref } from 'vue'

const radioVal = ref('1')
</script>