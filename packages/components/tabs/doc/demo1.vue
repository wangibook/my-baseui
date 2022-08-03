<template>
  <m-tabs v-model="activeName" @tab-click="handleClick">
    <m-tab-pane label="选项一" name="first">内容一</m-tab-pane>
    <m-tab-pane label="选项二" name="second">内容二</m-tab-pane>
    <m-tab-pane label="选项三" name="third">内容三</m-tab-pane>
    <m-tab-pane label="选项四" name="fourth">内容四</m-tab-pane>
  </m-tabs>
</template>

<script setup>
import { ref } from 'vue';

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>