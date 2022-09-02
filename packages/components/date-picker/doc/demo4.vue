<template>
  <m-date-picker 
    v-model="value1" 
    type="daterange" 
    placeholder="请选择日期">
  </m-date-picker>
  <m-date-picker 
    class="date" 
    v-model="value2" 
    type="daterange" 
    placeholder="请选择日期" 
    unlink-panels>
  </m-date-picker>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref([])
const value2 = ref([])
</script>

<style>
.date{
  margin-left: 30px;
}
</style>