<template>
  <div>
    <p class="pb-10">自定义行样式:</p>
    <m-table :data="data1" border :rowClassName="tableRowClassName">
      <m-table-column prop="date" label="日期" />
      <m-table-column prop="name" label="姓名"  />
      <m-table-column prop="address" label="地址" />
    </m-table>
  </div>
  <div class="mt-40">
    <p class="pb-10">自定义列样式:</p>
    <m-table :data="data1" border>
      <m-table-column prop="date" label="日期" />
      <m-table-column prop="name" label="姓名" className="table-error-column" />
      <m-table-column prop="address" label="地址" />
    </m-table>
  </div>
  <div class="mt-40">
    <p class="pb-10">自定义单元格样式:</p>
    <m-table :data="data3" border>
      <m-table-column prop="date" label="日期" />
      <m-table-column prop="name" label="姓名" />
      <m-table-column prop="address" label="地址" />
    </m-table>
  </div>
</template>

<script setup>

const data1 = [
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

const data3 = [
  {
    date: '2022-05-12',
    name: '后裔',
    address: '王者峡谷下塔旁'
  }, 
  {
    date: '2022-06-13',
    name: '鲁班',
    address: '在逛街',
    cellClassName: {
      date: 'table-info-cell-date',
      name: 'table-info-cell-name',
      address: 'table-info-cell-address'
    }
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
  },
  {
    date: '2022-08-15',
    name: '马可波罗',
    address: '在疯狂输出',
    cellClassName: {
      name: 'table-info-cell-name'
    }
  }
]

const tableRowClassName = (row, index) => {
  if (index === 1) {
    return 'warning-row';
  } else if (index === 3) {
    return 'success-row';
  }
  return '';
}
</script>

<style>
.mt-40{
  margin-top: 40px;
}
.pb-10{
  padding-bottom: 10px;
}
.m-table .warning-row{
  background-color: #fdf5e6;
}
.m-table .success-row{
  background-color: #f0f9eb;
}
.m-table .table-error-column{
  background-color: #fef0f0;
}
.m-table .table-info-cell-date{
  background-color: pink;
}
.m-table .table-info-cell-name{
  background-color: skyblue;
}
.m-table .table-info-cell-address{
  background-color: burlywood;
}
</style>