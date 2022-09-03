<template>
  <m-date-picker 
    v-model="value1" 
    placeholder="请选择日期" 
    :shortcuts="shortcuts1">
  </m-date-picker>
  <m-date-picker 
    class="date"
    v-model="value2" 
    type="daterange" 
    placeholder="请选择日期" 
    :shortcuts="shortcuts2">
  </m-date-picker>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('');
const value2 = ref([]);

const shortcuts1 = [
  {
    text:'今天',
    value: () => {
      return new Date()
    }
  },
  {
    text: '昨天',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    }
  },
  {
    text: '一周前',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    }
  }
]

const shortcuts2 = [
  {
    text: '最近一周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: '最近一个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: '最近三个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]
</script>

<style>
.date{
  margin-left: 50px;
}
</style>