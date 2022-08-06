<template>
  <m-table :data="tableData" width="600">
    <m-table-column fixed="left" prop="date" label="日期" />
    <m-table-column prop="name" label="姓名" />
    <m-table-column prop="type" label="类型" />
    <m-table-column prop="province" label="省份" />
    <m-table-column prop="city" label="市区" />
    <m-table-column fixed="right" prop="address" label="地址" />
  </m-table>
</template>

<script setup>
const tableData = [
  {
    date: '2022-05-12',
    name: '后裔',
    type: '射手',
    province: '武汉',
    city: '武昌区',
    address: '王者峡谷下塔旁'
  }, 
  {
    date: '2022-06-13',
    name: '鲁班',
    type: '射手',
    province: '武汉',
    city: '武昌区',
    address: '在逛街'
  }, 
  {
    date: '2022-07-14',
    name: '孙尚香',
    type: '射手',
    province: '武汉',
    city: '武昌区',
    address: '在打红buff'
  }, 
  {
    date: '2022-08-15',
    name: '狄仁杰',
    type: '射手',
    province: '武汉',
    city: '武昌区',
    address: '在推塔'
  },
  {
    date: '2022-07-14',
    name: '孙尚香',
    type: '射手',
    province: '武汉',
    city: '武昌区',
    address: '在打红buff'
  }, 
  {
    date: '2022-08-15',
    name: '狄仁杰',
    type: '射手',
    province: '武汉',
    city: '武昌区',
    address: '在推塔'
  }
]
</script>