<template>
  <m-table :data="tableData" @on-selection-change="selectionChange">
    <m-table-column type="selection" width="55" />
    <m-table-column prop="date" label="日期" />
    <m-table-column prop="name" label="姓名" />
    <m-table-column prop="address" label="地址" />
  </m-table>
</template>

<script setup>
const tableData = [
  {
    id: 111,
    date: '2022-05-12',
    name: '后裔',
    address: '王者峡谷下塔旁'
  }, 
  {
    id: 222,
    date: '2022-06-13',
    name: '鲁班',
    address: '在逛街'
  }, 
  {
    id: 333,
    date: '2022-07-14',
    name: '孙尚香',
    address: '在打红buff'
  }, 
  {
    id: 444,
    date: '2022-08-15',
    name: '狄仁杰',
    address: '在推塔'
  }
]

const selectionChange = (selection) => {
  console.log(selection);
}
</script>