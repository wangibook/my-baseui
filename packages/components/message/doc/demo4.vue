<template>
  <m-button @click="openMsg">消息提示</m-button>
</template>

<script setup>
import { h } from 'vue';
import Message from '../index.js'; //此处为本地示例，请使用 import {Message} from "my-baseui";引入
const openMsg = () => {
  Message({
    text: '默认消息提示！',
    showClose: true
  })
}
</script>