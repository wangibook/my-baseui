<template>
  <div>
    <m-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <m-radio-button label="top"></m-radio-button>
      <m-radio-button label="right"></m-radio-button>
      <m-radio-button label="bottom"></m-radio-button>
      <m-radio-button label="left"></m-radio-button>
    </m-radio-group>
    <m-tabs v-model="activeName" :tab-position="tabPosition" style="height: 200px;">
      <m-tab-pane label="选项一" name="first">内容一</m-tab-pane>
      <m-tab-pane label="选项二" name="second">内容二</m-tab-pane>
      <m-tab-pane label="选项三" name="third">内容三</m-tab-pane>
      <m-tab-pane label="选项四" name="fourth">内容四</m-tab-pane>
    </m-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tabPosition = ref('top')
const activeName = ref('first')
</script>