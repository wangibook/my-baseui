<template>
  <m-button @click="drawerShow=true">自定义内容</m-button>

  <m-drawer
    v-model="drawerShow"
    title="基本使用"
  >
    <div>
      <m-input v-model="value" placeholder="请输入" clearable></m-input>
      <p>输入的值为：{{value}}</p>
    </div>
    <template #footer>
      <span class="drawer-footer">
        <m-button @click="drawerShow = false" style="margin-right: 20px">取消</m-button>
        <m-button type="primary" @click="drawerShow = false">确定</m-button>
      </span>
    </template>
  </m-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawerShow = ref(false);
const value = ref('');
</script>