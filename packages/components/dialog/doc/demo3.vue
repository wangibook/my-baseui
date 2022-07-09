<template>
  <m-button @click="dialogVisible = true">自定义内容</m-button>
  <m-dialog
    v-model="dialogVisible"
    title="提示"
    width="30%"
  >
    <div>
      <m-input v-model="value" placeholder="请输入" clearable></m-input>
      <p>输入的值为：{{value}}</p>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <m-button @click="dialogVisible = false" style="margin-right: 20px">取消</m-button>
        <m-button type="primary" @click="dialogVisible = false">确定</m-button>
      </span>
    </template>
  </m-dialog>
</template>

<script setup>
import { ref } from 'vue'
const dialogVisible = ref(false)
const value = ref('')
</script>