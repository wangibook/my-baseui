<template>
  <m-date-picker v-model="value1" placeholder="请选择日期" @on-change="onChange"></m-date-picker>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('2022-08-30')

const onChange = (val) => {
  console.log(val);
}
</script>