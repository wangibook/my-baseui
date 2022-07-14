<template>
  <m-card class="box-card">
    <div v-for="item in 4" :key="item" class="item">
      {{ 'List item ' + item }}
    </div>
  </m-card>
</template>

<style scoped>
.box-card {
  width: 480px;
}
.item {
  font-size: 14px;
  margin-bottom: 18px;
}
</style>
