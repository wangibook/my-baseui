<template>
  <m-pagination :total="200" show-sizer @size-change="handleSizeChange"></m-pagination>
</template>

<script setup>
const handleSizeChange = (val) => {
  console.log(val);
}
</script>
