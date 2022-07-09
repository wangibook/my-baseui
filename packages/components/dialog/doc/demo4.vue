<template>
  <m-button @click="outerVisible = true">点击打开外层 Dialog</m-button>
  <m-dialog
    v-model="outerVisible"
    title="外层 Dialog"
    width="30%"
  >
    <m-dialog
      v-model="innerVisible"
      width="20%"
      title="内层 Dialog"
      append-to-body
    >
      <span>这是一段内层信息</span>
      <template #footer>
        <span class="dialog-footer">
          <m-button @click="innerVisible = false" style="margin-right: 20px">取消</m-button>
          <m-button type="primary" @click="innerVisible = false">确定</m-button>
        </span>
      </template>
    </m-dialog>
    <div>点击确定打开内层Dialog</div>
    <template #footer>
      <span class="dialog-footer">
        <m-button @click="outerVisible = false" style="margin-right: 20px">取消</m-button>
        <m-button type="primary" @click="innerVisible = true">确定</m-button>
      </span>
    </template>
  </m-dialog>
</template>

<script setup>
import { ref } from 'vue'
const outerVisible = ref(false)
const innerVisible = ref(false)
</script>