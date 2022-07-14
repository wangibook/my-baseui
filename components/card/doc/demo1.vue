<template>
  <m-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>卡片名称</span>
        <m-button class="button" type="text">操作按钮</m-button>
      </div>
    </template>
    <div v-for="item in 4" :key="item" class="item">
      {{ '列表内容 ' + item }}
    </div>
  </m-card>
</template>

<style>
.box-card {
  width: 480px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item {
  font-size: 14px;
  margin-bottom: 18px;
}
</style>
