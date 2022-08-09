<template>
  <div>
    <span>页数较少时的效果</span>
    <m-pagination :total="50"></m-pagination>
  </div>
   <div>
    <span>页数较多时的效果</span>
    <m-pagination :total="200"></m-pagination>
  </div>
</template>