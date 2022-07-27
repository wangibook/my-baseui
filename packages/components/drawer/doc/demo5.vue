<template>
  <m-button @click="drawerShow=true">点击打开</m-button>

  <m-drawer 
    v-model="drawerShow" 
    custom-class="customClass"
    :wrapperClosable="false">
    <template #header>
      <i class="iconfont icon-email" style="font-size: 17px"></i> 新的邮件
    </template>
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