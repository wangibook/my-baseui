<template>
  <div class="demo-progress">
    <m-progress :percentage="50" />
    <m-progress :percentage="100" :format="format"></m-progress>
    <m-progress :percentage="100" status="success"></m-progress>
    <m-progress :percentage="100" status="warning"></m-progress>
    <m-progress :percentage="50" status="error"></m-progress>
  </div>
</template>

<script setup>
const format = (percentage) => (percentage === 100 ? '满' : `${percentage}%`)
</script>

<style scoped>
.demo-progress .m-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>