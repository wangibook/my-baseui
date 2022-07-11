<template>
  <m-button @click="openMsg">文字居中</m-button>
</template>

<script setup>
import { h } from 'vue';
import Message from '../index.js'; //此处为本地示例，请使用 import {Message} from "my-baseui";引入
const openMsg = () => {
  Message({
    text: '居中的文字！',
    center: true
  })
}
</script>