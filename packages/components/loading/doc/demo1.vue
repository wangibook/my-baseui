<template>
  <m-table :data="tableData" v-loading="loading">
    <m-table-column prop="date" label="日期" />
    <m-table-column prop="name" label="姓名" />
    <m-table-column prop="address" label="地址" />
  </m-table>
  <div class="mt-20">
    <m-switch v-model="loading"></m-switch>
    <span>开启/关闭Loading</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);
const tableData = [
  {
    date: '2022-05-12',
    name: '后裔',
    address: '王者峡谷下塔旁'
  }, 
  {
    date: '2022-06-13',
    name: '鲁班',
    address: '在逛街'
  }, 
  {
    date: '2022-07-14',
    name: '孙尚香',
    address: '在打红buff'
  }, 
  {
    date: '2022-08-15',
    name: '狄仁杰',
    address: '在推塔'
  }
]
</script>

<style scoped>
.mt-20{
  display: flex;
  margin-top: 20px;
}
.mt-20 span{
  margin-left: 10px;
  font-size: 14px;
}
</style>