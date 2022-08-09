<template>
  <m-pagination 
    :total="200" 
    show-elevator  
    @current-change="handleCurrentChange">
  </m-pagination>
</template>


<script setup>
const handleCurrentChange = (val) => {
  console.log(val);
}
</script>