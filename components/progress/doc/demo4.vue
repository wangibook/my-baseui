<template>
  <div class="demo-progress">
    <m-progress type="circle" :percentage="0" />
    <m-progress type="circle" :percentage="25" />
    <m-progress type="circle" :percentage="100" status="success" />
    <m-progress type="circle" :percentage="70" status="warning" />
    <m-progress type="circle" :percentage="50" status="error" />
  </div>
</template>

<style scoped>
.demo-progress .m-progress--circle {
  margin-right: 15px;
}
</style>