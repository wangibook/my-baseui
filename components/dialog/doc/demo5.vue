<template>
  <m-button @click="dialogVisible = true">点击打开 Dialog</m-button>
  <m-dialog
    v-model="dialogVisible"
    title="提示"
    width="30%"
    draggable
  >
    <span>这是一个可拖动的对话框</span>
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
</script>