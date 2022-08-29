<template>
  <m-time-picker v-model="value1" format="HH时mm分ss秒" placeholder="请选择时间"></m-time-picker>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('03:12:30')
</script>