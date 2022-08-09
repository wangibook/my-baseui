<template>
  <m-table :data="tableData" stripe>
    <m-table-column prop="date" label="日期" />
    <m-table-column prop="name" label="姓名" />
    <m-table-column prop="address" label="地址" />
  </m-table>
</template>

<script setup>
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