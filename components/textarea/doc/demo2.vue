<template>
  <m-textarea v-model="textareaVal" placeholder="请输入内容" disabled></m-textarea>
</template>

<script setup>
import { ref } from "vue";
const textareaVal = ref('');
</script>