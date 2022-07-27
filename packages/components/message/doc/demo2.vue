<template>
  <m-space>
    <m-button @click="openSuccess">成功</m-button>
    <m-button @click="openWarn">警告</m-button>
    <m-button @click="openInfo">消息</m-button>
    <m-button @click="openError">错误</m-button>
    <m-button @click="openCustom">自定义</m-button>
  </m-space>
</template>

<script setup>
import Message from '../index.js'; //此处为本地示例，请使用 import {Message} from "my-baseui";引入

const openSuccess = () => {
  Message({
    type: "success",
    text: "成功状态消息提示!",
  });
};
const openWarn = () => {
  Message({
    type: "warning",
    text: "警告状态消息提示!",
  });
};
const openInfo = () => {
  Message({
    text: "这是一条消息提示!",
  });
};
const openError = () => {
  Message({
    type: "error",
    text: "错误状态消息提示!",
  });
};
const openCustom = () => {
  Message({
    type: "custom",
    text: "自定义消息弹窗样式",
    icon: "icon-calendar",
    textColor: "#fff",
    bgColor: "#42B983",
  });
};
</script>