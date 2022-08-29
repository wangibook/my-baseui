<template>
  <m-time-picker type="timerange" v-model="value1" placeholder="请选择时间范围"></m-time-picker>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref(['03:12:30','05:24:35'])
</script>