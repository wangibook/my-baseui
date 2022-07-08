<template>
  <m-alert title="不可关闭的 alert" type="success" :closable="false"></m-alert>
  <m-alert title="自定义 close-text" type="info" close-text="关闭"></m-alert>
  <m-alert title="警告提示的文案" type="warning" @close="alertClose"></m-alert>
</template>

<script setup>
const alertClose = () => {
  console.log('点击了关闭');
}
</script>