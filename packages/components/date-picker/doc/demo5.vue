<template>
  <m-date-picker v-model="value1" placeholder="请选择日期" confirm @on-confirm="onConfirm"></m-date-picker>
  <m-date-picker class="date" v-model="value2" type="daterange" placeholder="请选择日期" confirm></m-date-picker>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('2022-08-30')
const value2 = ref(['2022-08-30','2022-09-15'])

const onConfirm = (val) => {
  console.log(val);
}
</script>

<style>
.date{
  margin-left: 30px;
}
</style>